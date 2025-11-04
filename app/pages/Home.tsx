import KpiCard from "@/components/Home/KpiCard";
import LineChartSection from "@/components/Home/LineChart";
import ProfitChart from "@/components/Home/ProfitChart";
import Insights from "@/components/Insights";

import style from "@/styles/Home/home";
import { ScrollView, View } from "react-native";



export default function Home() {
  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>

      <KpiCard/>
      
      <ProfitChart/>

      <LineChartSection/>


      <Insights/>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}


