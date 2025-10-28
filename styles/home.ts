import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({ 
    container: { 
        flexGrow: 1, 
        backgroundColor: color.background, 
        paddingTop: 50,  
        paddingHorizontal: 16,
        padding: 16, 
        alignItems: "center", 
    }, 
    header:{ 
        borderColor:color.gray, 
        borderWidth:1.5, 
    }, 
    logoContainer:{
        paddingVertical:20,
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