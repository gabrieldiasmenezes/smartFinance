
import DataProcess from "@/components/Uploads/DataProcesss";
import ExpectedCsv from "@/components/Uploads/ExpectedCsv";
import UploadCsv from "@/components/Uploads/UploadCsv";
import style from "@/styles/Uploads/uploads";
import { ScrollView, View } from "react-native";



export default function Upload() {
  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 140 }]}>

        <UploadCsv/>

        <ExpectedCsv/>

        <DataProcess/>

      <View style={{ height: 90 }} />
    </ScrollView>
  );
}


