import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const style = StyleSheet.create({  
    departmentsContainer:{
        borderColor:color.border,
        marginBottom:40,
        borderWidth:1,
        width:"100%",
        padding:16,
        borderRadius:10,
        shadowColor:color.black,
        shadowOffset:{ width:0, height:10},
        shadowOpacity:0.25,
        shadowRadius:2,
        elevation:8,
        backgroundColor:color.background,  
    },
    title:{
        fontSize:20,
        fontWeight:"600"
    },
    subTitle:{
        marginTop:2,
        fontSize:15,
        fontWeight:"500",
        color:color.gray,
    },
    departmentContent:{
        marginTop:20,
    },
    textContent:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    content:{
        flexDirection:"row"
    },
    iconContent:{
        borderColor:color.border,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginRight:10,
        
    },
    perc:{
        marginTop:2,
        fontSize:14,
        fontWeight:"500",
        color:color.border,
    },
    barBackground:{
        backgroundColor:color.border,
        height:15,
        marginBottom:10,
        marginTop:5,
        borderRadius:50,
    },
    barFill:{
        height:"100%",
        borderRadius:50,
        backgroundColor:color.green,
    }
});

export default style;