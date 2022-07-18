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

const LaunchScreen = (props) => {
  const [check, setCheck] = useState("Home")
  const renderHome = () => {
    return (
      <View style={styles.upperContainer}>
        <View style={styles.HomeOne}>
          <TouchableOpacity onPress={() => setCheck("Home")}>
            <View
              style={{
                height: height * 0.15,
                width: width * 0.9,
                borderBottomWidth: 1,
                justifyContent: "center",
                alignSelf: "center",
                borderColor: "#EBEEF2",
              }}
              resizeMode="contain"
            >
              <View style={styles.bankname}>
                <View style={styles.img}>
                  <ImageBackground
                    source={check == "Home" ? ImagePath.HOME_CIRCLE : ImagePath.WHITE_CIRCLE}
                    resizeMode="contain"
                    style={{ height: 50, width: 50 }}
                  >
                    <View
                      style={{
                        height: height * 0.075,
                        width: width * 0.13,
                        // backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={ImagePath.HOME_ICONE}
                        resizeMode="contain"
                        style={{
                          height: 30,
                          width: 30,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.title}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.ttxt}>Home (Default)</Text>
                  </View>
                </View>
                <View style={styles.threedotimg}>
                  {
                    check == "Home" ?
                      <TouchableOpacity>
                        <Image source={ImagePath.TICK} />
                      </TouchableOpacity> : null
                  }
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCheck("Wallet")}>
            <View
              style={{
                height: height * 0.15,
                width: width * 0.9,
                borderBottomWidth: 1,
                justifyContent: "center",
                alignSelf: "center",
                borderColor: "#EBEEF2",
              }}
              resizeMode="contain"
            >
              <View style={styles.bankname}>
                <View style={styles.img}>
                  <ImageBackground
                    source={check == "Wallet" ? ImagePath.HOME_CIRCLE : ImagePath.WHITE_CIRCLE}
                    resizeMode="contain"
                    style={{ height: 50, width: 50 }}
                  >
                    <View
                      style={{
                        height: height * 0.075,
                        width: width * 0.13,
                        // backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={check == "Wallet" ? ImagePath.WALLETUNCHECK : ImagePath.WALLET_IMG}
                        resizeMode="contain"
                        style={{
                          height: 30,
                          width: 30,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.title}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.ttxt}>Wallet</Text>
                  </View>
                </View>
                <View style={styles.threedotimg}>
                  {
                    check == "Wallet" ?
                      <TouchableOpacity>
                        <Image source={ImagePath.TICK} />
                      </TouchableOpacity> : null
                  }
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCheck("Reward")}>
            <View
              style={{
                height: height * 0.15,
                width: width * 0.9,
                justifyContent: "center",
                alignSelf: "center",
                borderBottomWidth: 1,
                borderColor: "#EBEEF2",
              }}
              resizeMode="contain"
            >
              <View style={styles.bankname}>
                <View style={styles.img}>
                  <ImageBackground
                    source={check == "Reward" ? ImagePath.HOME_CIRCLE : ImagePath.WHITE_CIRCLE}
                    resizeMode="contain"
                    style={{ height: 50, width: 50 }}
                  >
                    <View
                      style={{
                        height: height * 0.075,
                        width: width * 0.13,
                        // backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={check == "Reward" ? ImagePath.REWARDUNCHECK : ImagePath.WININD_BETCH}
                        resizeMode="contain"
                        style={{
                          height: 30,
                          width: 30,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.title}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.ttxt}>Reward</Text>
                  </View>
                </View>
                <View style={styles.threedotimg}>
                  {
                    check == "Reward" ?
                      <TouchableOpacity>
                        <Image source={ImagePath.TICK} />
                      </TouchableOpacity> : null
                  }
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Launch Screen"
      />
      {renderHome()}
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
          ButtonPress={() => props.navigation.navigate("TransactionSuccess")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  HomeOne: {
    height: height * 0.6,
    width: width * 1,
    // borderWidth: 1,
    // justifyContent: "center",
  },
  upperContainer: {
    height: height * 0.72,
    width: width * 1,
    // backgroundColor: "red",
    // borderWidth: 1,
    marginVertical: 23,
  },
  //   bank: {
  //     height: height * 0.13,
  //     width: width * 0.9,
  //     borderWidth: 1,
  //     alignSelf: "center",
  //   },

  bankContain: {
    height: height * 0.6,
    width: width * 0.9,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
  },
  bankname: {
    height: height * 0.1,
    width: width * 0.9,
    // borderWidth: 1,
    flexDirection: "row",
  },

  img: {
    width: width * 0.19,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: width * 0.51,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
  },
  threedotimg: {
    width: width * 0.19,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ttxt: {
    color: "#191919",
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 55,
  },
});
