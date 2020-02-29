<html>
  <?php include("head.php"); ?>



  <body class="landing-body">

    <img class="img-bar head-bar" src="images/banner.jpg">
    <div class="bar intro-bar text-center">
      <h2 class="studio-name">Aaron Pettengill Violin Studio</h2>
      <h1 class="keyword-title">Violin lessons</h1>
      <div class="bar text-center">
        <p>Learn a skill you'll love for your whole life.</p>
      </div>
      <div class="bar bg-success">
        <div class="row">
          <div class="col-6">
            <a class="btn btn-success landing-btn" href="tel:207-312-7439">
              Call <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
          </div>
          <div class="col-6">
            <a class="btn btn-success landing-btn" href="#contact-form">
              Email <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>



    <div class="background-light-grey">
      <div class="bar outer-bar text-center">
        <p class="quote-text">
          Aaron is an outstanding violinist who has made learning the instrument accessible and fun for my children.
          His knowledge and skill have strengthened their individual techniques and fostered a love of music that will hopefully last a lifetime.
        </p>
        <p class="quote-name">
          <strong>Linda Vailancourt</strong><br>
          Mom and string teacher at North Yarmouth Academy
        </p>
      </div>
    </div>

    <div class="screen">
      <div class="bar">
        <div class="intro sm-only text-center">
          <div class="img-cont">
            <img class="circle-img" src="images/headshot.jpg">
          </div>
          <p class="intro-text display-4">Hi, I'm Aaron</p>
        </div>
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
          <p><br>Aaron Pettengill</p>
          <p>President of Maine American String Teachers Association Chapter</p>
          <p>Member of Bangor Symphony Orchestra</p>
        </div>
      </div>
    </div>

    <div class="screen bar background-light-grey">
      <h2 class="text-center">Convenient Location</h2>
      <p class="text-center">I teach at 3 locations in Southern Maine.</p>
      <div id="map" class="landing-map">
        <script src="teaching-locations.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQr2ybjzerGzM5LbrHVZD0SLXP-SDBaRE&callback=initMap"></script>
      </div>
    </div>

    <div class="screen bar">
      <div class="text-center">
        <h2>Contact me for more info!</h2>
        <a href="tel:207-312-7439" class="btn btn-success landing-btn-2">Call</a>
        <h2>-or-</h2>
        <h2 id="contact-form">Email</h2>
      </div>

      <?php include("contact form.php"); ?>
    </div>

  </body>

</html>
