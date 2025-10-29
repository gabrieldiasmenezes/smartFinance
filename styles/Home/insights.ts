import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({ 
    insightContainer:{
        backgroundColor: color.background, 
        borderColor: color.green, 
        borderWidth: 1, 
        width: "100%", 
        borderRadius: 12, 
        padding: 16, 
        marginVertical: 16,
        // 💥 Sombra para iOS 
        shadowColor: color.black, 
        shadowOffset: { width: 2, height: 4 }, 
        shadowOpacity: 0.15, 
        shadowRadius: 6, 
        // 💥 Sombra para Android 
        elevation: 5,
    },
    title:{
        fontSize: 20, 
        fontWeight: "400", 
        color: color.text,
    },
    subtitle:{
        fontSize: 15, 
        marginTop:10,
        fontWeight: "300", 
        color: color.gray,
    },

    text:{
        fontSize: 15, 
        marginTop:10,
        fontWeight: "400", 
        color: color.gray,
    },
    negrito:{
        fontWeight:"600"
    },
    ball:{
        padding: 5, 
        borderRadius:50,
        backgroundColor:color.green,
    }
});

export default style;