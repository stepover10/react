import * as React from 'react';
import { View, Text } from 'react-native';
import * as styles from './HeaderView.scss';

export default class HeaderView extends React.Component<any> {

  state = {
    title: '로그인'
  }

  render() {

    return (
        <View style={styles.container}>
          <Text>{this.state.title}</Text>
          <View style={styles.left}/>
        </View>
    );
  }
}
