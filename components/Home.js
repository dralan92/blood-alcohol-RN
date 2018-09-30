import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';
import moment from 'moment';

class Home extends Component {
  constructor(){
    super();
   
    this.state = {
      id:'',
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
        id : navigation.getParam('_id', 'x'),
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
      
      
      this.interval = setInterval(() => {
        
        this.processAlcoholWithTime()
      
      }, 1);
    }
    upDateDB(id, goa){
      update_data = [
        {propName : "grams_of_alcohol", value : parseFloat(goa) },
        {propName : "last_drink_time", value : moment().format('x')}
        
      ];
      let update_url = 'https://infinite-temple-91100.herokuapp.com/drinkers/'+id;
      console.log('update url : '+update_url);
      fetch(update_url,{
    method : 'PATCH',
    headers : {
      Accept : 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(update_data)
  })
  .then(result=>{
    console.log(result);
    
  })
  .catch(err=>{
    console.log(err);
    
  });
    }
    componentDidMount(){
      
    }
    
    updateAlcoholInGrams(){
      let prev_alcohol = parseFloat(this.state.grams_of_alcohol);
      let updated_alcohol = prev_alcohol + 17.01;
      this.setState({
        grams_of_alcohol : updated_alcohol
      });
    }
    

    processAlcoholWithTime(){
      
      let prev_alcohol = this.state.grams_of_alcohol;
      if(parseFloat(prev_alcohol) > 0){
        let new_alcohol = parseFloat(prev_alcohol) - parseFloat(this.state.alcohol_removal_rate);

      
        this.setState({
          grams_of_alcohol : new_alcohol,
          
  
        });
      }else{

        this.setState({
          grams_of_alcohol : 0,
          
  
        });

      }

     
      //Store values to data base
      
      if(parseFloat(prev_alcohol) > 0){
        this.upDateDB(this.state.id, this.state.grams_of_alcohol)
      }else{

      }
      
      
    }
    componentWillUnmount() {
      clearInterval(this.interval);
      console.log('Unmounted');
    }
    
  render() {
   
    

    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        <Text>Hello {this.state.name}</Text>
        <Text>you have  {this.state.liters_of_blood} liters of blood</Text>
        <Text>your alcohol removal rate is  {this.state.alcohol_removal_rate} grams per milli second</Text>
        <Text>Last Drink Time is  {this.state.last_drink_time} </Text>
        <Text>Amount of alcohol in your body is{this.state.grams_of_alcohol} grams</Text>
        <Text>{this.state.time_past} total milli sec drunk</Text>
        <Text>BAC : {parseFloat(this.state.grams_of_alcohol)/(100* parseFloat(this.state.liters_of_blood))} </Text>

        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                             
                              this.updateAlcoholInGrams();
                              
                              
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