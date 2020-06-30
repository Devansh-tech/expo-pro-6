import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { db } from '../config';

export default class JokeScreen extends Component {
  constructor() {
    super();
    this.state = {
      image_url: '#',
      joke_text: '',
    };
  }

  retriveData = () => {
    var jokeRef = db.ref('joke');
    jokeRef.on('value', snapshot => {
      var data = snapshot.val();
      this.setState({
        image_url: data.image_url,
        joke_text: data.joke_text,
      });
    });
  };

  componentDidMount() {
    this.retriveData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.jokeText}>{this.state.joke_text}</Text>
        <Image
          style={{ width: 300, height: 400, alignSelf: 'center' }}
          source={{ uri: this.state.image_url }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
  jokeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
