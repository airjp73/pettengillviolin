<html>
  <?php include("head.php"); ?>

  <body>

    <div class="row">
      <div class="col-md-4 col-lg-3 side-buffer">
        <?php include("sidebar.php"); ?>
      </div>
      <div class="main-content-box bg-light col-12 col-md-8 col-lg-6">

        <h3 class="content-header">Location</h3>
        <p>I teach at three locations in Southern Maine.</p>
        <!-- teaching locations map -->
        <div id="map" style="height:400px; width:100%">
          <script src="teaching-locations.js"></script>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQr2ybjzerGzM5LbrHVZD0SLXP-SDBaRE&callback=initMap"></script>
        </div>
      </div>
    </div>


    <!--INCLUDES-->
    <?php
      $NAV_ACTIVE_LINK = "studio";
      include("nav.php");
    ?>
    <?php include("footer.php"); ?>
    <?php include("scripts.php") ?>

  </body>
</html>
