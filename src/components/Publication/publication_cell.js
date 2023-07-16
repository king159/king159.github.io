import React, { useState } from 'react';
import PropTypes from 'prop-types';


const PublicationCell = ({ data }) => {
    const [showAbstract, setShowAbstract] = useState(false);
    return (
        <div className="cell-container">
            <article className="mini-post">
                <p><b> {data.title}</b></p>
                <p>{data.author.split(",").map((item, index) => (
                    <span key={index}>{(item === 'Jinghao Wang' || item === 'Jinghao Wang*') ? <b>{item + ','}</b> : item + (data.author.split(",").length === index + 1 ? '' : ',')}</span>
                ))}</p>
                <p>{data.conference}</p>
                <p>
                    {Object.entries(data.link).map(([key, value], index) => (
                        <React.Fragment key={key}>
                            <a href={value}>{`[${key}]`}</a>
                            {index !== Object.keys(data).length - 1 && '\u00A0\u00A0'}
                        </React.Fragment>
                    ))}
                </p>
                <p>{data.time}</p>
                <a className="image">
                    <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
                </a>
                {showAbstract ? <p>{data.abstract}</p> : <p></p>}
                <button
                    type="button"
                    className="button"
                    onClick={() => setShowAbstract(!showAbstract)}
                >
                    {showAbstract ? 'Hide' : 'Show Abstract'}
                </button>
            </article>
        </div>
    );
}

PublicationCell.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        conference: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default PublicationCell;
