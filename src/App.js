import React, {Component} from 'react';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';
import Aloha from './Components/Aloha/Aloha';
import Form from './Components/Form/Form';




class App extends Component {
  render() {
    return (
      <div>
        <BoxModel />
        <Float />
        <Aloha />
        <Form />
      </div>
    )
  }
}

export default App;
