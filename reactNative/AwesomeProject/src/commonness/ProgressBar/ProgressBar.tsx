import * as React from 'react';
import { ProgressViewIOS } from 'react-native';

class ProgressBar extends React.Component<any> {

  state = {
    loaded: false,
    progress: 0
  }

  _setInterval = null

  static getDerivedStateFromProps(nextProps, prevState){    
    if (nextProps.loadCompleted) {
      return {
        loaded: true
      }
    }
    return null;
  }
  
  componentDidMount(){  
    this._setInterval = setInterval(() => {
      const { progress, loaded } = this.state;
      
      console.log( progress )
      if (progress > 1 && loaded) {
        
        this.props._propsFunc();
        clearInterval(this._setInterval);

      } else if ( loaded ) {
        this.setState({
          progress: progress + 0.05
        })
      } else {
        this.setState({
          progress: progress + 0.001
        })
      }      
    }, 10)
  }

  componentWillUnmount(){
    clearInterval(this._setInterval)
  }

  render(){
    return(
      <ProgressViewIOS progress={this.state.progress} />
    )
  }
}

export default ProgressBar;