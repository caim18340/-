<?php
header("content-type:text/html;charset=utf-8");
$uname = $_GET["uname"];
$upwd = $_GET["upwd"];
header("Access-Control-Allow-Origin:*");
mysql_connect("127.0.0.1","root","root") or die("连接失败");
mysql_select_db("xiaomi");
mysql_query("set names utf8");
$sql = "select * from `user` where uname='$uname'";
$res = mysql_query("$sql");
$arr = mysql_fetch_assoc($res);
if($arr){
    if($upwd == $arr["upwd"]){
        echo 1;
    }else{
        echo 2;
    }
}else{
    echo 0;
}
