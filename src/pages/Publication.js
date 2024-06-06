import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Checkbox from '@mui/material/Checkbox';
import PublicationCell from '../components/Publication/publication_cell';
import data from '../data/publication_data';
import FormControlLabel from '@mui/material/FormControlLabel';

function checkFirstAuthor(author) {
    return author.startsWith('Jinghao Wang') || author.startsWith('Jinghao Wang*');
}

function checkPublished(conference) {
    return !(conference == 'arXiv' || conference.includes('under review'));
}

function checkCurrentYear(time) {
    return time.split('-')[0] === new Date().getFullYear().toString();
}

function filter(publication, showFirstAuthor, showPublished, showCurrentYear, showAll) {
    return (showFirstAuthor ? checkFirstAuthor(publication.author) : true) &&
        (showPublished ? checkPublished(publication.conference) : true) &&
        (showCurrentYear ? checkCurrentYear(publication.time) : true) ||
        showAll
        ;
}

export default function Publication() {
    const [showFirstAuthor, setShowFirstAuthor] = React.useState(false);
    const [showPublished, setShowPublished] = React.useState(false);
    const [showCurrentYear, setShowCurrentYear] = React.useState(false);
    const [showAll, setShowAll] = React.useState(true);
    const handleChangeAll = (event) => {
        setShowAll(event.target.checked);
        setShowFirstAuthor(false);
        setShowPublished(false);
        setShowCurrentYear(false);
    };
    const handleChangeFirstAuthor = (event) => {
        setShowFirstAuthor(event.target.checked);
        setShowAll(false);
    }
    const handleChangePublished = (event) => {
        setShowPublished(event.target.checked);
        setShowAll(false);
    }
    const handleChangeCurrentYear = (event) => {
        setShowCurrentYear(event.target.checked);
        setShowAll(false)
    }
    return (
        <Main title="Publication">
            <article className="post" id="projects">
                <header>
                    <div className="title">
                        <h2 data-testid="heading"><Link to="/publication">Publication</Link></h2>
                    </div>
                </header>
                <div>Filter:</div>
                <FormControlLabel
                    label="All"
                    control={<Checkbox defaultChecked checked={showAll} onChange={handleChangeAll} />}
                />
                <FormControlLabel
                    label="First Author"
                    control={<Checkbox checked={showFirstAuthor} onChange={handleChangeFirstAuthor} />}
                />
                <FormControlLabel
                    label="Published/Accepted"
                    control={<Checkbox checked={showPublished} onChange={handleChangePublished} />}
                />
                <FormControlLabel
                    label={`Since ${new Date().getFullYear()}`}
                    control={<Checkbox checked={showCurrentYear} onChange={handleChangeCurrentYear} />}
                />
                {
                    data.map((publication) => (
                        filter(publication, showFirstAuthor, showPublished, showCurrentYear, showAll) &&
                        <PublicationCell
                            data={publication}
                            key={publication.title}
                        />
                    ))
                }
                {data.filter((publication) => filter(publication, showFirstAuthor, showPublished, showCurrentYear, showAll)).length === 0 &&
                    <p>No publication to show</p>}
            </article>
        </Main>
    );

}

