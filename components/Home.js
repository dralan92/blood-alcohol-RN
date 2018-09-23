import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button} from 'react-native';


class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    }
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'x');
    return (
        <View>
        <Text>hello {name}</Text>
      </View>
    )
  }
}

export default Home;