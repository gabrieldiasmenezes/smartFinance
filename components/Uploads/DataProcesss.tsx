

import color from "@/components/color";
import style from "@/styles/Uploads/dataProcess";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";



export default function DataProcess() {
  return (
        <View style={style.content}>
            <View style={style.header}>
                <MaterialCommunityIcons name="database" size={30} color={color.green}/>
                <Text style={style.title}>Processamento de Dados Corporativos</Text>
            </View>

            <Text style={style.text}>Nossa plataforma com IA normaliza automaticamente formatos de dados, categoriza transações e detecta padrões de gastos entre departamentos. Todos os dados são armazenados com segurança no Firestore com criptografia de nível empresarial e padrões de conformidade.</Text>
        </View>
  );
}


