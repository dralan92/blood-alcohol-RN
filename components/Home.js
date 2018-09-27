import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';


class Home extends Component {
  constructor(){
    super();
   
    this.state = {
        name : '',
        email : '',
        password : '',
        phone : '',
        age : '',
        gender : '',
        weight : '',
        liters_of_blood : '',
        grams_of_alcohol : 0,
        alcohol_removal_rate : 0,
        current_time : '',
        last_drink_time : '',
        time_past : '',
        sober_time : '',
        status : ''

    }
  }
    static navigationOptions = {
        title: 'Home',
    }
   
    componentWillMount(){

      const { navigation } = this.props;
      

      this.setState({

        name : navigation.getParam('name', 'x'),
        email : navigation.getParam('email', 'x'),
        password : navigation.getParam('password', 'x'),
        age : navigation.getParam('age', 'x'),
        gender : navigation.getParam('gender', 'x'),
        weight : navigation.getParam('weight', 'x'),
        liters_of_blood : navigation.getParam('liters_of_blood', 'x'),
        alcohol_removal_rate : navigation.getParam('alcohol_removal_rate', 'x')

      });

    }
   
    
  render() {
   
    

    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        <Text>Hello {this.state.name}</Text>
        <Text>you have  {this.state.liters_of_blood} liters of blood</Text>
        <Text>your alcohol removal rate is  {this.state.alcohol_removal_rate} grams per milli second</Text>

        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                              
                              
                            }
                      }
              >
              <Text style = {styles.login_button_text}>Drink Once</Text>
        </TouchableOpacity>     
      </KeyboardAvoidingView>
    )
  }
}
styles = StyleSheet.create(
  {
    container : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    }
  }  
);


export default Home;