import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Contact from '../../data/contact';

const ContactIcons = () => (
    <ul className="icons">
        {Contact.map((s) => (
            <li key={s.description}>
                <a href={s.link}>
                    <FontAwesomeIcon icon={s.icon} /> {s.description}
                </a>
            </li>   
        ))}
    </ul>
);

ContactIcons.propTypes = {
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default ContactIcons;
