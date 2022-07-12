import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Internship from '../components/Resume/Internship';
import Activity from '../components/Resume/Activity';

import plays from '../data/resume/plays';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Eduction',
  'Internship',
  'Activity',
];

const Resume = () => (
  <Main
    title="Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Internship data={positions} />
      <Activity data={plays} />
    </article>
  </Main>
);

export default Resume;
