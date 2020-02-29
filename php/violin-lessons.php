<?php
  //serve proper landing page based on whether or not user is on mobile

  require_once "Mobile_Detect.php";
  $detect = new Mobile_Detect;

  if ($detect->isMobile() && !$detect->isTablet()) {
    include("violin-lessons-mobile.php");
  }
  else {
    include("violin-lessons-desktop.php");
  }
 ?>
