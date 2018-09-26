import React, { Component } from 'react';
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,TextInput,KeyboardAvoidingView} from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class Register extends Component {
  constructor(){
    super();
    
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
  registerAction(){

    const new_drinker = {
      name : this.state.name,
      email : this.state.email,
      password : this.state.password,
      gender : this.state.gender,
      age : this.state.age,
      weight : parseFloat(this.state.weight)

    }
  fetch('https://infinite-temple-91100.herokuapp.com/drinkers',{
    method : 'POST',
    headers : {
      Accept : 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(new_drinker)
  })
  .then(result=>{
    console.log(result);
    
  })
  .catch(err=>{
    console.log(err);
    
  });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Name' value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Email' value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Password' value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Gender' value={this.state.gender}
                    onChangeText={(text) => this.setState({gender: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Weight in Kg' value={this.state.weight}
                    onChangeText={(text) => this.setState({weight: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Age' value={this.state.age}
                    onChangeText={(text) => this.setState({age: text})}/>   
        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                            //this.props.navigation.navigate('Home',this.state);
                            this.registerAction();
                              }
                          
                      }
              >
              <Text style = {styles.button_text} >Register</Text>
        </TouchableOpacity>                      
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
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
  register_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#910f05',
    height:60,
    width : '100%'
  },
  button_text : {
    color : 'white',
  fontSize: 15,
  fontWeight: 'bold'
  }

});

export default Register;