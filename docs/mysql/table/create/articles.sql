CREATE TABLE `articles` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
    `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
    `desc` varchar(1024) DEFAULT NULL COMMENT '文章描述',
    `tags` text DEFAULT NULL COMMENT '文章标签',
    `created_on` datetime DEFAULT NULL COMMENT '创建时间',
    `updated_on` datetime DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;