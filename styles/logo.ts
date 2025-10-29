import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({ 
    logoContainer:{
        marginTop:50,
        marginHorizontal:30,
        width:"100%",
        alignItems:"flex-start",
    },
    logo:{
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:color.green,
        borderRadius:10,
    }
 
});

export default style;