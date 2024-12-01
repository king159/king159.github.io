import React from "react";
import PropTypes from "prop-types";

import Job from "./Internship/Job";

const Internship = ({ data }) => (
  <div className="internship">
    <div className="link-to" id="internship" />
    <div className="title">
      <h2>Internship</h2>
    </div>
    {data.map((job) => (
      <Job data={job} key={job.company} />
    ))}
  </div>
);

Internship.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      dateRange: PropTypes.string,
      location: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Internship.defaultProps = {
  data: [],
};

export default Internship;
