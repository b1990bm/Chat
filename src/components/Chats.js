import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom/';
import {ChatEngine} from "react-chat-engine";
//Styles
import styles from "./Chats.module.css";
import Navbar from './Navbar';
const Chats = () => {

    //History
    const history=useHistory();

    //logout func
    const logouthandeler=async()=>{
        await auth.signOut();
        history.push("/");
    }

    return (
        <div className={styles.container}>
            <Navbar logouthandeler={logouthandeler}/>
            <ChatEngine 
                height= "calc(100vh - 50px)"
                projectId=""

            />
        </div>
    );
};

export default Chats;