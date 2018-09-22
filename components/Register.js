import React, { Component } from 'react';
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,TextInput} from 'react-native';
import firebaseApp from '../Firebase';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class Register extends Component {

    static navigationOptions = {
        title: 'Register',
    }

    state = {
      name:'',
      email : '',
      password : '',
      gender : '',
      weight : '',
      age : '',

  }

  render() {
    return (
      <View style = {styles.container}>
        
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Name' value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})}/>
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Email' value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Password' value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Gender' value={this.state.gender}
                    onChangeText={(text) => this.setState({gender: text})}/>
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Weight in Kg' value={this.state.weight}
                    onChangeText={(text) => this.setState({weight: text})}/>
        <TextInput style = {styles.input} underlineColorAndroid='transparent' placeholder='Age' value={this.state.age}
                    onChangeText={(text) => this.setState({age: text})}/>                        
      </View>
    )
  }
}

styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 20,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  input : {
    height : 40,
    backgroundColor : '#b5a09f',
    marginBottom : 20,
    color : '#ffffff',
    paddingHorizontal : 10,
  }
  
});

export default Register;