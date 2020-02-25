<?php
  //Target Site header from ads
  $heading = "";
  if (isset($_GET["lessons"])) {
    if ($_GET["lessons"] == "beginner")
      $heading = "Violin lessons for beginners";
    else if ($_GET["lessons"] == "learn")
      $heading = "Learn a skill you'll love for your whole life";
    else if ($_GET["lessons"] == "nearme")
      $heading = "Violin lessons in Southern Maine";
    else if ($_GET["lessons"] == "music")
      $heading = "Learn music through the violin";
  }
  if ($heading == "")
    $heading = "Violin lessons your child will love";
?>

<html>
  <?php include("head.php"); ?>

  <body>

    <div class="navbar navbar-light bg-light fixed-top">
      <div class="col-12 text-center">
        <a class="navbar-brand">Pettengill Violin Studio</a>
      </div>
    </div>


    <div class="row" style="margin-top:40px;">
      <div class="col-1"></div>
      <div class="col-10">

        <div class="box">
          <h1 class="display-4 text-center"><?php echo $heading; ?></h1>


          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <hr class="my-4">
              <p class="quote-text">
                Aaron is an outstanding violinist who has made learning the instrument accessible and fun for my children.
                His knowledge and skill have strengthened their individual techniques and fostered a love of music that will hopefully last a lifetime.
              </p>
              <p class="quote-name">
                <strong>Linda Vailancourt</strong><br>
                Mom and string teacher at North Yarmouth Academy
              </p>
              <hr class="my-4">
            </div>
          </div>
          <div class="row">
            <div class="col-7">
              <img class="intro-pic" src="images/headshot.jpg" style="float: left;">
              <div>
                <p>
                  Instilling a love for music in my students is my number one priority.
                  When a student loves what they are doing, practice stops being work and starts being fun.
                  Students progress more quickly and have more fun doing it.
                </p>
                <p>
                  My students learn skills that benefit them in all parts of their lives.
                  So much of what makes a great musician also makes a great person.
                  Patience, confidence, determination--these are qualities I want foster in all my students.
                </p>
                <p>
                  A major facet of my teaching philosophy is building great practice habits.
                  When a student learns how to practice properly,
                  they learn how to approach a problem creatively and come up with a solution.
                  This makes practicing a skill that is applicable not just to the violin,
                  but to many facets of a persons life.
                  By knowing how to practice, one knows how to learn anything.
                </p>
                <p><br>Aaron Pettengill<br>
                President of Maine American String Teachers Association Chapter<br>
                Member of Bangor Symphony Orchestra</p>
              </div>
            </div>
            <div class="col-5">
              <a class="anchor" id="contact"></a>
              <p class="lead">Sign your child up for lessons today</p>
              <?php include("contact form.php") ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2 col-lg-3 side-buffer"></div>
      <div class="box bg-light col-12 col-md-8 col-lg-6">
        <h3 class="content-header">Convenient Location</h3>
        <p class="text-center">I teach at three locations in Southern Maine.</p>
        <!-- teaching locations map -->
        <div id="map" style="height:400px; width:100%">
          <script src="teaching-locations.js"></script>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQr2ybjzerGzM5LbrHVZD0SLXP-SDBaRE&callback=initMap"></script>
        </div>
      </div>
    </div>

    <div class="container" style="margin-bottom: 50px;">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="box landing-box text-center">
            <h3 class="text-center">Not sure yet?</h3>
            <p class="text-center">I give every prospective student one trial lesson at no cost!</p>
            <a href="#contact" class="btn btn-outline-primary">Get your trial lesson now</a>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
