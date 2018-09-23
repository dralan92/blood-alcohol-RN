import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Register from './components/Register';
import IndexPage from './components/IndexPage';
import Home from './components/Home';
class App extends React.Component {
  render() {
    return (
     <RootStack/>
    );
  }
}

const RootStack = createStackNavigator({
  IndexPage : {
    screen : IndexPage
  },
  Login : {
    screen : Login
  },
  Register : {
    screen : Register
  },
  Home : {
    screen : Home
  },

},
{
  headerMode : 'none'
}

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;