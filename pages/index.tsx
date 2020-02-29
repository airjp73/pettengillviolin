import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import initTeachingLocations from '../maps/teaching-locations';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    initTeachingLocations();
  }, []);

  return (
    <>
      <div className="container">
        <Head />
        <Nav />

        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-1" />
          <div className="col-10">
            <div className="box">
              <h1 className="display-4 text-center">
                Violin Lessons for Everyone
              </h1>

              <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                  <hr className="my-4" />
                  <p className="quote-text">
                    Aaron is an outstanding violinist who has made learning the
                    instrument accessible and fun for my children. His knowledge
                    and skill have strengthened their individual techniques and
                    fostered a love of music that will hopefully last a
                    lifetime.
                  </p>
                  <p className="quote-name">
                    <strong>Linda Vailancourt</strong>
                    <br />
                    Mom and string teacher at North Yarmouth Academy
                  </p>
                  <hr className="my-4" />
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <img
                    className="intro-pic"
                    src="images/headshot.jpg"
                    style={{ float: 'left' }}
                  />
                  <div>
                    <p>
                      Instilling a love for music in my students is my number
                      one priority. When a student loves what they are doing,
                      practice stops being work and starts being fun. Students
                      progress more quickly and have more fun doing it.
                    </p>
                    <p>
                      My students learn skills that benefit them in all parts of
                      their lives. So much of what makes a great musician also
                      makes a great person. Patience, confidence,
                      determination--these are qualities I want foster in all my
                      students.
                    </p>
                    <p>
                      A major facet of my teaching philosophy is building great
                      practice habits. When a student learns how to practice
                      properly, they learn how to approach a problem creatively
                      and come up with a solution. This makes practicing a skill
                      that is applicable not just to the violin, but to many
                      facets of a persons life. By knowing how to practice, one
                      knows how to learn anything.
                    </p>
                    <p>
                      <br />
                      Aaron Pettengill
                      <br />
                      Past President of Maine ASTA Chapter
                      <br />
                      Member of Bangor Symphony Orchestra
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <a className="anchor" id="contact"></a>
                  <p className="lead">Sign your child up for lessons today</p>
                  {/* TODO: Contact Form */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-3 side-buffer"></div>
          <div className="box bg-light col-12 col-md-8 col-lg-6">
            <h3 className="content-header">Convenient Location</h3>
            <p className="text-center">I teach in Lewiston, Maine.</p>
            <div id="map" style={{ height: '400px', width: '100%' }}>
              <script
                async
                defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQr2ybjzerGzM5LbrHVZD0SLXP-SDBaRE&callback=initMap"
              ></script>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="box landing-box text-center">
                <h3 className="text-center">Not sure yet?</h3>
                <p className="text-center">
                  I give every prospective student one trial lesson at no cost!
                </p>
                <a href="#contact" className="btn btn-outline-primary">
                  Get your trial lesson now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
