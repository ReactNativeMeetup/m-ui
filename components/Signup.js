import { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { padding } from '../utils/styles/styles'
import HeaderText from './HeaderText';
import Input from './Inputs';
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
      <SafeAreaView style = {styles.container}>
        <View style = {{alignItems: 'center'}}>
          <HeaderText text = "Signup" first="Please complete the form" second = "listed below" />
        </View>
        <View style = {styles.main}>
            <Input text = "First Name"
            onChangeText={(text) => setState({...state, firstName:text})}
            main = {styles.text}
            />
            <Input text = "Last Name"
            onChangeText={(text) => setState({...state, lastName:text})}
            main = {styles.text}
            />
            <Input text = "Phone Number"
            onChangeText={(text) => setState({...state, phoneNumber:text})}
            main = {styles.text}
            />
            <Input text = "Email"
            onChangeText={(text) => setState({...state, email:text})}
            main = {styles.text}
            />
            <Input text = "Address"
            onChangeText={(text) => setState({...state, address:text})}
            main = {styles.text}
            />
            <Input text = "Zip Code"
            onChangeText={(text) => setState({...state, zipCode:text})}
            main = {styles.text}
            />
          <DropDownPicker
            color='transparent'
            containerStyle={{width: 400}}
            loading = {open}
            defaultIndex={0}
            hideSelectedItemIcon={true}
            searchable={true}
            multiple = {true}
            min={0}
            searchPlaceholder="Search"
            max={4}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <View>
        </View>
          <TouchableOpacity style = {styles.button}
          onPress = {() => alert(state.firstName+ ' ' + state.lastName+ ' ' + state.phoneNumber+ ' ' + state.email+ ' ' + state.address+ ' ' + state.zipCode)}>
            <Text style = {styles.text}>
              Signup
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      height: "100%",
      display: "flex",
      ...padding(0, 15, 0, 15),
      backgroundColor: 'beige',  
    },
    main:{
      flex:1,
      paddingTop: 50,
      alignItems: 'center',
    },
    button:{
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderRadius: "20px",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      marginTop: -100
    },
    text:{
      padding: 15,
      textAlign: 'center',
      overflow: 'hidden',
      color:'white',
      justifyContent:'space-between',
      width: "20%",
    },
    dropdown: {
      justifyContent:'flex-end'
    }
  })
  export default Signup