import React,{createContext,useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom/';
import { auth } from '../firebase';

const authContext=createContext();

const AuthContextProvaider = (children) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(false);
    const history=useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user=>{
            setUser(user);
            setLoading(false);
            if (user) history.push("/chats");
        })
    },[user,history])

    return (
        <div>
            <authContext.Provider value={user}>
                {!loading && children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContextProvaider;