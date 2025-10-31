import DepartmentCard from "@/components/Departaments/DepartamentCard";
import Insights from "@/components/Insights";
import { insights } from "@/data/insights";
import style from "@/styles/Home/home";
import { ScrollView, View } from "react-native";


export default function Departments(){
    const departmentInsights=insights.slice(3,6);
    return(
        <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>

            <DepartmentCard/>

            <Insights insights={departmentInsights}/>
            
            <View style={{ height: 80 }} />
        </ScrollView>
    )
}