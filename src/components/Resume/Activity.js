import React from 'react';
import PropTypes from 'prop-types';

import Play from './Activity/Play';

const Activity = ({ data }) => (
  <div className="activity">
    <div className="link-to" id="activity" />
    <div className="title">
      <h2>CO-CURRICULAR ACTIVITIES</h2>
    </div>
    {data.map((play) => (
      <Play
        data={play}
        key={play.name}
      />
    ))}
  </div>
);

Activity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    point: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string,
  })),
};

Activity.defaultProps = {
  data: [],
};

export default Activity;
