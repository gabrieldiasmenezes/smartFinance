import { View, Text} from "react-native";
import color from "../../color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import style from "@/styles/Uploads/ExpectedCsv/pipeline";

export default function Pipeline() {
  const pipeline = [
    {
      id: 1,
      name: "Upload CSV",
      iconName: "file-upload-outline",
    },
    {
      id: 2,
      name: "IA Analisa & Agrupa",
      iconName: "brain",
    },
    {
      id: 3,
      name: "Resultado mostrado no dashboard",
      iconName: "table-large",
    },
  ];

  return (
    <>
      {/* Pipeline visual */}
      <View style={style.pipeline}>
        {pipeline.map((stage, idx) => (
          <View key={stage.id} style={style.stageContainer}>
            <View style={style.pipelineContent}>
                <MaterialCommunityIcons name={stage.iconName as any} size={28} color={color.darkGreen} />
                <Text style={style.stageText}>{stage.name}</Text>

            </View>
            {idx < pipeline.length - 1 && (
              <MaterialCommunityIcons name="arrow-right" size={20} color={color.gray} style={style.arrow} />
            )}
          </View>
        ))}
      </View>
    </>
  );
}

