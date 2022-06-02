<?php
session_start();

if(isset($_GET["theme"]))
{
    $theme = $_GET["theme"];

    if($theme == "rf.css" + "igra.css" + "footer.css" + "top.css" + "body.css" || $theme == "dark")
    {
   	 $_SESSION["theme"] = $theme;
    }
}