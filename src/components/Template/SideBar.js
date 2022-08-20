import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Wang Jinghao</h2>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>Update</h2>
      <p> 2022-08: One paper has been accepted to
      <a href="https://eccv22-arow.github.io/"> ECCV 2022 workshop </a></p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Wang Jinghao</p>
    </section>
  </section>
);

export default SideBar;
