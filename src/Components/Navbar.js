
import React from 'react';
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <header >
            <div className={styles.container}>
                <ul>
                    <li>products</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>sign up</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;