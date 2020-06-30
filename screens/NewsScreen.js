import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { db } from '../config'
export default class NewsScreen extends Component {
  constructor(){
    super()
    this.state = {
      news_text : "" 
    }
  }

  getNews(){
    var newsRef = db.ref('news').on('value',(data)=>{
      var news_text = data.val().text
      this.setState({
        news_text : news_text
      })
    })
  }

  componentDidMount(){
    this.getNews()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>Todays News</Text>
        <Text style={{padding:10}}>{this.state.news_text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
