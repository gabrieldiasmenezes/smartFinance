import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 

const style = StyleSheet.create({ 
    // Card principal 
    cardKpi: { 
        backgroundColor: color.background, 
        borderColor: color.border, 
        borderWidth: 1, 
        width: "90%", 
        borderRadius: 12, 
        padding: 16, 
        marginVertical: 16,
        // 💥 Sombra para iOS 
        shadowColor: color.black, 
        shadowOffset: { width: 2, height: 4 }, 
        shadowOpacity: 0.15, 
        shadowRadius: 6, 
        // 💥 Sombra para Android 
        elevation: 5, 
    }, 
    
    // Cabeçalho 
    headerKpi: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 10, 
    }, 
    
    // Título do KPI 
    title: { 
        fontSize: 16, 
        fontWeight: "600", 
        color: color.text, 
    }, 
    
    // Valor principal 
    value: { 
        fontSize: 28, 
        fontWeight: "700",
        color: color.text, 
        marginBottom: 4, 
    }, 

    // Descrição do KPI
    description: {
        fontSize: 13,
        fontWeight: "400",
        color: color.gray,
        marginBottom: 8,
    },
    
    // Linha da tendência 
    trend: { 
        flexDirection: "row", 
        alignItems: "center",
    }, 
    trendText: { 
        color: color.green, 
        fontSize: 14, 
        fontWeight: "500", 
    },
});

export default style;
