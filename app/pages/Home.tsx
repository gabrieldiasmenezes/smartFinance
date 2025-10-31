import DepartmentSection from "@/components/Home/DepartmentSection";
import KpiCard from "@/components/Home/KpiCard";
import LineChartSection from "@/components/Home/LineChart";
import ProfitChart from "@/components/Home/ProfitChart";
import Insights from "@/components/Insights";
import { insights } from "@/data/insights";
import style from "@/styles/Home/home";
import { ScrollView, View } from "react-native";



export default function Home() {
  const homeInsights=insights.slice(0,3)
  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>

      <KpiCard/>
      
      <ProfitChart/>

      <LineChartSection/>

      <DepartmentSection/>

      <Insights insights={homeInsights}/>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}


