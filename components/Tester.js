import React from 'react';
import { Image, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Tester() {
    return (
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#8AE2E0', '#3AA3A0','#F6C324', '#F7D330' ]}
        style={styles.linearGradient}
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>
    )
}
export default Tester;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  })