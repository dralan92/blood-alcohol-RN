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
      nameValidate: true,
      email : '',
      emailValidate : true,
      password : '',
      passwordValidate : true,
      gender : '',
      genderValidate : true,    
      weight : '',
      weightValidate : true,
      age : '',
      ageValidate : true
      

  }

  validate(text, type){

    switch (type){
      case 'name' : {
        alph = /^[A-Z]+$/i
        if(alph.test(text)){
        console.log('name ok');
        this.state.nameValidate = true;
          }else{
        console.log('bad name');
        this.state.nameValidate = false;
          }
    
      }
      break;
      case 'email' : {
        alph = 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(alph.test(text)){
        console.log('email ok');
        this.state.emailValidate = true;
          }else{
        console.log('bad email');
        this.state.emailValidate = false;
          }
    
      }
      break;
      case 'password' : {
        alph = 	/^(?=.*\d).{4,8}$/
        if(alph.test(text)){
        console.log('password ok');
        this.state.passwordValidate = true;
          }else{
        console.log('bad pass');
        this.state.passwordValidate = false;
          }
    
      }
      break;
      case 'gender' : {
        alph = 	/^(?:m|M|male|Male|f|F|female|Female)$/
        if(alph.test(text)){
        console.log('gender ok');
        this.state.genderValidate = true;
          }else{
        console.log('bad gender');
        this.state.genderValidate = false;
          }
    
      }
      break;
      case 'weight' : {
        alph = 	/^[0-9]+$/
        if(alph.test(text)){
        console.log('weight ok');
        this.state.weightValidate = true;
          }else{
        console.log('bad weight');
        this.state.weightValidate = false;
          }
    
      }
      break;
      case 'age' : {
        alph = 	/^[0-9]+$/
        if(alph.test(text)){
        console.log('age ok');
        this.state.ageValidate = true;
          }else{
        console.log('bad age');
        this.state.ageValidate = false;
          }
    
      }
      break;






    }
    
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
        <View >

        <Text style = {[styles.error_text, this.state.nameValidate?styles.error_text_conditional:null]}>Only alphabets are allowed in the name</Text>
        <TextInput  style = {[styles.input, !this.state.nameValidate? styles.error:null]}
                    underlineColorAndroid='transparent' 
                    placeholder='Name' 
                    value={this.state.name}
                    onChangeText={(text) => {
                      this.setState({name: text})
                      this.validate(text, 'name');
                          
                
                    }
                      
                      }/>

        
        <Text style = {[styles.error_text,this.state.emailValidate?styles.error_text_conditional:null]}>Enter a valid email</Text>               
        <TextInput  style = {[styles.input, !this.state.emailValidate? styles.error:null]} 
                    underlineColorAndroid='transparent' 
                    placeholder='Email' 
                    value={this.state.email}
                    onChangeText={
                      
                      (text) => {
                        this.setState({email: text});
                        this.validate(text, 'email');
                      }
                      
                      }/>

        <Text style = {[styles.error_text,this.state.passwordValidate?styles.error_text_conditional:null]}>Password must be of 4-8 characters with atleast 1 number</Text>              
        <TextInput  style = {[styles.input, !this.state.passwordValidate? styles.error:null]}
                    underlineColorAndroid='transparent' 
                    placeholder='Password' 
                    value={this.state.password}
                    onChangeText={
                      (text) => {
                        this.setState({password: text});
                        this.validate(text, 'password');
                      }
                      }/>
        <Text style = {[styles.error_text,this.state.genderValidate?styles.error_text_conditional:null]}>Enter a valid gender</Text>
        <TextInput  style = {[styles.input, !this.state.genderValidate? styles.error:null]} 
                    underlineColorAndroid='transparent' 
                    placeholder='Gender' 
                    value={this.state.gender}
                    onChangeText={
                      (text) => {
                        this.setState({gender: text});
                        this.validate(text, 'gender');
                      }
                      
                      }/>
        <Text style = {[styles.error_text,this.state.weightValidate?styles.error_text_conditional:null]}>Please enter an integer value</Text>
        <TextInput  style = {[styles.input, !this.state.weightValidate? styles.error:null]}
                    underlineColorAndroid='transparent' 
                    placeholder='Weight in Kg' 
                    value={this.state.weight}
                    onChangeText={
                      (text) => {
                        this.setState({weight: text});
                        this.validate(text, 'weight');
                      }
                      }/>
        <Text style = {[styles.error_text,this.state.ageValidate?styles.error_text_conditional:null]}>Please enter a valid age</Text>
        <TextInput  style = {[styles.input, !this.state.ageValidate? styles.error:null]}
                    underlineColorAndroid='transparent' 
                    placeholder='Age' 
                    value={this.state.age}
                    onChangeText={
                      (text) => {
                        this.setState({age: text});
                        this.validate(text, 'age');
                      }
                      }/>   
        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                              if(this.state.ageValidate && this.state.nameValidate &&
                              this.state.emailValidate && this.state.passwordValidate &&
                              this.state.weightValidate && this.state.ageValidate){
                                this.registerAction();
                                this.props.navigation.navigate('Login');
                              }
                              
                            
                            
                            
                              }
                          
                      }
              >
              <Text style = {styles.button_text} >Register</Text>
        </TouchableOpacity>
        </View>                      
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
  },
  inner_container : {
    marginTop : 5,
    marginBottom : 5
  },
  error : {
    borderWidth : 3,
    borderColor : 'red'
  },
  error_text : {
    fontSize : 10,
    color : 'red'
  },
  error_text_conditional : {
    display : 'none'
  }

});

export default Register;