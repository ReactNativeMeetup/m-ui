import React from 'react'
import { Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const First = ({navigation}) => {
  return (
    <LinearGradient colors = {['#ADF5E7','#D4F6EF', '#f5f5dc']} style = {styles.container}>
        <TouchableOpacity style = {styles.button} 
        onPress={() => navigation.navigate('Login')}>
            <Text>
              Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} 
        onPress = {() => navigation.navigate("Signup")}>
            <Text>
              Signup
            </Text>
        </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#F5F1CE',
      padding:10,
      borderWidth: 1, 
      borderRadius: 10,
      borderColor:'transparent'
    }, 
  })

export default First