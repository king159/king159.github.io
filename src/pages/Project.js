import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../layouts/Main';

import ProjectCell from '../components/Project/ProjectCell';
import data from '../data/project';

const Project = () => (
  <Main
    title="Project"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/project">Project</Link></h2>
          <p>A selection of academic projects</p>
        </div>
      </header>
      {data.map((project) => (
        <ProjectCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Project;
