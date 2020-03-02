import Link from 'next/link';

const Footer: React.FC = () => (
  <div
    className="footer"
    style={{ marginTop: '2rem', position: 'sticky', top: '100%' }}
  >
    <div className="row">
      <div className="col-md-2 col-lg-3 not-sm"></div>
      <div className="col-12 col-md-8 col-lg-6 text-center">
        <ul className="navbar-nav foot-list">
          <li className="foot-list nav-item">
            <Link href="/">
              <a className="footer-link">Home</a>
            </Link>
          </li>
          <li className="foot-list nav-item">
            <Link href="contact">
              <a className="footer-link">Contact</a>
            </Link>
          </li>
          <li className="foot-list nav-item">
            <Link href="instrument">
              <a className="footer-link">How to get a violin</a>
            </Link>
          </li>
          <li className="foot-list nav-item">
            <Link href="studio">
              <a className="footer-link" href="studio">
                Location
              </a>
            </Link>
          </li>
          <li className="foot-list nav-item">
            <a
              href="https://login.mymusicstaff.com"
              className="btn btn-outline-success sm-only"
              style={{ width: 'min-content', margin: '0 auto' }}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
