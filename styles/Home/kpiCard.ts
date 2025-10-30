import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({  
    kpiCard:{
        borderColor:color.border,
        marginBottom:40,
        borderWidth:1,
        width:"90%",
        padding:16,
        borderRadius:10,
        shadowColor:color.black,
        shadowOffset:{ width:0, height:10},
        shadowOpacity:0.25,
        shadowRadius:2,
        elevation:8,
        backgroundColor:color.background,
    },
    header:{
        justifyContent:"space-between",
        flexDirection:"row",
        width:"100%",
    },
    title:{
        fontSize:16,
        fontWeight:"500",
        color:color.gray
    },
    text:{
        fontSize:30,
        fontWeight:"700",
        paddingVertical:20,
    },
    footer:{
        flexDirection:"row",
    },
    textFooter:{
        fontWeight:"500",
        color:color.green,
        marginLeft:5,
    },
    descricao:{
        fontWeight:"500",
        color:color.gray,
        marginTop:5,     
    }
});

export default style;