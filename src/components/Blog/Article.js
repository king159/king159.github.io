import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Article = ({data}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="article-container">
      <article className="essay">
        <h3 className="h3"> {data.title} </h3>
        <p className="count"> word count: {data.count} </p>
        <div> {readMore ? data.content.map((paragraph) => (
          <p className="p">{paragraph}</p>)) : `${data.content[0]}`}
          <button type="button" className="button"
                  onClick={() => setReadMore(!readMore)}> {readMore ? 'Hide' : 'Full Text'}</button>
        </div>
      </article>
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string),
    count: PropTypes.number,
  }).isRequired,
};

export default Article;
