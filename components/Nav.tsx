import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

const NavLink: React.FC<{ href: string }> = ({ href, children }) => {
  const router = useRouter();
  return (
    <li className="nav-item">
      <Link href={href}>
        <a className={cn('nav-link', { active: router.route === href })}>
          {children}
        </a>
      </Link>
    </li>
  );
};

const Nav: React.FC = () => (
  <nav
    id="main-nav"
    className="navbar navbar-expand-md navbar-light bg-light fixed-top"
  >
    <div className="col-3 text-center">
      <a className="navbar-brand" href="/">
        Pettengill Violin Studio
      </a>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#nav-menu"
      aria-controls="nav-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div id="nav-menu" className="col-9 col-xl-6 collapse navbar-collapse">
      <ul id="links" className="navbar-nav mx-auto mx-lg-auto">
        <NavLink href="contact">Contact</NavLink>
        <NavLink href="instrument">How to get a violin</NavLink>
        <NavLink href="studio">Location</NavLink>
        <a
          href="https://login.mymusicstaff.com"
          className="btn btn-outline-success sm-only"
        >
          Login
        </a>
      </ul>
    </div>
    <a
      href="https://login.mymusicstaff.com"
      className="login-btn btn btn-outline-success not-sm"
    >
      Log in
    </a>
  </nav>
);

export default Nav;
