import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,TouchableHighlight} from 'react-native';

class IndexPage extends Component {
    static navigationOptions = {
        title: 'Index',
    }
  render() {
    return (
      
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
              style = {styles.login_button}
              >
              <Text style = {styles.login_button_text}>Login</Text>
              </TouchableOpacity> 

              <TouchableOpacity
              style = {styles.register_button}
              >
              <Text style = {styles.login_button_text}>Register</Text>
              </TouchableOpacity> 
            </View>
    )
  }
}

const styles = StyleSheet.create({
    login_button: {
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor : '#910f05',
        position: "absolute",
        top:150,
        height:100,
        width : '100%',
        
    },
    register_button: {
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor : '#910f05',
        position: "absolute",
        top:350,
        height:100,
        width : '100%',
        
    },
    login_button_text:{
        color : 'white',
        fontSize: 19,
        fontWeight: 'bold',
    }
});
export default IndexPage;