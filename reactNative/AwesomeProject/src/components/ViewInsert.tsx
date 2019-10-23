import * as React from 'react';
import { View, Text } from 'react-native';
import * as styles from './ViewInsert.scss';

export default class ViewInsert extends React.Component<any> {

  state = {
    user: 'FLAG'
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.buttonBottom}>
            가입하기
          </Text>
        </View>
    );
  }
}
