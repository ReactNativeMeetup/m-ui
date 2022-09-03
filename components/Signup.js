import { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Signup = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
      {label: 'Sports', value: 'sports', icon: () => <MaterialIcons name="sports-basketball" size={24} color="green" />},
      {label: 'School', value: 'school', icon: () => <FontAwesome5 name="school" size={24} color="green" />},
      {label: 'Work', value: 'Work', icon: () => <MaterialIcons name="work" size={24} color="green" />},
      {label: 'Singing', value: 'singing', icon: () => <MaterialCommunityIcons name="microphone-variant" size={24} color="green" />},
    ]);
    const [state, setState] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
      zipCode: '',
    })
  
    // const login = (firstName, lastName, phoneNumber, email, address, zipCode, interests) => {
    //   alert({firstName})
    // }
  
    return (
      <LinearGradient colors = {['#ADF5E7','#D4F6EF', '#f5f5dc']} style = {styles.container}>
        <View style = {{alignItems: 'center',
        justifyContent: 'center',}}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png" }} style={styles.logo} />
        </View>
        <View style = {styles.main}>
            <TextInput style = {styles.text}
            placeholder = "First Name"
            onChangeText={(text) => setState({...state, firstName:text})}/>
            <TextInput style = {styles.text}
            placeholder = "Last Name"
            onChangeText={(text) => setState({...state, lastName:text})}/>
            <TextInput style = {styles.text}
            placeholder = "Phone Number"
            onChangeText={(text) => setState({...state, phoneNumber:text})}/>
            <TextInput style = {styles.text}
            placeholder = "Email"
            onChangeText={(text) => setState({...state, email:text})}/>
            <TextInput style = {styles.text}
            placeholder = "Address"
            onChangeText={(text) => setState({...state, address:text})}/>
          <TextInput style = {styles.text}
            placeholder = "Zip Code"
            onChangeText={(text) => setState({...state, zipCode:text})}/>
          <DropDownPicker
          defaultIndex={0}
          containerStyle={{height: 40}}
            hideSelectedItemIcon={true}
            searchable={true}
            multiple = {true}
            min={0}
            max={4}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
          <TouchableOpacity style = {styles.button}
          onPress = {() => alert(state.firstName+ ' ' + state.lastName+ ' ' + state.phoneNumber+ ' ' + state.email+ ' ' + state.address+ ' ' + state.zipCode)}>
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
      backgroundColor: '#C4C4C4',
      padding:10,
      borderWidth: 1, 
      borderRadius: 10,
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
    },
    dropdown: {
      justifyContent:'flex-end'
    }
  })
  export default Signup