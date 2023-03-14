import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";

const ProjectCell = ({data}) => {
  const [over, setOver] = useState(false);
  return (
    <div className="cell-container">
      <article className="mini-post">
        <h3> {data.title} </h3>
        <p>{data.subtitle} @ {data.location}</p>
        <p>{data.date}</p>
        <p> <a href={data.link}> project link </a> </p>
        <a className="image">
          <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
            <img src={`${process.env.PUBLIC_URL}${over ? data.image1 : data.image2}`} alt={data.title}/>
          </div>
        </a>
        <ul className="points">
          {data.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

ProjectCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    link: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCell;
