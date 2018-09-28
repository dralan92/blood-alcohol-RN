import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';
import moment from 'moment';

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
        current_time : moment().format('x'),
        last_drink_time : moment().format('x'),
        time_past : 0,
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
        alcohol_removal_rate : navigation.getParam('alcohol_removal_rate', 'x'),
        grams_of_alcohol : 0,
        status : 'Sober'


      });

    }
    setLastDrinkTime(){
      let currTime = moment().format('x');
      console.log(currTime);
      
      this.setState({
        last_drink_time : currTime
        
      });
      console.log(this.state.last_drink_time);
    }
    updateAlcoholInGrams(){
      let prev_alcohol = parseFloat(this.state.grams_of_alcohol);
      let updated_alcohol = prev_alcohol + 17.01;
      this.setState({
        grams_of_alcohol : updated_alcohol
      });
    }
    setTimePast(){
      let currTime = moment().format('x');
      console.log('Current time : '+ currTime);
      let timeOfLastDrink = this.state.last_drink_time;
      console.log('Last Drink time : '+ timeOfLastDrink);
      let timePastFromLastDrink = parseFloat(currTime) - parseFloat(timeOfLastDrink);
      console.log('time difference :' +timePastFromLastDrink);
      let prev_time_past = parseFloat(this.state.time_past);
      let new_time_past = prev_time_past + parseFloat(timePastFromLastDrink);
      this.setState({
        time_past : new_time_past

      });

    }
    
  render() {
   
    

    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        <Text>Hello {this.state.name}</Text>
        <Text>you have  {this.state.liters_of_blood} liters of blood</Text>
        <Text>your alcohol removal rate is  {this.state.alcohol_removal_rate} grams per milli second</Text>
        <Text>Last Drink Time is  {this.state.last_drink_time} </Text>
        <Text>Amount of alcohol in your body is{this.state.grams_of_alcohol} grams</Text>
        <Text>{this.state.time_past} millsec passed from your last drink</Text>

        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                              this.setLastDrinkTime();
                              this.updateAlcoholInGrams();
                              this.setTimePast();
                              
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