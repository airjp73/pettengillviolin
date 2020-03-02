import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Head from '../components/Head';
import initRentalMap from '../maps/rental';
import Link from 'next/link';

const Instrument: React.FC = () => {
  useEffect(() => {
    initRentalMap();
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
          <h3 className="content-header">Where can I get an Instrument?</h3>
          <p>
            One question I get a lot is, "Should I buy a violin off Amazon?"
          </p>
          <p>
            The short answer is: I would recommend staying away from Amazon.
            It's true that you CAN find quality violins on Amazon, but you have
            to be extra careful and do your research. There are a lot of really
            terrible, terrible violins available on Amazon. These are lovingly
            referred to as "VSOs" or "Violin Shaped Objects". They are the kind
            of violin that are made as cheaply as possible just to prey on
            people who don't know what to look for.
          </p>
          <p>
            But what if you're willing to put in the time to make sure you're
            getting your instrument from a reputable vender? There's still an
            easier way.
          </p>
          <p>
            <strong>Rent the violin from someplace local.</strong> This comes
            with a few benefits:
          </p>
          <p>
            <strong>Easy to upgrade: </strong>
            If you were to buy an instrument for your child, you would
            eventually have to replace it anyway because they'll outgrow it. But
            even if you're an adult, you'll eventually outgrow the instrument
            musically and need to get a better one.
          </p>
          <p>
            <strong>Easy to do repairs and maintenance: </strong>
            Many rental shops will make repairs on their own instruments at no
            or low cost. And if they're local, it's easy to take it in!
          </p>
          <p>
            <strong>Easy to vet: </strong>
            If you ask me about a local rental shop, chances are I will have
            heard of it or know someone who does. Just{' '}
            <Link href="contact">
              <a>contact me</a>
            </Link>{' '}
            and I can help.
          </p>
          <p>
            So where do you start?
            <br />
            Below is a map with a few local, reputable vendors that I know.
            Check them out!
          </p>
          <div id="map" style={{ height: '400px', width: '100%' }}></div>
          <h4 className="content-header">Still have questions?</h4>
          <p className="text-center">
            <Link href="contact">
              <a className="btn btn-outline-primary">Contact me and ask!</a>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Instrument;
