import React from "react";

import Main from "../layouts/Main";

import AboutMeCell from "../components/About/about_me_cell";

const About = () => (
  <Main title="About">
    <article className="post" id="about">
      <AboutMeCell />
    </article>
  </Main>
);

export default About;
