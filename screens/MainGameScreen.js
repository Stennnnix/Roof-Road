import React from 'react';
import { View } from 'react-native';

export default class MainGameScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: 'Game',
      headerStyle: {
        backroundColor: 'yellow'
      }
    }

  }   

  render() {
    return <View/>;
  }
}
