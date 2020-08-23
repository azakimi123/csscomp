import React, {Component} from 'react';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';
import Aloha from './Components/Aloha/Aloha';




class App extends Component {
  render() {
    return (
      <div>
        <BoxModel />
        <Float />
        <Aloha />
      </div>
    )
  }
}

export default App;
