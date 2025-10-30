import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({ 
    content:{
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
    header:{
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
        fontSize:16,
        fontWeight:"600",
        marginLeft:10,
    },
    text:{
        fontSize:13,
        fontWeight:"400",
        padding:10

    }
});

export default style;