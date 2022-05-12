import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Chats from "./components/Chats";
//Context
import AuthContextProvaider from './context/AuthContextProvaider';
//components
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <AuthContextProvaider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthContextProvaider>
    </div>

  );
};

export default App;
