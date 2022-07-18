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
import WalletHeader from "../../components/Header/WalletHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import NewHeader from "../../components/Header/NewHeader"
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");

const DATA = [
  {
    key: 1,
    coin: "Theressa Webb",
    option: ImagePath.OPTION,
    option: ImagePath.OPTION,
    no: "(217) 555-0113",
    image: ImagePath.PROFILE,
  },
  {
    key: 2,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 3,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 4,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 5,
    coin: "Bitcoin",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 6,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 7,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 8,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 6,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 7,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 8,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 6,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 7,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
  {
    key: 8,
    coin: "Theressa Webb",
    no: "(217) 555-0113",
    option: ImagePath.OPTION,
    image: ImagePath.PROFILE,
  },
];

const CryptoMarkitContect = (props) => {
  const renderSearch = () => {
    return (
      <View style={styles.searchView}>
        <View style={styles.searchparent}>
          <View style={[styles.input, styles.shadowProp]}>
            <TextInput
              placeholder="Search contacts"
              placeholderTextColor={"#B3B4B7"}
              style={{
                fontSize: height / 50,
                color: "black",
              }}
            />
          </View>
          <TouchableOpacity style={styles.searchIconView}>
            <Image
              source={ImagePath.SEARCH}
              resizeMode="contain"
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listParent}>
        <FlatList
          data={DATA}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => renderData(item)}
          contentContainerStyle={{ paddingBottom: height * 0.05 }}
        />
      </View>
    );
  };

  const renderData = ({ item }) => {
    return (
      <View style={styles.listView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ContactDetail")}
          style={styles.mainContainer}
        >
          <View style={styles.itemView}>
            <View style={styles.coin}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: 40, width: 40 }}
              />
            </View>
            <View style={styles.coinText}>
              <Text
                style={{
                  color: "#2C2C4E",
                  fontSize: height / 55,
                  fontFamily: FONTS.PoppinsBold,
                }}
              >
                {item.coin}
              </Text>
              <Text
                style={{
                  color: "#5E5E5E",
                  fontSize: height / 58,
                  fontFamily: FONTS.PoppinsRegular,
                }}
              >
                {item.no}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.amtView}>
            <Image
              source={item.option}
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.border}></View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <NewHeader
        backIcon={true}
        HeaderTitle={true}
        Title="Contacts"
        onBackPress={() => props.navigation.goBack()}
      />
      {renderSearch()}
      {renderList()}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: height * 0.1,
          width: width * 1,
          // backgroundColor: "green",
          position: "absolute",
          bottom: 10,
        }}
      >
        <CustomButton
          title="Add Contacts"
          ButtonPress={() => props.navigation.navigate("AddContect")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CryptoMarkitContect;

const styles = StyleSheet.create({
  searchparent: {
    height: height * 0.08,
    width: width * 0.9,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: height * 0.08,
    borderWidth: 1,
    // borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    position: "absolute",
    bottom: 10,
  },

  border: {
    height: height * 0.002,
    width: width * 0.9,
    backgroundColor: "lightgrey",
    // marginTop: height * 0.01
  },
  input: {
    height: height * 0.07,
    width: width * 0.65,
    // backgroundColor: "red"
    // shadowColor: '#000000',
    // shadowOffset: {
    //     width: 2,
    //     height: 6
    // },
    // shadowRadius: 5,
    // shadowOpacity: 2.0
  },
  listParent: {
    height: height * 0.65,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  listView: {
    height: height * 0.09,
    width: width * 0.9,
    paddingVertical: 10,
    // backgroundColor: "pink"
  },
  mainContainer: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchView: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor: "green" 
  },
  searchIconView: {
    height: height * 0.07,
    width: width * 0.2,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  itemView: {
    height: height * 0.09,
    width: width * 0.4,
    // backgroundColor: "lightgreen",
    alignItems: "center",
    flexDirection: "row",
  },
  coin: {
    height: height * 0.09,
    width: width * 0.13,
    // backgroundColor: "yellow",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  amtView: {
    height: height * 0.09,
    width: width * 0.25,
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  coinText: {
    height: height * 0.06,
    width: width * 0.55,
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
