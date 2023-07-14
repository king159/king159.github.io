import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
    <div className="image-container">
  <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
</div>

      <header>
        <h2>Wang Jinghao 王靖淏</h2>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
