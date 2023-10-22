<?php

$name = $_POST["dataname"];
$pssword = $_POST["datapassword"];


$connection = new mysqli("localhost", "root", "V12345678", "test");

$query = "SELECT * FROM `user` WHERE `name`='".$name."' AND `password`='".$pssword."'";
$result = $connection->query($query);

$row = $result->num_rows;

if($row == 0){
    echo("invalid name or password.");
}else{
  echo("login successfully");  
}