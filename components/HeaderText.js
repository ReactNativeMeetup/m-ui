import { StyleSheet, View, Text } from 'react-native';
import { padding } from '../utils/styles/styles'

export const HeaderText = ({headerText,  subHeaderText})=>{
    return (
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{headerText}</Text>
                <Text style={styles.subHeaderText}>{subHeaderText}</Text>
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
        width: "85%",
        fontWeight: "bold",
        fontSize: "36rem",
        fontFamily: "Montserrat_500Medium",
        flexWrap: "wrap"
    },
    subHeaderText:{
        width:"75%"
    }
})

export default HeaderText