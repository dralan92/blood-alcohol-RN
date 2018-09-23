import React, { Component } from 'react';
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,TextInput,KeyboardAvoidingView} from 'react-native';
import firebaseApp from '../Firebase';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class Register extends Component {
  constructor(){
    super();
    this.drinkersRef = this.getRef().child('drinkers')
  }

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
  getRef(){
    return firebaseApp.database().ref();
  }
  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        
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
        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {this.drinkersRef.push(this.state);
                            this.props.navigation.navigate('Home',this.state)}}
              >
              <Text style = {styles.login_button_text}>Register</Text>
        </TouchableOpacity>                      
      </KeyboardAvoidingView>
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
  },
  register_button: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor : '#910f05',
    
   
    height:60,
    width : '100%',
    
},
login_button_text:{
  color : 'white',
  fontSize: 15,
  fontWeight: 'bold',
},
});

export default Register;