import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const BlogCell = ({ data }) => (
    <div className="blog">
        <div className="link-to" id="education" />
        {data.map((article) => (
            <Article
                data={article}
                key={article.title}
            />
        ))}
    </div>
);

BlogCell.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    })),
};

BlogCell.defaultProps = {
    data: [],
};

export default BlogCell;
