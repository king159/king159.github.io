import React from 'react';
import PropTypes from 'prop-types';

const Prize = ({ data }) => (
  <article className="degree-container">
    <table cellSpacing="10">
      <tr>
        <td> <b> <a href={data.link}> {data.name} </a> </b> </td>
        <td align="right"> {data.time} </td>
      </tr>
    </table>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Prize.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Prize;
