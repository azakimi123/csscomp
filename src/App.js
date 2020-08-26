import React, { useState } from 'react';
import { UserContext }from './context/UserContext';
import routes from './routes';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';
import Aloha from './Components/Aloha/Aloha';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import MediaQueries from './Components/MediaQueries/MediaQueries';
import MediaTypes from './Components/MediaTypes/MediaTypes';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';



function App(props){

  const [user, setUser] = useState({});

    return (
      <div>
        <UserContext.Provider value={[user, setUser]}>
        <Nav />
        {routes}
        {/* <BoxModel /> */}
        {/* <Float /> */}
        {/* <Aloha /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* This has media queries, show in isolation */}
        {/* <MediaQueries /> */}
        {/* <MediaTypes /> */}
        </UserContext.Provider>
      </div>
    )
}

export default App;
