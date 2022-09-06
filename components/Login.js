import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { padding } from '../utils/styles/styles'
import HeaderText from './HeaderText';
import { Image, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View} from 'react-native';
const Login = () => {
    const[state, setState] = useState({
      email:'',
      password:''
    })
  
  
    const login = (email, pass) => {
      alert('email ' + email + ' password: ' + pass)
    }
  
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{alignItems: 'center',
      justifyContent: 'center',}}>
          <HeaderText />
        </View>
        <View style = {styles.main}>
          <TextInput style = {styles.text}
            placeholder = "Email"
            onChangeText={(text) => setState({...state, email:text})}/>
          <TextInput style = {styles.text}
            placeholder = "Password"
            secureTextEntry = {true}
            onChangeText = {(text) => setState({...state, password: text})}
          />
          <TouchableOpacity
          style = {styles.button}
          onPress = {() => navigation.navigate("Login")}>
            <Text>
            Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style = {styles.button} onPress= {() => login(state.email,state.password)}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      display: "flex",
      ...padding(0, 15, 0, 15),
      backgroundColor: 'rgba(255, 255, 255, 1)',
  },
    main:{
      flex:1,
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: 305,
      height: 159,
      marginBottom: 10,
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#F5F1CE',
      padding:10,
      borderWidth: 1, 
      borderRadius: 10,
      borderColor:'transparent'
    }, 
    text:{
      padding: 10,
      backgroundColor:"transparent",
      textAlign: 'center',
      overflow: 'hidden',
      borderColor: '#0F5478',
      borderWidth: 1, 
      borderRadius: 10,
      width: "20%",
      color: '#0F5478'
    }
  })
  export default Login