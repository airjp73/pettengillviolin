import ContactForm from '../components/ContactForm';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact: React.FC = () => (
  <>
    <Head />
    <Nav />
    <div className="row">
      <div className="col-md-2 col-lg-3"></div>
      <div className="main-content-box bg-light col-12 col-md-8 col-lg-6">
        <h2 className="content-header">Contact</h2>
        <p className="text-center">
          Any Questions? Want to get started with a free trial lesson?
        </p>
        <p className="text-center">
          Fill out the form below and I'll respond in 24-48 hours.
        </p>

        <ContactForm />
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
