# Nginx

| 标题 | 内容 |
| Nginx参数 | Nginx参数说明 |

------

## Nginx参数

```shell
# 定义Nginx Worker进程运行的用户和用户组
# 默认值(也叫缺省值也就是在你不配置的时候)是nobody nobody账号
user www www; # 用www 用户组wwww配置
# Nginx
# 默认值是1
worker_processes 8;
```