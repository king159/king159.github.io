import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
    <article className="degree-container">
        <table cellSpacing="10">
            <tr>
                <td> <b> <a href={data.link}> {data.school} </a> </b> </td>
                <td align="right"> {data.year} </td>
            </tr>
            <tr>
                <td> <b> {data.degree} </b> </td>
                <td align="right">{data.location}</td>
            </tr>
        </table>
    </article>
);

Degree.propTypes = {
    data: PropTypes.shape({
        link: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired,
};

export default Degree;
