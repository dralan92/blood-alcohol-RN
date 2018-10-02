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
        status : '',
        state_corrected : 'false'

    }
  }
    static navigationOptions = {
        title: 'Home',
    }
   
    componentWillMount(){
      
        
       
    

      const { navigation } = this.props;
      const id_to_fetch = navigation.getParam('_id', 'x');
      const url_id = 'https://infinite-temple-91100.herokuapp.com/drinkers/'+ id_to_fetch;
      
      fetch(url_id)
        .then(res=>res.json())
        .then(data=> {
         
          if(typeof(data.grams_of_alcohol) == "undefined"){
            data.grams_of_alcohol = 0;
          }
          this.setState({
            id: data._id,
            name : data.name,
            email : data.email,
            password : data.password,
            phone : data.phone,
            age : data.age,
            gender : data.gender,
            weight : data.weight,
            liters_of_blood : data.liters_of_blood,
            grams_of_alcohol : parseFloat(data.grams_of_alcohol),
            alcohol_removal_rate : data.alcohol_removal_rate,
            current_time : data.current_time,
            last_drink_time : data.last_drink_time,
            time_past : data.time_past,
            sober_time : data.sober_time,
            status : data.status,
            state_corrected : 'false'

          });
        
          
        });

        
      

     /* this.setState({
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


      });*/
      
      
      this.interval = setInterval(() => {

        if(this.state.grams_of_alcohol > 0){
            if(this.state.state_corrected == 'false'){
                let last_rec_time =  moment(this.state.last_drink_time).format('HH:mm:ss:SSS');
            
               
                let time_passed_in_ms = moment().diff(this.state.last_drink_time, 'milliseconds');
                
                let alcohol_burned = this.state.alcohol_removal_rate*time_passed_in_ms;
                
                let new_goa = this.state.grams_of_alcohol - alcohol_burned;
                this.setState({
                  grams_of_alcohol : new_goa,
                  state_corrected : 'true'
                });
            }
            
        }
    
       

       this.processAlcoholWithTime()
      
      }, 100);
    }
    upDateDB(id, goa){
      update_data = [
        {propName : "grams_of_alcohol", value : parseFloat(goa) },
        {propName : "last_drink_time", value : moment()}
        
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
        let new_alcohol = parseFloat(prev_alcohol) - parseFloat(this.state.alcohol_removal_rate)*100;

      
        this.setState({
          grams_of_alcohol : new_alcohol,
          
  
        });
      }else{

        this.setState({
          grams_of_alcohol : 0,
          
  
        });

      }

     
      //Store values to data base
      
      
        this.upDateDB(this.state.id, this.state.grams_of_alcohol)
      
      
      
    }
    componentWillUnmount() {
      clearInterval(this.interval);
      console.log('Unmounted');
    }
    
  render() {
   
    let time_to_sober = (((parseFloat(this.state.grams_of_alcohol)/parseFloat(this.state.alcohol_removal_rate))/1000)/60)/60;

    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        <Text>Hello {this.state.name}</Text>
       
        
        
        <Text>Amount of alcohol in your body is{this.state.grams_of_alcohol} grams</Text>
       
        <Text>BAC : {parseFloat(this.state.grams_of_alcohol)/(100* parseFloat(this.state.liters_of_blood))} </Text>
        <Text>Time to Sober : {time_to_sober} hours</Text>


        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                             
                              this.updateAlcoholInGrams();
                              
                              
                            }
                      }
              >
              <Text style = {styles.button_text}>Drink Once</Text>
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
    },

    register_button : {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : '#910f05',
      height:100,
      width : '100%'
    },

    button_text : {
      color : 'white',
    fontSize: 15,
    fontWeight: 'bold'
    }
  }  
);


export default Home;