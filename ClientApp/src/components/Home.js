import React, { Component } from 'react';
import ApiButton from './ApiButton';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
            <h1>Find your mortal enemy today!</h1>
            <div>
                <ApiButton />
            </div>
      </div>
    );
  }
}
//export default App;