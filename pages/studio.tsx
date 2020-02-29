import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import initTeachingLocations from '../maps/teaching-locations';

const Studio: React.FC = () => {
  useEffect(() => {
    initTeachingLocations();
  }, []);
  return (
    <>
      <Head />
      <Nav />

      <div className="row">
        <div className="col-md-4 col-lg-3 side-buffer">
          {/* TODO: Sidebar */}
        </div>
        <div className="main-content-box bg-light col-12 col-md-8 col-lg-6">
          <h3 className="content-header">Location</h3>
          <p>I teach at three locations in Southern Maine.</p>
          <div id="map" style={{ height: '400px', width: '100%' }}>
            <script src="teaching-locations.js"></script>
            <script
              async
              defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQr2ybjzerGzM5LbrHVZD0SLXP-SDBaRE&libraries=places&callback=initMap"
            ></script>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Studio;
