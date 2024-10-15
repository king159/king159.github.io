import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import AboutMeCell from "../components/About/about_me_cell";

const About = () => (
  <Main title="About">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="about">About Me</Link>
          </h2>
        </div>
      </header>
      <AboutMeCell />
    </article>
  </Main>
);

export default About;
