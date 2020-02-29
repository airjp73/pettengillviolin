<?php /*

  In order to set a link as active, the calling page must have an $NAV_ACTIVE_LINK variable set
  The sent value for $NAV_ACTIVE_LINK should be the file name without the .php extension

*/ ?>

<nav id="main-nav" class="navbar navbar-expand-md navbar-light bg-light fixed-top">
  <!--Studio Name-->
  <div class="col-3 text-center">
    <a class="navbar-brand" href="/">Pettengill Violin Studio</a>
  </div>

  <!--Toggle button when collapsed-->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <?php
      if (!isset($NAV_ACTIVE_LINK))
        $NAV_ACTIVE_LINK="";
   ?>

  <!--main navbar links-->
  <div id="nav-menu" class="col-9 col-xl-6 collapse navbar-collapse" id="navbar-content">
    <ul id="links" class="navbar-nav mx-auto mx-lg-auto">
      <li class="nav-item">
        <a class="nav-link <?php if ($NAV_ACTIVE_LINK == 'contact') {?>   active   <?php ;} ?>" href="contact.php">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link <?php if ($NAV_ACTIVE_LINK == 'instrument') {?>   active   <?php ;} ?>" href="instrument.php">How to get a violin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link <?php if ($NAV_ACTIVE_LINK == 'studio') {?>   active   <?php ;} ?>" href="studio.php">Location</a>
      </li>
      <a href="https://login.mymusicstaff.com" class="btn btn-outline-success sm-only">Login</a>
    </ul>
  </div>
  <a href="https://login.mymusicstaff.com" class="login-btn btn btn-outline-success not-sm">Log in</a>
</nav>
