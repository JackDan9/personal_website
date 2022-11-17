
需求
需要监控sass环境资源瓶颈，告警接口配置到企业微信机器人中进行提示

监控优先级&每个规则说明
1.监控优先级
名称	内容	优先级	备注
主机(Host)	CPU, Memory, Disk	



Kubenetes	


Kafaka	


Elasticsearch	Heap(堆)使用率(80,90), Disk Space(磁盘剩余空间)(80, 90)	
172.21.64.27:9200
172.21.64.27 cess121-mw-es01
172.21.64.43 cess121-mw-es02
172.21.64.24 cess121-mw-es03
172.21.64.56 cess121-mw-es05
172.21.64.145 cess121-mw-es04

Mysql	


Nginx	


Zookeeper	


JVM	


2.规则说明，参考: https://awesome-prometheus-alerts.grep.to/rules#host-and-hardware
名称	英文	规则	说明
主机内存不足
Host out of memory	
- alert: HostOutOfMemory
    expr: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: Host out of memory (instance {{ $labels.instance }})
      description: "Node memory is filling up (< 10% left)\n VALUE = {{ $value }}\n LABELS = {{ $labels }}"

内存高压下的主机内存	
Host memory under memory pressure
- alert: HostMemoryUnderMemoryPressure
 expr: rate(node_vmstat_pgmajfault[1m]) > 1000
 for: 2m
 labels:
 severity: warning
 annotations:
 summary: Host memory under memory pressure (instance {{ $labels.instance }})
 description: "The node is under heavy memory pressure. High rate of major page faults\n VALUE = {{ $value }}\n LABELS = {{ $labels }}"


主机异常的网络吞吐量
Host unusual network throughput in	
- alert: HostUnusualNetworkThroughputIn
 expr: sum by (instance) (rate(node_network_receive_bytes_total[2m])) / 1024 / 1024 > 100
 for: 5m
 labels:
 severity: warning
 annotations:
 summary: Host unusual network throughput in (instance {{ $labels.instance }})
 description: "Host network interfaces are probably receiving too much data (> 100 MB/s)\n VALUE = {{ $value }}\n LABELS = {{ $labels }}"




告警地址
内容	地址链接
prometheus	http://172.27.65.65:9090/
grafana	http://172.27.65.65:3000/
alertmanager	http://172.27.65.65:9093/
Nightingale	http://172.27.65.65:8765/
Prometheus-alert配置
https://prometheus.io/docs/alerting/latest/configuration/

实现方案
1.企业微信应用
参考链接: 监控报警

2.企业微信群机器人
企业微信官方对接方式: https://developer.work.weixin.qq.com/document/path/91770?version=4.0.8.843&platform=mac#markdown%E7%B1%BB%E5%9E%8B

3.alertmanager服务配置
global:
  resolve_timeout: 5m
 
route:
  group_by: ['alertname', 'instance']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'wechat'
receivers:
- name: 'wechat'
  wechat_configs:
  - api_secret: ''                                            #企业微信secret
    corp_id: ''                                               #企业微信corp_id
    api_url: 'https://qyapi.weixin.qq.com/cgi-bin/'           #企业微信报警url
    to_user: '@all'                                           #企业微信接受者
    agent_id: '1000007'                                       #企业微信agent_id
    message: "{{ .GroupLabels.instance }} {{ .CommonAnnotations.summary  }}"  #报警消息模板

4. 夜莺系统地址
http://172.27.65.65:8765/

username: root

password: Tianshu_123456

5.夜莺系统配置
创建用户中指定更多联系方式为: Wecom Robot Token

Wecom Robot Token为企业微信机器人key值，例如: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=faaa84f7-2a2d-40c6-b98a-15dadd59f5f7

这里的Wecom Robot Token就是faaa84f7-2a2d-40c6-b98a-15dadd59f5f7

单军军 > 监控告警CESS > image2022-6-27_17-49-57.png

6.计划表
标题	内容	开始时间	结束时间	时间花费
夜莺系统优势总结	对比AIOS自身能够提供的监控
1.为什么需要搞一套新的(架构，使用方式以及集成颗粒度上)	2022-06-29	

对接K8S	
2022-06-30	

监控大盘	接入HOST主机大盘	2022-07-01	

去掉系统信息模块	
2022-06-29	2022-06-30	1d
私有化部署方案	梳理私有化部署方案	2022-06-29	

7. 监控K8S资源方案
方案1: grafana-agent
grafana-agent采集到夜莺: https://n9e.github.io/docs/appendix/grafana-agent/how-to-monitoring-k8s/
grafana-agent配置remote-write-url到夜莺系统，但是需要k8s集群都装上

方案2: kube-state-metrics
kube-state-metrics: https://github.com/kubernetes/kube-state-metrics/tree/master/docs

kube-state-metrics 收集cess本身pod的监控信息，IP为Pod IP地址，这里是10.244.8.10, 端口为8081，可以通过curl命令去获取metrics监控信息

单军军 > 监控告警CESS > Screen Shot 2022-07-01 at 11.42.37 AM.png

接下来需要将metrics推给夜莺，采用ingress去建立通信，ingress参照: https://blog.csdn.net/u010275850/article/details/122644489，https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#simple-fanout

单军军 > 监控告警CESS > image2022-7-1_13-9-9.png

ingress配置如下: 内置的kube-state-metrics是8081端口，可以通过kubelet命令查看

apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: kube-state-metrics
  namespace: monitoring
  annotations:
    kubernetes.io/ingress.class: traefik
spec:
  rules:
  - http:
      paths:
      - path: /metrics
        backend:
          serviceName: kube-state-metrics
          servicePort: 8081
kubelet查看kube-state-metrics如下:

kubectl get pods -n monitoring -o wide
kubectl describe pod kube-state-metrics-7669f64c44-tglt7 -n monitoring
# 查看Args: 可以看到IP和端口(IP为0.0.0.0, 端口为8081)


