<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");

    if(!empty($_POST)) {
        $res = json_encode($_POST);
        echo $res;
    }
    else echo "Response from PHP at " . date("h:i:sa");


?>