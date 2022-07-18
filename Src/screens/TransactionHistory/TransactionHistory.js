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

const TransactionHistory = (props) => {
  const [medium, setMedium] = useState("Crypto");

  const DATA = [
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
    {
      status: "Send",
      amt: "100.00",
      image: ImagePath.SENDICON,
      date: "December 28, 2021",
    },
    {
      status: "Recieve",
      amt: "100.00",
      image: ImagePath.RECIEVEICON,
      date: "December 28, 2021",
    },
  ];

  const DATAUSD = [
    {
      coin: "Bitcoin",
      amt: "0.00",
      image: ImagePath.BITCOIN,
    },
    {
      coin: "Etherium",
      amt: "0.00",
      image: ImagePath.ETH,
    },
    {
      coin: "Tether",
      amt: "0.00",
      image: ImagePath.BNG,
    },
    {
      coin: "BNB",
      amt: "0.00",
      image: ImagePath.TTH,
    },
    {
      coin: "Bitcoin",
      amt: "0.00",
      image: ImagePath.BITCOIN,
    },
    {
      coin: "Etherium",
      amt: "0.00",
      image: ImagePath.ETH,
    },
    {
      coin: "Tether",
      amt: "0.00",
      image: ImagePath.BNG,
    },
    {
      coin: "BNB",
      amt: "0.00",
      image: ImagePath.TTH,
    },
  ];

  const renderData = ({ item }) => {
    return (
      <View style={styles.listView}>
        <TouchableOpacity style={styles.mainContainer}>
          <View style={styles.itemView}>
            <View style={styles.coin}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: 45, width: 45 }}
              />
            </View>
            <View style={styles.coinText}>
              <Text
                style={{
                  color: "#2C2C4E",
                  fontSize: height / 55,
                  fontFamily: FONTS.PoppinsSemiBold,
                }}
              >
                {item.status}
              </Text>
              <Text
                style={{
                  color: "#858C94",
                  fontSize: height / 95,
                  fontFamily: FONTS.PoppinsRegular,
                }}
              >
                {item.date}
              </Text>
            </View>
          </View>
          <View style={styles.amtView}>
            <View style={styles.amtInsideView}>
              <Text
                style={{
                  color: "#2C2C4E",
                  fontSize: height / 55,
                  fontFamily: FONTS.PoppinsSemiBold,
                }}
              >
                BTC {item.amt}
              </Text>
            </View>
            <View style={styles.arrowView}>
              <Image
                source={ImagePath.FORWARD}
                resizeMode="contain"
                style={{ height: 12, width: 12 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.border}></View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.listParent}>
        <View style={styles.sectionView}>
          <TouchableOpacity
            onPress={() => setMedium("Crypto")}
            style={styles.cryptoView}
          >
            <Text
              style={{
                marginTop: height * 0.03,
                color: medium === "Crypto" ? "#1774FF" : "#2C2C4E",
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsSemiBold,
              }}
            >
              Crypto
            </Text>
            {medium == "Crypto" ? (
              <View
                style={{
                  height: height * 0.003,
                  width: width * 0.14,
                  backgroundColor: "#1774FF",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMedium("USD")}
            style={styles.usdollarView}
          >
            <Text
              style={{
                marginTop: height * 0.03,
                color: medium === "USD" ? "#1774FF" : "#2C2C4E",
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsSemiBold,
              }}
            >
              USD
            </Text>
            {medium == "USD" ? (
              <View
                style={{
                  height: height * 0.003,
                  width: width * 0.14,
                  backgroundColor: "#1774FF",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.border}></View>
        {medium === "Crypto" ? (
          <FlatList
            data={DATA}
            nestedScrollEnabled={true}
            renderItem={(item) => renderData(item)}
            contentContainerStyle={{ paddingBottom: height * 0.1 }}
          />
        ) : (
          <FlatList
            data={DATAUSD}
            nestedScrollEnabled={true}
            renderItem={(item) => renderDataUsd(item)}
            contentContainerStyle={{ paddingBottom: height * 0.1 }}
          />
        )}
      </View>
    );
  };

  const renderDataUsd = ({ item }) => {
    return (
      <View style={styles.listView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("FiatWallet")}
          style={styles.mainContainer}
        >
          <View style={styles.itemView}>
            <View style={styles.coin}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: 35, width: 35 }}
              />
            </View>
            <View style={styles.coinText}>
              <Text
                style={{
                  color: "#2C2C4E",
                  fontSize: height / 55,
                  fontFamily: FONTS.PoppinsRegular,
                }}
              >
                {item.coin}
              </Text>
            </View>
          </View>
          <View style={styles.amtView}>
            <Text
              style={{
                color: "#2C2C4E",
                fontSize: height / 55,
                fontFamily: FONTS.PoppinsRegular,
              }}
            >
              ${item.amt}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.border}></View>
      </View>
    );
  };

  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.9,
          width: width * 1,
          // backgroundColor: "red",
          // borderWidth: 1,
          justifyContent: "center",
        }}
      >
        {renderList()}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Transaction History"
      />
      {/* {renderDetail()} */}
      {renderProfile()}
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  sectionView: {
    height: height * 0.07,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between"
  },
  cryptoView: {
    height: height * 0.07,
    width: width * 0.17,
    // backgroundColor: "grey",
    justifyContent: "space-between",
    // alignSelf: "center"
  },
  usdollarView: {
    height: height * 0.07,
    width: width * 0.17,
    marginLeft: width * 0.05,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
    // alignSelf: "center"
  },

  listParent: {
    height: height * 0.8,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  listView: {
    height: height * 0.1,
    width: width * 0.9,
    paddingVertical: 10,
    // backgroundColor: "pink"
  },
  border: {
    height: height * 0.002,
    width: width * 0.9,
    backgroundColor: "lightgrey",
    // marginTop: height * 0.01
  },
  mainContainer: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemView: {
    height: height * 0.09,
    width: width * 0.4,
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    alignItems: "center",
  },
  coin: {
    height: height * 0.1,
    width: width * 0.15,
    // backgroundColor: "yellow",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  coinText: {
    height: height * 0.06,
    width: width * 0.25,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  amtView: {
    height: height * 0.09,
    width: width * 0.4,
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  amtInsideView: {
    height: height * 0.09,
    width: width * 0.25,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  arrowView: {
    height: height * 0.09,
    width: width * 0.18,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
