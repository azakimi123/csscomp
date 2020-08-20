import React, {Component} from 'react';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';



class App extends Component {
  render() {
    return (
      <div>
        <BoxModel />
        <Float />
      </div>
    )
  }
}

export default App;
