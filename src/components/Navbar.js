import React from 'react';

//Styles
import styles from "./Navbar.module.css";
const Navbar = ({logouthandeler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Chat!
            </div>
            <div className={styles.logout} onClick={logouthandeler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;