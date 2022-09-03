import React from 'react';
import PropTypes from 'prop-types';

import Prize from './Award/Prize';

const Award = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h2>AWARDS</h2>
    </div>
    {data.map((prize) => (
      <Prize
        data={prize}
        key={prize.name}
      />
    ))}
  </div>
);

Award.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  })),
};

Award.defaultProps = {
  data: [],
};

export default Award;
