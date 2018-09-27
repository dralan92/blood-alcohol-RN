import React, { Component } from 'react'
import { StyleSheet, Text, TextInput,View ,ListView,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';
class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }
    state = {
      email : '',
      password : ''
    }
    
    loginAction(){
      let url_email = 'https://infinite-temple-91100.herokuapp.com/drinkers/email/' + this.state.email;
      let url_password = 'https://infinite-temple-91100.herokuapp.com/drinkers/password/' + this.state.password;

      fetch(url_email)
        .then(res=>res.json())
        .then(data=> {
          
          if(data.password == this.state.password){
            console.log('User Exists');
            this.props.navigation.navigate('Home',data);
          }else{

          }
        });
      

    }
  render() {
    return (
      <KeyboardAvoidingView  behavior = 'padding' style = {styles.container}>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Email' value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
        <TextInput  style = {styles.input} underlineColorAndroid='transparent' placeholder='Password' value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>

        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                            //this.props.navigation.navigate('Home',this.state);
                            this.loginAction();
                              }
                          
                      }
              >
              <Text style = {styles.button_text} >Login</Text>
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
export default Login;