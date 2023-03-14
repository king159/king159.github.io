import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import PublicationCell from '../components/Publication/PublicationCell';
import data from '../data/publication';

const Publication = () => (
  <Main title="Publication">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publication">Publication</Link></h2>
          <p>List of publications</p>
        </div>
      </header>
      {data.map((publication) => (
        <PublicationCell
          data={publication}
          key={publication.title}
        />
      ))}
    </article>
  </Main>
);

export default Publication;
