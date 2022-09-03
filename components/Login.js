import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
const Login = () => {
    const[state, setState] = useState({
      email:'',
      password:''
    })
  
  
    const login = (email, pass) => {
      alert('email ' + email + ' password: ' + pass)
    }
  
  
    return (
      <LinearGradient colors = {['#ADF5E7','#D4F6EF', '#f5f5dc']} style = {styles.container}>
        <View style = {{alignItems: 'center',
      justifyContent: 'center',}}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png" }} style={styles.logo} />
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
          onPress={() => navigation.navigate('Forgot')}>
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
      </LinearGradient>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 50,
      backgroundColor: '#AFE4FF',
      
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
      backgroundColor:"#C4C4C4",
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