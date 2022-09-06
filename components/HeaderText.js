import { StyleSheet, View, Text } from 'react-native';
import { padding } from '../utils/styles/styles'

export const HeaderText = ({text, first, second})=>{
    return (
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{text}</Text>
                <Text style={styles.subHeaderText}>{first}</Text>
                <Text style={styles.subHeaderText}>{second}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        ...padding(0, 15, 0, 15),
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    headerTextContainer: {
        marginTop: "10%"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: "32rem",
        fontFamily: "Montserrat_500Medium"
    }
})

export default HeaderText