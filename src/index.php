<html>
  <?php include("head.php"); ?>

  <body>

    <div class="row" style="margin-top:40px;">
      <div class="col-md-1"></div>
      <div class="col-12 col-md-10">

        <div class="jumbotron landing-jumbo">
          <h1 class="display-4 text-center">Violin lessons your child will love</h1>


          <div class="row">
            <div class="col-md-2 col-lg-3"></div>
            <div class="col-md-8 col-lg-6">
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
              <a class="anchor" id="contact"></a>
              <p class="lead">Sign your child up for lessons today</p>
              <?php include("contact form.php") ?>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2 col-lg-2"></div>

      <div class="box bg-light col-12 col-md-8">
        <div class="intro not-sm text-center">
          <img class="intro-pic d-inline" src="images/headshot.jpg">
          <p class="intro-text display-4 d-inline">Hi, I'm Aaron</p>
        </div>
        <div class="intro sm-only text-center">
          <img class="intro-pic" src="images/headshot.jpg">
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
          <p><br>Aaron Pettengill<br>
          President of Maine American String Teachers Association Chapter<br>
          Member of Bangor Symphony Orchestra</p>
        </div>
      </div>
    </div>

    <div class="container" style="margin-bottom: 50px;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div class="box landing-box text-center">
            <h3 class="text-center">Still not sure?</h3>
            <p class="text-center">I give every prospective student one trial lesson at no cost!</p>
            <a href="contact.php" class="btn btn-outline-primary">Get your trial lesson now</a>
          </div>
        </div>
        <div class="col-md-5">
          <div class="box landing-box text-center">
            <h3 class="text-center">Need to get a violin?</h3>
            <p class="text-center">Read my guide on how to find a quality instrument at a convenient location for you.</p>
            <a href="instrument.php" class="btn btn-outline-primary">Check it out</a>
          </div>
        </div>
      </div>
    </div>


    <!-- INCLUDES -->
    <?php include("nav.php") ?>
    <?php include("footer.php"); ?>
    <?php include("scripts.php") ?>

  </body>
</html>
