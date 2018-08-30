var express = require("express");

var $mysql   = require("mysql");

var sql = require("mysql");       //   这句话是，引入当前目录的mysql模板   mysql就是我们上面创建的mysql.js

var $sql = $mysql.createConnection(sql.mysql)       //创建一个连接        mysql是我们上面文件暴露出来的模板的方法

$sql.connect()                          //运用了这句才是真正连接



var select = "select * from user"   //假设我们数据表叫mono  *代表查询全部内容  select查询

$sql.query(select,function(err,res){   //err提示错误信息  res是查询到的内容全在里面

    if(err){

        console.log("错误",err)//我们打印出，错误信息

    }else {

        console.log(res)      //打印出我们查询的内容

    }

})