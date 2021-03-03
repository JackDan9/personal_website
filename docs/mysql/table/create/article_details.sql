CREATE TABLE `article_details` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
    `parent_id` int(11) NOT NULL COMMENT '文章父级序号',
    `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
    `content_url` varchar(128) DEFAULT NULL COMMENT '文章链接',
    `author` varchar(128) DEFAULT NULL COMMENT '文章作者',
    `created_on` datetime DEFAULT NULL COMMENT '创建时间',
    `updated_on` datetime DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;