import DepartmentCard from "@/components/Departaments/DepartamentCard";
import Insights from "@/components/Insights";
import style from "@/styles/Home/home";
import { ScrollView, View } from "react-native";


export default function Departments(){
    return(
        <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>

            <DepartmentCard/>

            <Insights/>
            
            <View style={{ height: 80 }} />
        </ScrollView>
    )
}