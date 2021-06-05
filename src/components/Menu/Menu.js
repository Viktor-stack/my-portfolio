import React from 'react';
import style from './menu.module.scss'

const Menu = () => {
    return (
        <div>
            <nav className={style.menu}>
                <ul>
                    <li className="active">Home</li>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu
