import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <table cellSpacing="10">
      <tr>
        <td><b> {data.company} </b> </td>
        <td align="right">{data.daterange}</td>
      </tr>
      <tr>
        <td> <b> {data.position} </b> </td>
        <td align="right">{data.location}</td>
      </tr>
    </table>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
