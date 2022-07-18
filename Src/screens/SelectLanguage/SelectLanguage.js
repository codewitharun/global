import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";

const SelectLanguage = (props) => {
  const [lang, setLang] = useState("")

  const DATA = [
    {
      key: 1,
      language: "English (Default)",
    },
    {
      key: 2,
      language: "Spanish",
    },
    {
      key: 3,
      language: "Russian",
    },
    {
      key: 4,
      language: "Italian",
    },
    {
      key: 5,
      language: "German",
    },
    {
      key: 6,
      language: "Mandarin",
    },
    {
      key: 7,
      language: "Korean",
    },
    {
      key: 8,
      language: "Hindi",
    },
    {
      key: 6,
      language: "Kannada",
    },
    {
      key: 7,
      language: "Sudanese Arabic",
    },
    {
      key: 8,
      language: "Algerian Arabic",
    },
  ];

  const renderData = ({ item }) => {
    return (
      <View style={styles.listView}>
        <TouchableOpacity onPress={() => setLang(item.language)} style={styles.mainContainer}>
          <View style={styles.amtView}>
            <Text
              style={{
                color: lang == item.language ? "#191919" : "grey",
                fontSize: height / 55,
                fontFamily: lang == item.language ? FONTS.PoppinsSemiBold : FONTS.PoppinsRegular,
              }}
            >
              {item.language}
            </Text>
          </View>
          <Image source={lang == item.language ? ImagePath.TICK : null} resizeMode="contain" style={{ height: 15, width: 15 }} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listParent}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          renderItem={(item) => renderData(item)}
          contentContainerStyle={{ paddingBottom: height * 0.15 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Select Language"
      />
      <View style={styles.flatlisVIEW}>{renderList()}</View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          justifyContent: "center",
          alignItems: "center",
          height: height * 0.1,
          width: width * 1,
        }}
      >
        <CustomButton
          title="Confirm"
          ButtonPress={() => props.navigation.navigate("Settings")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  //

  listParent: {
    height: height * 0.79,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
    marginTop: height * 0.03,
  },
  listView: {
    height: height * 0.05,
    marginTop: height * 0.01,
    width: width * 0.9,
    // paddingVertical: 10,
    // backgroundColor: "pink"
    // borderWidth: 1,
  },
  mainContainer: {
    height: height * 0.06,
    width: width * 0.9,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  flatlisVIEW: {
    width: width * 1,
    height: height * 0.67,
    // borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
  },
});
