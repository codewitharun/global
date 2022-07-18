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

const Currency = (props) => {
  const [check, setCheck] = useState("US Dollar (USD)")

  const DATA = [
    {
      key: 1,
      currency: "US Dollar (USD)",
      icon: "$"
    },
    {
      key: 2,
      currency: "British Pound (GBP)",
      icon: "£"
    },
    {
      key: 3,
      currency: "RuEuro (EUR)ssian",
      icon: "€"
    },
    {
      key: 4,
      currency: "Singapore Dollar (SGD)",
      icon: "$"
    },
    {
      key: 5,
      currency: "Canadian Dollar (CAD)",
      icon: "$"
    },
    {
      key: 6,
      currency: "Australian Dollar (AUD)",
      icon: "$"
    },
  ];

  const renderData = ({ item }) => {
    return (
      <View style={styles.listView}>
        <TouchableOpacity onPress={() => setCheck(item.currency)} style={styles.mainContainer}>
          <View style={styles.amtView}>
            <View style={styles.Currencyimg}>
              <ImageBackground
                source={check == item.currency ? ImagePath.HOME_CIRCLE : ImagePath.WHITE_CIRCLE}
                style={{ justifyContent: "center", alignItems: "center", height: 50, width: 50 }}
              >
                <Text style={{ fontSize: height / 45, color: check == item.currency ? "#FFFFFF" : "#1774FF" }}>{item.icon}</Text>
              </ImageBackground>
            </View>

            <Text
              style={{
                // color: item.rate > 0 ? "#21BF73" : "#D90429",
                fontSize: height / 65,
                fontFamily: FONTS.PoppinsRegular,
              }}
            >
              {item.currency}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.1 }}>
            <Image source={check == item.currency ? ImagePath.TICK : null} resizeMode="contain" style={{ height: 15, width: 15 }} />
          </View>
        </TouchableOpacity>
        <View style={styles.border}></View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listParent}>

        <FlatList
          data={DATA}
          nestedScrollEnabled={true}
          renderItem={(item) => renderData(item)}
          contentContainerStyle={{ paddingBottom: height * 0.1 }}
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
        Title="Currency"
      />
      <ScrollView style={{ marginTop: height * 0.04, paddingVertical: 25, height: height * 1, width: width * 1, }}>

        <View style={styles.flatlisVIEW}>{renderList()}</View>
        <View style={{
          // backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          height: height * 0.15,
          width: width * 1,
        }}>
          <Text style={{ color: "black", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Currency is used to display your balance,{'\n'}transactions, and purchase cryptocurrency{'\n'}Throughout the app</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "red",
            height: height * 0.15,
            width: width * 1,
          }}
        >
          <CustomButton
            title="Confirm"
            ButtonPress={() => props.navigation.navigate("Settings")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Currency;

const styles = StyleSheet.create({
  //

  listParent: {
    height: height * 0.55,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
    // marginTop: height * 0.06
  },
  border: {
    height: height * 0.002,
    width: width * 0.9,
    backgroundColor: "lightgrey",
    // marginTop: height * 0.01
  },
  listView: {
    height: height * 0.09,
    width: width * 0.9,
    // paddingVertical: 10,
    // backgroundColor: "pink"
    // borderWidth: 1,
    flexDirection: "row",
  },
  mainContainer: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#EBEEF2",
    justifyContent: "center",
  },
  flatlisVIEW: {
    width: width * 1,
    height: height * 0.55,
    // backgroundColor: "red",
    // borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // position: "absolute",
    // bottom: 70,
  },
  Currencyimg: {
    height: height * 0.08,
    width: width * 0.2,
    // backgroundColor: "pink"
    // borderWidth: 1,
  },
  amtView: {
    flexDirection: "row",
    height: height * 0.08,
    width: width * 0.8,
    // backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "space-between"
  },
});
