import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button} from 'react-native';
import firebaseApp from '../Firebase';

class Home extends Component {
  constructor(){
    super();
    this.drinkersRef = this.getRef().child('drinkers')
    this.state = {
      name : '',
      email : '',
      password : '',
      gender : '',
      weight : '',
      age : '',
      lob : 0,
      goa : 0,
      bac : 0

    }
  }
    static navigationOptions = {
        title: 'Home',
    }
   
    getRef(){
      return firebaseApp.database().ref();
    }
    updateGOA(){
      prev_goa = this.state.goa;
      new_goa = prev_goa + 17.01;
      this.setState({goa : new_goa});
    }
    updateStates(name,email,password,gender,age,liters_of_blood,grams_of_alcohol){
      console.log(email);
      this.setState({
        name : name,
        email : email,
        password : password,
        gender : gender,

        age : age,
        liters_of_blood : liters_of_blood,
        grams_of_alcohol : grams_of_alcohol,

      });
    }
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'x');
    const email = navigation.getParam('email', 'x');
    const password = navigation.getParam('password', 'x');
    const gender = navigation.getParam('gender', 'x');
    const weight = navigation.getParam('weight', 'x');
    const age = navigation.getParam('age', 'x');
    
    const liters_of_blood = (parseFloat(weight) * .07) / 1.060 ;
    const grams_of_alcohol = this.state.goa;

    return (
      <View>
        <Text>hello {name}</Text>
        <Text>you have  {liters_of_blood} liters of blood</Text>

        <TouchableOpacity
              style = {styles.register_button}
              onPress={() => {
                              this.updateGOA();
                              this.updateStates(name,email,password,gender,age,liters_of_blood,grams_of_alcohol);
                              this.drinkersRef.push(this.state);
                            }
                      }
              >
              <Text style = {styles.login_button_text}>Drink Once</Text>
        </TouchableOpacity>     
      </View>
    )
  }
}
styles = StyleSheet.create({

  register_button: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor : '#910f05',
    
   
    height:60,
    width : '100%',
    
},
});


export default Home;