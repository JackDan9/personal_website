#!/bin/bash

path=`pwd`
app_name=$(basename $path)

echo $app_name

# Get the newest tar.gz
if [ $# == 1 ]; then
    app_ver=$1
else
    app_ver=$(ls -lt *.tar.gz|head -n 1|awk '{print $9}')
fi

tar -xzvf $app_ver -C ./dist

echo $app_ver