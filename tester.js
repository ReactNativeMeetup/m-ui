import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function imager() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} /> 

      <Text style={{color: '#888', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}