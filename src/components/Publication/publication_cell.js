import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

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
                        const convertedItem = trimmedItem.includes('#')

                        return (
                            <span key={index}>
                                {isHighlighted
                                    ? <b>{trimmedItem}</b>
                                    : (convertedItem ? <>{trimmedItem.replace("#", "")}<sup>&#x2709;</sup></> : trimmedItem)}
                                {data.author.split(",").length === index + 1 ? '' : ',\u00A0\u00A0'}
                            </span>
                        );
                    })}
                </p>
                <p className="conference">{data.conference}</p>
                {data.link.code ?
                    <Box sx={{ '& button': { m: 1 } }}>
                        <Button size="small" endIcon={<SendIcon />} onClick={() => window.open(data.link.paper)}>{"paper"}</Button>
                        <Button size="small" endIcon={<GitHubIcon />} onClick={() => window.open(data.link.code)}>{"code"}</Button>
                    </Box>
                    :
                    <p>
                        <Button size="small" endIcon={<SendIcon />} onClick={() => window.open(data.link.paper)}>{"paper"}</Button>
                    </p>
                }
                <p className='conference'>{data.time}</p>
                {showAbstract ? <p>{data.abstract}</p> : <p></p>}
                <Button size="small" onClick={() => setShowAbstract(!showAbstract)}>{showAbstract ? 'Hide' : 'Show Abstract'}</Button>
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
        ref: PropTypes.string.isRequired,
    }).isRequired,
};

export default PublicationCell;
