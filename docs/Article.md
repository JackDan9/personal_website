---
order: 4
title: Atricle 文章信息说明文档
---

# Article
- 博客文章的字段设计，接口设计以及存储和获取设计的方案说明

------

## Article 字段设计


|  字段名  | 类型 | 说明 | 样例 |
| --- | --- | ------- | ----- |
| id | Integer | 文章序列号, 也是文章表的主键值 | 1 |
| author | String | 文章作者, 默认是只支持邮箱 | j.dan92016@gmail.com |
| title | String | 文章标题 | 2020年个人总结 |
| desc | String | 文章简述 | 2020年，疫情来袭，所有的计划在一开始就被Pass，今年的总结注定是不顺利的 |
| content | String | 文章内容 | `<mavon-editor>`编辑的富文本内容 |
| img_url | String | 文章图片链接 | http://www.jackdan.org/images/1.png |
| category | Array<String> | 文章类型 | 个人总结, React, Redux, React-Redux |
| tags | Array<String> | 文章标签 | 2020, 笔记 |
| state | Boolean | 文章状态 | 0为下架文章, 1为架上文章 |
| create_time | Datetime | 文章创建日期 | 2020-11-29 15:35:20 |
| update_time | Datetime | 文件更新日期 | 2020-11-30 12:10:30 |


------


## Article 接口设计
