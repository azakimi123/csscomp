import React, {Component} from 'react';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';
import Aloha from './Components/Aloha/Aloha';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import MediaQueries from './Components/MediaQueries/MediaQueries';
import MediaTypes from './Components/MediaTypes/MediaTypes';
import Auth from './Components/Auth/Auth';




class App extends Component {
  render() {
    return (
      <div>
        <Auth />
        {/* <BoxModel /> */}
        {/* <Float /> */}
        {/* <Aloha /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* This has media queries, show in isolation */}
        {/* <MediaQueries /> */}
        {/* <MediaTypes /> */}
      </div>
    )
  }
}

export default App;
