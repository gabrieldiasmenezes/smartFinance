import { ScrollView, View } from "react-native";
import style from "@/styles/Home/home";
import Insights from "@/components/Home/Insights";
import KpiCard from "@/components/Home/KpiCard";
import DepartmentSection from "@/components/Home/DepartmentSection";
import ProfitChart from "@/components/Home/ProfitChart";
import LineChartSection from "@/components/Home/LineChart";



export default function Home() {

  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>

      <KpiCard/>
      <ProfitChart/>

      <LineChartSection/>

      <DepartmentSection/>
      <Insights/>
      <View style={{ height: 80 }} />
    </ScrollView>
  );
}


