import React from 'react';

// Icons
import google from "../Icon/google-svgrepo-com.svg";

//Styles
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Chat!</h2>
                <div className={styles.button}>
                    <img src={google} alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;