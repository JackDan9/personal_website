#!/bin/bash

###
 # @Description 自动话构建前端代码和上传到服务器
 # @Date 2021-12-14 9:22:21
 # @Author Shanjunjun
 # @LastEditTime 
 # @LastEditors 
###

packageName=${1:-$PACKAGE_NAME}
time=$(date "+%Y%m%d%H%M%S")


echo "打包时间"+$time

if [[ -z $packageName ]];then
  packageName="personalWebsite"
fi

echo "包名"+$packageName

# set的用法 https://juejin.cn/post/6960848214954082340
set -e

echo '************************start build*****************************'
npm run build && chmod -R 777 dist
echo '************************end build*****************************'


mkdir -p ./develop
tar -zcvf ./develop/${packageName}-${time}.tar.gz -C dist/ .

echo '************************start upload tar*****************************'
# mac sshpass curl -L https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb > sshpass.rb && brew install sshpass.rb && rm sshpass.rb
sshpass -p password scp -P port || 22 ./develop/${packageName}-${time}.tar.gz root@0.0.0.0.0:/opt/html/personalWebsite 
echo '************************end upload tar*****************************'

echo '************************start updating dist in server*****************************'
sshpass -p password 
echo '************************end updating dist in server*****************************'