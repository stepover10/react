import * as React from  'react';
import {
  Text, View, StyleSheet,Image, 
  ScrollView, StatusBar, Button, Dimensions
} from 'react-native';
import styled from 'styled-components';

export default class Main extends React.Component<any> {

  _onPressButton = () => {
    this.props.navigation.navigate('EventPage')
  }

  render() {
    console.log( 'MAIN', this.props )
    return (
      <> 
        <StatusBar barStyle="light-content" />
        <View style={{flex: 1}}>
          <ScrollView style={{flex:1}}>
            
            <View style={{flex: 1}}>
              <View style={{
                flex: 1,
                alignItems: 'center',
              }}>
                
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '45%'
                }}>
                  <Image
                    source={require('images/img_property_big.png')}
                    style={styles.image}
                  />
                </View>

                <View style={styles.layout}>
                  <View >
                    {/* <Text style={styles.header}>Welcome</Text> */}
                    <Text style={styles.header}>치킨은 역시 캐시닥</Text>
                    <Text style={styles.sub}>이벤트 참여하고 치킨 드세요!</Text>
                    
                    <ButtonOnPressView>
                      <Button
                        onPress={this._onPressButton}
                        title="이벤트 참여하기"
                        color="#000"
                      />
                    </ButtonOnPressView>
                  </View>
                </View>
              </View>
            </View>

          </ScrollView>
        </View>
      </>
    );
  }
}

const ButtonOnPressView = styled.View`	
	flex-direction: row;
	justify-content: center;
	background: #FFDE45;
  margin-top: 10px;
  padding: 10px 0;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 30px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
    // textDecorationLine: "underline"
  },

  sub: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '300',
    color: '#444',
    textAlign: 'center'
  },

  subBold: {
    flex: 1,
    fontWeight: 'bold',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  image: {
    resizeMode: 'stretch',
    width: 250,
    height: 250,
    
  },

  layout: {
    padding: 20,
    // elevation: 30,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: -10 },
    // shadowOpacity: 0.3,
    // shadowRadius: 1 * 5,
    backgroundColor : 'white'
  }
});
