const Footer: React.FC = () => (
  <div className="footer">
    <div className="footer-content sm-only">
      <img className="side-pic" src="images/landing-top.jpg" />
      <p>
        Aaron is an in demand teacher who's taught at numerous workshops all
        around Maine. Students love working with him!
      </p>
      <a href="contact.php" className="btn btn-success">
        Sign up today
      </a>
    </div>
    <div className="row">
      <div className="col-md-2 col-lg-3 not-sm"></div>
      <div className="col-12 col-md-8 col-lg-6 text-center">
        <ul className="navbar-nav foot-list">
          <li className="foot-list nav-item">
            <a className="footer-link" href="/">
              Home
            </a>
          </li>
          <li className="foot-list nav-item">
            <a className="footer-link" href="contact.php">
              Contact
            </a>
          </li>
          <li className="foot-list nav-item">
            <a className="footer-link" href="instrument.php">
              How to get a violin
            </a>
          </li>
          <li className="foot-list nav-item">
            <a className="footer-link" href="studio.php">
              Location
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
