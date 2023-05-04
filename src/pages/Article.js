import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import BlogCell from '../components/Blog/BlogCell';
import articles from '../data/article';

const Article = () => (
    <Main
        title="Article"
    >
        <article className="post" id="resume">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="article" >Article</Link></h2>
                    <p>A selection of articles</p>
                </div>
            </header>
            <BlogCell data={articles} />
        </article>
    </Main>
);

export default Article;
