import React from 'react';
import styles from './Menu.module.scss';

import MenuItem from '../MenuItem/MenuItem';

const Menu = () => (
    <nav>
        <ul className={styles.menu}>
            <MenuItem text="Home" to="/"/>
            <MenuItem text="Auth Test" to="/authtest"/>
        </ul>
    </nav>
)

export default Menu;