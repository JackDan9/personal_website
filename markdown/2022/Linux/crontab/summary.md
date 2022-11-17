# Linux Crond

| 标题 | 内容 |
| --- | --- |
| crond | 定义，作用，特点 |
| crond | 配置参数说明 |
| crond | crontab命令方法 |
| crond | crond服务的注意事项 |

------

## crond定义，作用，特点

### crond定义与作用

- Linux系统定时任务是由cron(crond)系统服务来控制的。服务如下:

```shell
[root@cess-master01 ~]# systemctl status crond
● crond.service - Command Scheduler
   Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2022-10-17 10:24:03 CST; 5 days ago
 Main PID: 14999 (crond)
    Tasks: 1
   Memory: 7.3M
   CGroup: /system.slice/crond.service
           └─14999 /usr/sbin/crond -n

Oct 17 10:24:03 cess-master01 systemd[1]: Started Command Scheduler.
Oct 17 10:24:03 cess-master01 systemd[1]: Starting Command Scheduler...
Oct 17 10:24:03 cess-master01 crond[14999]: (CRON) INFO (Syslog will be used instead of sendmail.)
Oct 17 10:24:03 cess-master01 crond[14999]: (CRON) INFO (RANDOM_DELAY will be scaled with factor 1% if used.)
Oct 17 10:24:03 cess-master01 crond[14999]: (CRON) INFO (running with inotify support)
Oct 17 10:24:03 cess-master01 crond[14999]: (CRON) INFO (@reboot jobs will be run at computer's startup.)
[root@cess-master01 ~]# cat /usr/lib/systemd/system/crond.service
[Unit]
Description=Command Scheduler
After=auditd.service systemd-user-sessions.service time-sync.target

[Service]
EnvironmentFile=/etc/sysconfig/crond
ExecStart=/usr/sbin/crond -n $CRONDARGS
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process

[Install]
WantedBy=multi-user.target

[root@cess-master01 ~]#
```

> 注意: `/usr/lib/systemd/system`是系统服务，而`/etc/systemd/system`是用户服务，一般我们自己维护的服务都放在`/etc/systemd/system`目录下不与系统服务产生冲突。

- Linux系统上面原本就有非常多的计划性工作，所以`crond`系统服务本身默认是启动的。
- 当然了，如果我们自己需要设置定时计划任务，我们可以使用`crontab`命令去设置定时计划任务。下面看下`crontab`命令的操作以及操作之后`crond`配置变化。

### crond特点

- `crond`是Linux下用来周期性的执行某个任务或者等待处理某些事件的一个守护进程，与Windows下的计划任务类似，当安装完成操作系统后，默认会安装此服务工具，并且会自动启动`crond`进程，`crond`进程每**分钟**会定期检查是否有要执行的任务，如果有**要执行的任务，则自动执行该任务**。
- 但是任务调度的形式有可以分为两种，一种是**系统任务调度**，另一种是**用户任务调度**。我们在下面配置方式中会详细介绍。

------

## 配置`crond`

- 我们已经知道`crond`的任务调度类型有两种，**系统任务调度**与**用户任务调度**，我们先来说说**系统任务调度**

### 系统任务调度

- 实际上`crond`的服务可以追溯到UNIX系统上，Linux是从UNIX演进而来的(这里`crond`服务指的Linux系统上的`crond`服务)，所以Linux系统周期性所要执行的工作，比如说Cache中的数据写入硬盘，日志清理等都是**系统周期性所要执行的任务**。
- 系统周期性所要执行的任务配置是在`/etc/crontab`文件中，如下所示:

```shell
[root@cess-master01 ~]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

[root@cess-master01 ~]#
```

- 以上是默认的配置，前三行是用来配置`crond`任务运行的环境变量，默认配置解释:
- 第一行`SHELL=/bin/bash`变量指定了系统要使用哪个`SHELL COMMAND`，默认都是`bash`；
- 第二行`PATH`变量指定了系统执行命令的路径；
- 第三行`MAILTO`变量指定了`crond`的任务执行信息将通过电子邮件发送给`root`用户，如果`MAILTO`变量的值为空，则表示不发送任务执行信息给用户。

```shell
[root@cess-master01 ~]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
HOME=/
# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
59 * * * * root scrapy crawl mygirl

[root@cess-master01 ~]#
```

- 第四行`HOME/`变量指定了在执行命令或者脚本时使用的主目录。如果不填写`crontab`的默认执行路径为**当前用户的根路径**。比如: 
```shell
[root@VM-64-144-centos ~]# cd ~
[root@VM-64-144-centos ~]# pwd
/root
[root@VM-64-144-centos ~]
```

### 用户任务调度

- **用户定期要执行的任务工作**，比如数据库数据备份、定时邮件提醒等。用户自己可以使用`crontab`工具来定制自己的计划任务。所用用户定义的`crontab`文件都被保存在`/var/spool/cron`目录中。如下:

```shell
[root@VM-64-144-centos ~]# cat /var/spool/cron/root
*/5 * * * * flock -xn /tmp/stargate.lock -c '/usr/local/qcloud/stargate/admin/start.sh > /dev/null 2>&1 &'
20 */1 * * * sh /usr/share/nginx/fallback/fallback_copy.sh > /usr/share/nginx/fallback/fallback_copy.log
[root@VM-64-144-centos ~]#
```

- `/etc/cron.deny`文件，这个文件中所列用户不允许使用`crontab`命令；
- `/etc/cron.allow`文件，这个文件中所列用户允许使用`crontab`命令；
- `/var/spool/cron/`文件，所有用户`crontab`文件存放的目录，以用户名命名。

```shell

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
59 * * * * root scrapy crawl mygirl
```

- 用户所建立的`crontab`文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式分为六个字段，前五段是时间设定段，第六段诗任务调度用户设定段，第七段是要执行的命令段。格式如下:

```shell
minute hour day month week user-name command
```

- 其中:
- `minute`: 表示分钟，可以是从0到59之间的任何整数;
- `hour`: 表示小时，可以是从0到23之间的任何整数;
- `day`: 表示日期，可以是从1到31之间的任何整数;
- `month`: 表示月份，可以是从1到12之间的任何整数;
- `week`: 表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日;
- `user-name`: 指定某个用户有权限执行command命令，默认是root用户;
- `command`: 要执行命令，可以是系统命令，也可以是自己编写的脚本文件。

- 在以上各个字段中，还可以使用以下特殊字符:
- **星号(*)**: 代表所有可能的值，例如`minute`字段如果是星号，则表示在满足其它字段的制约条件后每分钟都执行该命令操作。
- **逗号(,)**: 可以用逗号隔开的值指定一个列表范围，例如: `"1,2,5,7,8,9"`。
- **中杠(-)**: 可以用整数之间的中杠表示一个整数范围，例如: `"2-6"`表示"2,3,4,5,6"。
- **正斜线(/)**: 可以用正斜线指定时间的时间频率，例如: `"0-23/2"`表示每两小时执行一次。同时**正斜线**可以和**星号**一起使用，例如: `*/10`, 如果用在`minute`字段，表示**每十分钟执行一次**。

- 以上就是crontab配置参数的说明，可以详细参考使用。

- 实例:

```shell
# 每隔1分钟执行一次command
* * * * * user-name command

# 每小时的第3和第15分钟执行
3,15 * * * * user-name command

# 在上午8点到11点的第3和第15分钟执行
3,15 8-11 * * * user-name command

# 每隔两天的上午8点到11点的第3和第15分钟执行 
3,15 8-11 */2 * * user-name command

# 每隔星期一的上午8点到11点的第3和第15分钟执行
3,15 8-11 * * 1 user-name command

# 每晚的21:30重启网络
30 21 * * * user-name /etc/init.d/network restart

# 每月1,10,22日的4:50重启network
50 4 1,10,22 * * user-name /etc/init.d/network restart

# 每周六、周日的6:30重启network
30 6 * * 6,0 user-name /etc/init.d/network restart

# 每天18:00至23:00之间每隔30分钟重启network
0,30 18-23 * * * user-name /etc/init.d/network restart

# 每一小时重启network
* */1 * * * user-name /etc/init.d/network restart

# 每隔4个小时重启network
* */4 * * * user-name /etc/init.d/network restart

# 每星期六的晚上23:00重启network
0 23 * * 6 user-name /etc/init.d/network restart

# 晚上11点到早上7点之间，每隔一个小时重启network
* 23-7/1 * * * user-name /etc/init.d/network restart

# 每月的4号与每周一到周三的11点重启network
0 11 4 * mon-wed user-name /etc/init.d/network restart

# 一月一号的4点重启network
0 4 1 jan * user-name /etc/init.d/network restart

# 每小时执行数据库备份到tmp目录的all.sql文件中
01 * * * * user-name(root) mysqldump -uroot -ppwd -all-databases > /tmp/all.sql
```

------

## crontab命令方法

- `crontab -l` `list`命令列出`crontab`文件。

```shell
[root@VM-64-144-centos ~]# crontab -l
*/5 * * * * flock -xn /tmp/stargate.lock -c '/usr/local/qcloud/stargate/admin/start.sh > /dev/null 2>&1 &'
20 */1 * * * sh /usr/share/nginx/fallback/fallback_copy.sh > /usr/share/nginx/fallback/fallback_copy.log
[root@VM-64-144-centos ~]#
```


- `crontab -e` `edit`命令编辑`crontab`文件，进入到`vim`编辑器去编辑任务调度。

```shell
[root@VM-64-144-centos ~]# crontab -e
crontab: no changes made to crontab
[root@VM-64-144-centos ~]#
```

- `crontab -r` `remove`命令编辑`crontab`文件。请确认需要删除之后进行删除。

```shell
[root@VM-64-144-centos ~]# crontab -r

```

- 如果不小心误删除了crontab文件，假设你在自己的`$HOME`目录下还有一个备份，那么可以将其拷贝到`/var/spool/cron/<username>`，其中`<username>`是用户名，如果由于权限问题无法完成拷贝，可以用:

```shell
[root@VM-64-144-centos ~]# crontab <filename>

```

- 其中，`<filename>`是你在`$HOME`目录中副本的文件名。
- 建议你在自己的`$HOME`目录中保存一个该文件的副本。我就有过类似的经历，有数次误删了crontab文件(因为r健紧挨在e健的右边)。这就是为什么有些系统文档建议不要直接编辑`crontab`文件，而是编辑该文件的一个副本，然后重新提交新的文件。
> 注意: 有些crontab的命令有些怪，所以在使用crontab命令时要格外小心。如果遗漏了任何选项，crontab可能会打开一个空文件，或者看起来像是个空文件。这个时候不要`delete`健退出，不要强制退出`<Ctrl+D>`，否则你将丢失`crontab`文件。

------

## crond注意事项

### 环境变量问题

