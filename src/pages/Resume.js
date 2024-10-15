import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
// import Award from "../components/Resume/Award";
// import Internship from '../components/Resume/Internship';

// import prizes from "../data/resume/prizes";
import degrees from "../data/resume/degrees";
// import positions from '../data/resume/positions';

const Resume = () => (
  <Main title="Resume">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
        </div>
      </header>
      <Education data={degrees} />
      {/* <Award data={prizes} /> */}
      {/* <Internship data={positions} /> */}
    </article>
  </Main>
);

export default Resume;
