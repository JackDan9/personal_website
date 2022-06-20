# UUID VS ID

| 标题 | 内容 |
| --- | --- |
| UUID定义 | UUID是什么、作用 |
| UUID组成 | UUID生成的方式，组成 |
| UUID主键 | UUID主键优缺点对比ID |
| UUID方案 | UUID做为主键的方案，优化方式 |

------

## UUID定义

- `UUID`全称是通用唯一识别码(Universally Unique IDentifier)，是一种**软件构建**的标准，同时也为[开放软件基金会](https://zh.wikipedia.org/wiki/%E9%96%8B%E6%94%BE%E8%BB%9F%E9%AB%94%E5%9F%BA%E9%87%91%E6%9C%83)组织在[分布式计算](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/85448)环境领域的一部分。
- `UUID`作用是让分布式系统中的**所有元素**，都能有**唯一的辨识信息**，而**不需要**通过中央控制端来做辨识信息的指定，类似于我们的身份证是表明我们唯一身份的标识。如此一来，每个人都可以创建不与其它人冲突的`UUID`。在这样的情况下，就不需要考虑数据库创建时的名称重复问题。目前最广泛应用的UUID，是微软公司的[全局唯一标识符](https://baike.baidu.com/item/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6)(GUID Globally Unique IDentifier)，而其它重要的应用，则有Linux [ext2](https://zh.wikipedia.org/wiki/Ext2)/[ext3](https://zh.wikipedia.org/wiki/Ext3)文件系统，LUKS加密分区、GNOME、KDE、Mac OS X等等。

------

## UUID组成

```javascript
// Node - Eggjs 
const uuidv1 = require("uuid/v1");

function generateUUID() {
  // 结果之一: "5d34f1f0c21711ec9a1717943883943e"
  return uuidv1().repleace(/-/g, "");
}
```

- UUID是指在一台机器上生成的数字，它保证对在**同一时空中的所有机器都是唯一的**。通常平台会提供生成的API。按照[开发软件基金会](https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E8%BD%AF%E4%BB%B6%E5%9F%BA%E9%87%91%E4%BC%9A)(OSF)制定的标准计算，用到了**以太网卡地址**、**纳秒级时间**、**芯片ID码**和**许多可能的数字**
- UUI由一下几部分的组合:
- 1. 当前日期和时间，UUID的第一个部分与时间有关，如果你在生成一个UUID之后，过几秒又生成一个UUID，则第一个部分不同，其余相同。
- 2. 时钟序列。
- 3. 全局唯一的IEEE机器识别号，如果有网卡，从网卡MAC地址获得，没有网卡以其它方式获得。
- UUID的**唯一缺陷在于生成的结果串会比较长**。而标准的UUID格式为: `XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX`(8-4-4-4-12(32位))，其中每个X是**0-9或者a-f范围内的一个十六进制的数字**，可以从cflib下载CreateGUID() UDF记性转换。简单的UUID可以通过ColdFusion中的CreateUUID()函数很简单生成格式为: XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXXXXXX(8-4-4-16)。
- 目前为止业界一共有5种方式生成UUID，IETF发布的UUID规范([A Universally Unique IDentifier(UUID) URN Namespace](https://www.ietf.org/rfc/rfc4122.txt))

------

## UUID主键

### 为什么能够成为主键(Primary Key)

- 其实在InnoDB存储引擎(Mysql)下，自增长的ID做主键性能已经达到了最佳。不论是存储和读取速度都是最快的，而且占的存储空间也是最小的。但是在我们实际的项目中会存在问题，**历史数据表的主键id**会与**数据表的id**重复，两张自增id做主键的表合并时，id一定会有冲突，但如果各自的id还关联了其他表，这就很不好操作了。如果使用了UUID，生成的ID**不仅是`表`独立的**，而且**还是`库`独立的**。对以后的数据操作很有好处，可以说是彻底解决了历史数据和新数据之间的冲突问题，这也是为什么UUID可以选择成为主键的原因，但是它也有缺点。

### 成为主键的缺点 VS ID

- 1. 影响插入(INSERT)速度，并且造成硬盘使用率低；
- 2. UUID之间比较大小相对数字ID慢很多，影响查询速度；
- 3. UUID占空间大(一个就32位字节)，一般会选择VARCHAR(36)，如果你建的索引越多，影响越严重；

### 成为主键的优点 VS ID

- 非常明显的优点，它是全局唯一的，出现需要数据拆分、合并存储的时候，能够达到全局整体的唯一性。

------

## UUID做为主键的方案

- 1. InnoDB引擎表是基于[B+树](https://zh.wikipedia.org/wiki/B%2B%E6%A0%91)的索引组织表;
- 2. B+树: B+树是为**磁盘**或者**其他直接存取辅助设备**而设计的一种**平衡查找树**，在B+树中，所有记录节点都是按健值的大小顺序存放在同一层的叶节点中，各叶节点指针进行连接。
- 3. InnoDB主索引: 叶节点包含了完整的数据记录。这种索引叫做聚焦索引。InnoDB的索引能提供一种非常快速的主键查找性能。不过，它的辅助索引也会包含主键列，所以，如果主键定义的比较大，其他索引也将很大。如果想在表上定义很多索引，则争取尽量把主键定义得小一些。**InnoDB不会压缩索引**。
- 4. 聚焦索引这种实现方式使得按照主键的搜索十分高效，但是辅助索引需要检索两遍索引: 首先检索辅助索引获得主键，然后用主键道主索引中检索获得记录。

### 方案

- 1. 如果InnoDB表的数据写入顺序能和B+树索引的叶子节点顺序一致的话，这时候存取效率是最高的。为了**存储和查询性能**应该使用**自增长ID做主键**。
- 2. 对于InnoDB的主索引，数据会按照主键进行排序，由于**UUID的无序性**，InnoDB会**产生巨大的IO压力**，此时**不适合使用UUID做物理主键**，可以把它作为**逻辑主键**，物理主键依然使用自增ID。**为了全局的唯一性，应该使用UUID做索引关联其他表或者做外键**。

```sql
-- ID继续为主键, UUID为外键
CREATE TABLE `system_roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT "序号",
  `rid` VARCHAR(36) DEFAULT NULL COMMENT "角色UUID",
  `name` VARCHAR(64) DEFAULT NULL COMMENT "角色名",
  `describe` VARCHAR(64) DEFAULT NULL COMMENT "角色描述",
  `status` BOOLEAN DEFAULT true COMMENT "角色状态",
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 优化方式

- 如果是主从即M-S模式，最好是不使用mysql自带函数UUID来生成唯一主键，因为主表生成的UUID要再关联从表是，需要再去数据库查处这个UUID，需要多进行一次数据库交互，而且在这个时间差里面主表很有可能还有数据生成，这样就很容易导致关联的UUID出错。如果真要使用UUID，可以在服务端中生成后，直接存储到DB里，这时主从的UUID就是一样的了。

------

> Thinking in JackDan
> https://cloud.tencent.com/developer/article/1914179?from=article.detail.1184708