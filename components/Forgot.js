import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
const Forgot = () => {
 
    return (
      <LinearGradient colors = {['#ADF5E7','#D4F6EF', '#f5f5dc']} style = {styles.container}>
        <TextInput style = {styles.text}
            placeholder = "Email"
            onChangeText={(text) => setState({...state, email:text})}/>
        <TouchableOpacity>
            <Text>
              Reset Password
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
      justifyContent:'center',
      alignItems:'center'
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
  export default Forgot