import React, {useState} from 'react';
import PropTypes from 'prop-types';


const PublicationCell = ({data}) => {
  const [over, setOver] = useState(false);
  return (
    <div className="cell-container">
      <article className="mini-post">
        <p><b> {data.title}</b></p>
        <p>{data.author.split(",").map((item, index)=>(
          <span key={index}>{item === 'Jinghao Wang' ? <b>{item + ','}</b> : item + (data.author.split(",").length === index + 1? '' : ',')}</span>
        ))}</p>
        <p>{data.conference}</p>
        <p> <a href={data.link}> [pdf] </a> </p>
        <a className="image">
          <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
            <img src={`${process.env.PUBLIC_URL}${over ? data.image1 : data.image2}`} alt={data.title}/>
          </div>
        </a>
        <div className="description">
          <p>{data.abstract}</p>
        </div>
      </article>
    </div>
  );
}

PublicationCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicationCell;
