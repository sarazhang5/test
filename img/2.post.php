<?php
/**
 * @Author: Marte
 * @Date:   2016-10-11 11:51:54
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-10-11 12:52:23
 */
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$username=$_POST['username'];
$age=$_POST['age'];
echo "dage.你的名字：{$username},年龄：{$age}";