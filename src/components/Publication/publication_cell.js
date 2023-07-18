import React, { useState } from 'react';
import PropTypes from 'prop-types';


const PublicationCell = ({ data }) => {
    const [showAbstract, setShowAbstract] = useState(false);
    return (
        <div className="cell-container">
            <article className="mini-post">
                <p><h3> {data.title}</h3></p>
                <p>
                    {data.author.split(",").map((item, index) => {
                        const trimmedItem = item.trim();
                        const isHighlighted = trimmedItem === 'Jinghao Wang' || trimmedItem === 'Jinghao Wang*';

                        return (
                            <span key={index}>
                                {isHighlighted ? <b>{item + ',\u00A0'}</b> : item}
                                {data.author.split(",").length === index + 1 ? '' : ',\u00A0'}
                            </span>
                        );
                    })}
                </p>

                <p className="conference">{data.conference}</p>
                <p>
                    {Object.entries(data.link).map(([key, value], index) => (
                        <React.Fragment key={key}>
                            <a href={value}>{`[${key}]`}</a>
                            {index !== Object.keys(data).length - 1 && '\u00A0\u00A0'}
                        </React.Fragment>
                    ))}
                </p>
                <p className='conference'>{data.time}</p>
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
        ref: PropTypes.string.isRequired,
    }).isRequired,
};

export default PublicationCell;
