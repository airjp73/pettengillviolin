<html>
  <?php include("head.php") ?>

  <body>




    <div class="row">
      <div class="col-md-2 col-lg-3"></div>
      <div class="main-content-box bg-light col-12 col-md-8 col-lg-6">

        <!-- Message -->
        <h2 class="content-header">Contact</h2>
        <p class="text-center">Any Questions? Want to get started with a free trial lesson?</p>
        <p class="text-center">Fill out the form below and I'll respond in 24-48 hours.</p>

        <?php include("contact form.php"); ?>

      </div>
    </div>

    <!--INCLUDES-->
    <?php
      $NAV_ACTIVE_LINK = "contact";
      include("nav.php");
    ?>
    <?php include("footer.php"); ?>
    <?php include("scripts.php") ?>

  </body>
</html>
