import { insights } from "@/data/insights";
import style from "@/styles/Home/insights";
import {  View,Text } from "react-native";
import color from "../color";

export default function Insights(){
    return(
        <View style={style.insightContainer}>
            <Text style={style.title}>Insight gerados por IA</Text>
            <Text style={style.subtitle}>Recomendações estratégicas baseadas em análise de dados financeiros</Text>
            {insights.map((insight)=>(
                <View key={insight.id} style={[style.insightContainer,{borderColor:color.border}]}>
                    
                <Text style={style.text}>

                    <Text style={style.negrito}>

                    <View style={style.ball}/> {insight.negrito} 
                    
                    </Text>
                    {insight.text}
                </Text>
                </View>

            ))}
      </View>
    )
}