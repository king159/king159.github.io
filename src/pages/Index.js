import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
    <Main
        description={"Wang Jinghao's personal website. "}
    >
        <article className="post" id="index">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
                    <p>
                        A beautiful, responsive, statically-generated,
                        react application written with modern Javascript.
                    </p>
                </div>
            </header>
        </article>
    </Main>
);

export default Index;
