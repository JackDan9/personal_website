# CPU密集型任务|CPU-intentsive(Node)

| 标题 | 内容 |
| --- | --- |
| CPU密集型 | CPU密集型定义 |
| Node-CPU密集型任务 | Node 如何处理CPU密集型任务 |
| Node-CPU密集型任务原理 |  Node 针对于CPU密集型任务的原理 |

## CPU密集型

- 在了解Node处理CPU密集型任务之前，我们要大致了解一下CPU密集型任务的概念。概念如下:
- 如果是CPU密集型任务(或者是计算密集型任务)，那么它完成一项任务的时间取决于CPU(Center Processing UNIT 中央处理器)的速度。所以也就存在如果我的计算机(或者服务器)处理器的占用率过高，更有甚者在某段时间内保持100%的占用率。进程(有一些体现在外围设备的操作上)处理就会变得缓慢，也有可能被无限期地搁置推迟。





> https://zh.m.wikipedia.org/zh-hans/CPU%E5%AF%86%E9%9B%86%E5%9E%8B
> https://yarin.dev/nodejs-cpu-bound-tasks-worker-threads/
> https://bytearcher.com/articles/io-vs-cpu-bound/
