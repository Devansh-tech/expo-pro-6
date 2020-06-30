import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import  {db}  from '../config';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {

  updateRating = (action) =>{
      var ratingRef = db.ref('rating');
        ratingRef.once('value', (ratingSnapShot) => {
            db.ref('rating').update({
            like : ratingSnapShot.val()[action] + 1
          })
      })
  }


  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>Read a Joke</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HoroScopeScreen')}>
              <Text>Horoscope</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Text>Weather</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text>Top News</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <TouchableOpacity
              onPress ={()=>{
                var action = 'like'
                this.updateRating(action)
              }}
            >
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress ={()=>{
                  var action = 'dislike'
                  this.updateRating(action)
                }}
              >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
