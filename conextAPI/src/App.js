import React from 'react';
import { ContextConsumer } from './contexts/UserContext'

class App extends React.Component {  
  render(){
    console.log('UPDATE')
    return (
        <div className="App">          
          <ContextApiViewTest />
          <InChecker />
        </div>
    );
  }
}

class ContextApiViewTest extends React.Component {
  handle = () => {    
    this.props.contextAction( "CHANGE" );
  }

  render(){
    return (
      <div>
        <button onClick={this.handle}>CLICK</button>
      </div>
    );
  }
}

class InChecker extends React.Component{
  render() {
    return(
      <div>
        {this.props.context}
      </div>
    )
  }
}

InChecker = ContextConsumer(InChecker);
ContextApiViewTest = ContextConsumer(ContextApiViewTest);

export default App;
