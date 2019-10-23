import * as React from  'react';
import { View, Text, ActivityIndicator, ProgressViewIOS, Image, Dimensions } from 'react-native';
import Main from './containers/main/Main';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BHC_eventPage from 'event/BHC_eventPage'

const win = Dimensions.get('window');

class HelloWorldApp extends React.Component<any> {

  static navigationOptions = {
    header: null
  };

  state = {
    loaded: false,
    progress: 0
  }

  componentDidMount(){
    this._testProgress();
  }

  _onPressButton = (): void => {
    alert('You tapped the button!')
  }

  _testProgress = (): void => {
    const _setInterval = setInterval(() => {
      const { progress, loaded } = this.state;
      if ( progress > 1 ) {
        console.log('_set')
        clearInterval(_setInterval)
      }
      this.setState({
        loaded: progress >= 1 ? true : false,
        progress: progress + 0.01
      })
    }, 100) 
  }

  render() {
    const { loaded, progress } = this.state;
    if ( !loaded ) return ( 
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#FFDE45'
      }}>
        <View style={{ flex: 1 }}>
          <View style={{
            flex: 1,
            marginTop: '20%',
            marginBottom: '50%'
          }}>
            <Image
              style={{
                alignSelf: 'stretch',
                width: win.width,
                height: 400,
              }} 
              source={require('images/imgTutorial.png')} 
            />
          </View>
         
          <View style={{
            flex: 1,
            padding: 20, 
            justifyContent: 'center',
            marginTop: 15,
          }}>
            {/* <ActivityIndicator size="small" color="#ddd" /> */}
            {/* <ActivityIndicator size="small" color="#000" />             */}
            <ProgressViewIOS progress={progress} progressTintColor="red" />

            <View style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 15,
            }}>
              <Text style={{
                fontSize: 22, 
                fontWeight: 'bold',
                textAlign:'center',                
              }}>
                걸을수록 돈이 쌓이는{"\n"}
                만보기앱 캐시워크 입니다.
              </Text>
            </View>

          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{fontSize: 12}}>
              CASHWALK.CO
            </Text>
          </View>
          
        </View>
      </View> 
    );

    return (
      <Main { ...this.props}/>
    );
  }
}

const ReactNavigationRoutes = createStackNavigator({
    Home: HelloWorldApp,
    EventPage: BHC_eventPage,
})

export default createAppContainer(ReactNavigationRoutes)
