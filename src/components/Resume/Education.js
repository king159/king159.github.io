import React from "react";
import PropTypes from "prop-types";

import Degree from "./Degree";

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h2>Education</h2>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.degree} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      point: PropTypes.arrayOf(PropTypes.string),
      year: PropTypes.string,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
