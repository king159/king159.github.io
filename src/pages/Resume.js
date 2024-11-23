import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import degrees from "../data/resume/degrees";

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
    </article>
  </Main>
);

export default Resume;
