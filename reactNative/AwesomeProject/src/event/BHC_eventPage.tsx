import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { ProgressBar } from 'commonness';

class BHC_eventPage extends React.Component<any> {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#FFDE45',
      borderBottomWidth: 0,
    },
    headerLeft: <Button onPress={ ()=>{navigation.goBack()} } color="#000" title="뒤로가기" />
  });

  state = {
    loadCompleted: false,
    loadCompletedPercent: false
  }

  componentDidMount () {
    this._getApiLoading();
  }

  _getApiLoading = (): void => {
    setTimeout(()=>{
      this.setState({
        loadCompleted: true
      })
    }, 4000)
  }

  _propsFunc = (): void => {
    this.setState({
      loadCompletedPercent: true
    }) 
  }

  render(){
    const { loadCompleted, loadCompletedPercent } = this.state;

    if (!loadCompletedPercent) return (
      <ProgressBar 
        _propsFunc={this._propsFunc}
        loadCompleted={loadCompleted} 
      />
    );
    
    return(
      <View style={se.con}>
        <View style={se.flex1Center}>
          <Text style={se.gg}>
            꽝!
          </Text>
        </View>
      </View>
    )
  }
}

const se = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#FFDE45'
  },

  flex1: {
    flex: 1,
  },

  flex1Center:{
    flex: 1,
    // justifyContent: 'center',
    marginTop: '30%',
    alignItems: 'center'
  },

  flex1Top:{
    flex: 1,
    alignItems: 'center',
    fontSize: 30
  },

  gg: {
   fontSize: 150,
   fontWeight: '900'
  },

  back : {
    fontSize: 10,
    color: '#000',
  }
});

export default BHC_eventPage;