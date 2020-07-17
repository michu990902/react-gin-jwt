import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const MenuItem = ({ text, to }) => (
    <li className={styles.menuItem}>
        <NavLink 
            exact
            to={to}
            className={styles.menuItemLink}
            activeClassName={styles.menuItemActive}
        >
            <p>{text}</p>
        </NavLink>
    </li>
);

export default MenuItem;