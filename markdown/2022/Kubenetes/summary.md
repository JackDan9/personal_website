# kubernetes 容器编排引擎

------

| 标题 | 内容 |
| --- | --- |
| kubernetes | 定义、作用、特点 |
| Docker | 定义、作用、特点 |
| kubernetes | 结构解偶 |
| kubernetes | Master节点 |
| kubernetes | Node节点 |

------



## Master节点

### kube-apiserver

- kube-apiserver是集群的统一入口，各组件协调者，以HTTP Rest提供接口服务，所有对象资源的增、删、改、查和监控操作都交给apiserver处理后再提交给ETCD存储。

### kube-controller-manager
- kube-controller-manager是kubernetes里素有资源对象的自动化控制中心，处理集群中常规后台任务，一个资源对应一个控制器，而controller-manager就是负责管理这些控制器的。

### kube-scheduler
- kube-scheduler根据调度算法为新创建的Pod选择一个Node节点，可以任意部署(多节点)，可以部署在同一个节点上，也可以部署在不同的节点上。根据负载均衡区选择不同的节点，以达到节点的均衡负载。

### Etcd
- Etcd是一个分布式的，对称(一致)的key-value存储，主要用途是共享配置和服务发现，保存集群状态数据，比如Pod、Service等对象信息，由CoreOS公司设计和开发。
- Etcd的设计目的是解决集群管理系统中的配置文件存储和分发问题。

------

## Node节点

### kubelet
- kubelet是Master在Node节点上的Agent(代理)，与Master密切协作，管理本机运行容器的生命周期，负责Pod对应的容器的创建、启停等任务，实现集群管理的基本功能。

### kube-proxy
- 在Node节点上实现Pod网络代理，实现Kubernetes Service的通信，维护网站规则和四层负载均衡工作。

### docker engine
- Docker引擎，负责本机的容器创建和管理工作。


  
------

## Node节点





> https://kubernetes.io/zh-cn/docs/concepts/overview/what-is-kubernetes/