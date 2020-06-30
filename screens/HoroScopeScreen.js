import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { db } from '../config';

export default class HoroScopeScreen extends Component {
  constructor() {
    super();
    this.state = {
      zodiac: '',
      horoscope: '',
    };
  }

  retriveData = () => {
    var horoscopeRef = db.ref('horoscope');
    horoscopeRef.on('value', snapshot => {
      var data = snapshot.val();
      this.setState({
        zodiac: data.zodiac,
        horoscope: data.horoscope,
      });
    });
  };

  componentDidMount() {
    this.retriveData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.zodiacStyle}>{this.state.zodiac}</Text>
        <Text style={styles.horoscopeStyle}>{this.state.horoscope} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
  zodiacStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  horoscopeStyle: {
    padding: 10,
    justifyContent: 'center',
  },
});
