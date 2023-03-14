import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ data }) => (
  <article className="degree-container">
    <table cellSpacing="10">
      <tr>
        <td><b> <a href={data.link}> {data.name} </a>  </b> </td>
        <td align="right">{data.year}</td>
      </tr>
      <tr>
        <td> <b> {data.position} </b> </td>
        <td align="right"> {data.location}</td>
      </tr>
    </table>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Play.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Play;
