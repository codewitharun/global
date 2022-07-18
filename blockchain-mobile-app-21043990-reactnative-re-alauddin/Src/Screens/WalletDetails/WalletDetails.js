// import { StyleSheet, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
// import React, { useEffect } from 'react'
// import { ImagePath } from "../../utils/ImagePath"
// import { Image, Text } from '@rneui/themed';
// import { COLOR } from '../../utils/Color';
// import CustomButton from '../../Components/CustomButton';
// import Header from '../../Components/Header';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// const { height, width } = Dimensions.get("screen")

// const WalletDetails = (props) => {

//     function renderMiddle() {
//         return (
//             <View style={styles.parentMiddle}>
//                 <View style={styles.iconView}>
//                     <View style={styles.iconInsideView}>
//                         <Image source={ImagePath.GREM} resizeMode="contain" style={{ height: height * 0.1, width: width * 0.1 }} />
//                     </View>
//                     <View style={styles.balnceView}>
//                         <Text style={styles.balanceTxt}>Total Balance</Text>
//                         <Text style={styles.amtTxt}>15,526</Text>
//                     </View>
//                 </View>
//                 <View style={styles.amountView}>
//                     <Text style={styles.gremTxt}>GREM</Text>
//                 </View>
//             </View>
//         )
//     }

//     function renderQr() {
//         return (
//             <View style={styles.parentViewQr}>
//                 <View style={styles.qrView}>
//                     <Image source={ImagePath.QRCODE} resizeMode="contain" style={styles.qrImg} />
//                 </View>
//                 <View style={styles.copyView}>
//                     <View style={styles.rectangle}>
//                         <View style={styles.gremRectangle}>
//                             <Image source={ImagePath.GREM} resizeMode="contain" style={styles.gremImage} />
//                         </View>
//                         <View style={styles.txtRectangle}>
//                             <Text style={styles.copyTxt}>0x24525sfds0xsse122554ded45s4d5s4</Text>
//                         </View>
//                         <TouchableOpacity style={styles.copyRectangle}>
//                             <Image source={ImagePath.COPY} resizeMode="contain" style={styles.copyImg} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={styles.buttonView}>
//                     <CustomButton
//                         title={"Withdraw"}
//                         ButtonPress={() => props.navigation.navigate("WithDraw")}
//                     />
//                 </View>
//             </View>
//         )
//     }

//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
//                 <Header
//                     LeftIcon={true}
//                     leftImg={ImagePath.BACKICON}
//                     title={"Wallet Details"}
//                     leftPress={() => props.navigation.goBack()}
//                 />
//                 {renderMiddle()}
//                 <KeyboardAwareScrollView enableOnAndroid={true}>
//                     <ScrollView>
//                         {renderQr()}
//                     </ScrollView>
//                 </KeyboardAwareScrollView>
//             </ImageBackground>
//         </SafeAreaView>
//     )
// }

// export default WalletDetails

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//     },
//     backgroundImg: {
//         height: height * 1,
//         width: width * 1
//     },
//     parentMiddle: {
//         height: height * 0.2,
//         // backgroundColor: "red",
//         marginTop: height * 0.02,
//         width: width * 1
//     },
//     rectangle: {
//         height: height * 0.08,
//         width: width * 0.9,
//         // backgroundColor: "white",
//         borderWidth: height * 0.002,
//         borderColor: COLOR.RECTANGLE,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     gremImage: {
//         height: height * 0.1,
//         width: width * 0.1
//     },
//     copyImg: {
//         height: height * 0.08,
//         width: width * 0.08
//     },
//     buttonView: {
//         // backgroundColor: "lightpink",
//         height: height * 0.2,
//         width: width * 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     gremRectangle: {
//         height: height * 0.08,
//         width: width * 0.16,
//         // backgroundColor: "pink",
//         borderWidth: height * 0.001,
//         justifyContent: "center",
//         alignItems: "center",
//         borderColor: COLOR.RECTANGLE
//     },
//     txtRectangle: {
//         height: height * 0.08,
//         width: width * 0.59,
//         // backgroundColor: "pink",
//         borderWidth: height * 0.001,
//         borderColor: COLOR.RECTANGLE,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     copyRectangle: {
//         height: height * 0.08,
//         width: width * 0.15,
//         justifyContent: "center",
//         alignItems: "center",
//         // backgroundColor: "pink",
//         borderWidth: height * 0.001,
//         borderColor: COLOR.RECTANGLE,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     qrView: {
//         height: height * 0.29,
//         width: width * 0.7,
//         alignSelf: "center",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: height * 0.04,
//         // backgroundColor: "yellow"
//     },
//     qrImg: {
//         height: height * 0.25,
//         width: width * 0.6,
//         // backgroundColor: "red"
//     },
//     amountView: {
//         // backgroundColor: "blue",
//         height: height * 0.07,
//         width: width * 0.3,
//         alignSelf: "center",
//         alignItems: "center",
//         justifyContent: "flex-end"
//     },
//     copyView: {
//         // backgroundColor: "red",
//         height: height * 0.1,
//         width: width * 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: height * 0.03
//     },
//     balnceView: {
//         // backgroundColor: "green",
//         height: height * 0.11,
//         width: width * 0.6,
//         alignSelf: "center",
//         alignItems: "center",
//         justifyContent: "space-between"
//     },
//     parentViewQr: {
//         backgroundColor: "white",
//         width: width * 1,
//         height: height * 0.8,
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20
//     },
//     headerImage: {
//         height: height * 0.10,
//         width: width * 0.10,
//         resizeMode: "contain"
//     },
//     iconView: {
//         // backgroundColor: "white",
//         height: height * 0.09,
//         width: width * 1,
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     balanceTxt: {
//         fontFamily: "Lato-Bold",
//         fontSize: height / 50,
//         color: COLOR.LABETEXT,
//     },
//     gremTxt: {
//         fontFamily: "Lato-Bold",
//         fontSize: height / 45,
//         color: COLOR.LABETEXT,
//     },
//     copyTxt: {
//         fontFamily: "Lato-Regular",
//         fontSize: height / 85,
//         color: COLOR.COPYTXT,
//     },
//     amtTxt: {
//         fontFamily: "Lato-Bold",
//         fontSize: height / 30,
//         color: "black",
//     },
//     iconInsideView: {
//         // backgroundColor: "yellow",
//         height: height * 0.09,
//         width: width * 0.2,
//         alignItems: "center",
//         justifyContent: "center"
//     },
// })
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import CustomButton from "../../Components/CustomButton";
import Header from "../../Components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GetUserAddressUrl } from "../../RestApi/ApiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const { height, width } = Dimensions.get("screen");
import QRCode from "react-native-qrcode-image";
import Clipboard from "@react-native-community/clipboard";

const WalletDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [walletDetails, setWalletDetails] = useState(props?.route?.params);
  const [userAddress, setUserAddress] = useState({});

  useEffect(() => {
    GetUserAddressApi();
  }, [props.route]);

  const copyAddress = (add) => {
    Clipboard.setString(add);
    alert("Copied");
  };

  // ****** User Address Api ******
  const GetUserAddressApi = async () => {
    const Token = await AsyncStorage.getItem("token");

    setIsLoading(true);
    axios({
      method: "GET",
      url: `http://172.16.0.229:3028/wallet/get-address-new?coinName=${walletDetails?.walletDetails?.coinShortName}`,
      headers: {
        userId: 5,
      },
    })
      .then(async (response) => {
        if (response) {
          console.log("==== Get Address Response ====", response);
          setUserAddress(response?.data?.data);
          setIsLoading(false);
        } else {
          alert("Something went wrong.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("===== Get Address Catch Error ======", err);

        setIsLoading(false);
      });
  };

  function renderMiddle() {
    return (
      <View style={styles.parentMiddle}>
        <View style={styles.iconView}>
          <View style={styles.iconInsideView}>
            <Image
              source={{ uri: walletDetails?.walletDetails?.coinImage }}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.1 }}
            />
          </View>
          <View style={styles.balnceView}>
            <Text style={styles.balanceTxt}>Total Balance</Text>
            {walletDetails?.walletDetails?.coinFullName === "Bitcoin" && (
              <Text style={styles.amtTxt}>
                {walletDetails?.walletDetails?.coinFullName === "Bitcoin"
                  ? walletDetails?.userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}

            {walletDetails?.walletDetails?.coinFullName === "Ethereum" && (
              <Text style={styles.amtTxt}>
                {walletDetails?.walletDetails?.coinFullName === "Ethereum"
                  ? walletDetails?.userBalance[1]?.totalBalance
                  : "0"}
              </Text>
            )}
            {walletDetails?.walletDetails?.coinFullName === "Tether" && (
              <Text style={styles.amtTxt}>
                {walletDetails?.walletDetails?.coinFullName === "Tether"
                  ? walletDetails?.userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            {walletDetails?.walletDetails?.coinFullName === "Grem" && (
              <Text style={styles.amtTxt}>
                {walletDetails?.walletDetails?.coinFullName === "Grem"
                  ? walletDetails?.userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            {walletDetails?.walletDetails?.coinFullName === "Gret" && (
              <Text style={styles.amtTxt}>
                {walletDetails?.walletDetails?.coinFullName === "Gret"
                  ? walletDetails?.userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.gremTxt}>
            {walletDetails?.walletDetails?.coinFullName}
          </Text>
        </View>
      </View>
    );
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.qrView}>
          {/* <Image
            source={ImagePath.QRCODE}
            resizeMode="contain"
            style={styles.qrImg}
          /> */}
          <QRCode
            value={"userAddress?.walletAddress"}
            size={200}
            bgColor="#000000"
            fgColor="#ffffff"
          />
        </View>
        <View style={styles.copyView}>
          <View style={styles.rectangle}>
            <View style={styles.gremRectangle}>
              <Image
                // source={ImagePath.GREM}
                source={{ uri: walletDetails?.walletDetails?.coinImage }}
                resizeMode="contain"
                style={styles.gremImage}
              />
            </View>
            <View style={styles.txtRectangle}>
              <Text numberOfLines={1} style={[styles.copyTxt, { padding: 5 }]}>
                {userAddress?.walletAddress}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.copyRectangle}
              onPress={() => copyAddress(userAddress?.walletAddress)}
            >
              <Image
                source={ImagePath.COPY}
                resizeMode="contain"
                style={styles.copyImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* ********send container******** */}
        <View
          style={{
            height: height * 0.08,
            width: width * 0.9,
            alignSelf: "center",
            // backgroundColor: "green",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                height: height * 0.04,
                width: width * 0.17,
                // backgroundColor: "aqua",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={ImagePath.SEND_RED}
                resizeMode="contain"
                style={{ height: 14, width: 20 }}
              />
              <Text style={{ color: "red", fontSize: height / 45 }}>Send</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                height: height * 0.04,
                width: width * 0.2,
                // backgroundColor: "blue",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={ImagePath.recive_Green}
                resizeMode="contain"
                style={{ height: 13, width: 20 }}
              />
              <Text style={{ color: "green", fontSize: height / 45 }}>
                {" "}
                Receive
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ****recive*************** */}
        <View style={styles.buttonView}>
          <CustomButton
            title={"Send"}
            ButtonPress={() => props.navigation.navigate("WithDraw")}
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Header
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          title={"Wallet Details"}
          leftPress={() => props.navigation.goBack()}
        />
        {renderMiddle()}
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
        >
          <ScrollView>{renderQr()}</ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WalletDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  parentMiddle: {
    height: height * 0.2,
    // backgroundColor: "red",
    marginTop: height * 0.02,
    width: width * 1,
  },
  rectangle: {
    height: height * 0.08,
    width: width * 0.9,
    // backgroundColor: "white",
    borderWidth: height * 0.002,
    borderColor: COLOR.RECTANGLE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gremImage: {
    height: height * 0.1,
    width: width * 0.1,
  },
  copyImg: {
    height: height * 0.08,
    width: width * 0.08,
  },
  buttonView: {
    // backgroundColor: "lightpink",
    height: height * 0.1,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gremRectangle: {
    height: height * 0.08,
    width: width * 0.16,
    // backgroundColor: "pink",
    borderWidth: height * 0.001,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR.RECTANGLE,
  },
  txtRectangle: {
    height: height * 0.08,
    width: width * 0.59,
    // backgroundColor: "pink",
    borderWidth: height * 0.001,
    borderColor: COLOR.RECTANGLE,
    justifyContent: "center",
    alignItems: "center",
  },
  copyRectangle: {
    height: height * 0.08,
    width: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
    borderWidth: height * 0.001,
    borderColor: COLOR.RECTANGLE,
    alignItems: "center",
    justifyContent: "center",
  },
  qrView: {
    height: height * 0.29,
    width: width * 0.7,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.04,
    // backgroundColor: "yellow"
  },
  qrImg: {
    height: height * 0.25,
    width: width * 0.6,
    // backgroundColor: "red"
  },
  amountView: {
    // backgroundColor: "blue",
    height: height * 0.07,
    width: width * 0.3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  copyView: {
    // backgroundColor: "red",
    height: height * 0.1,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.03,
  },
  balnceView: {
    // backgroundColor: "green",
    height: height * 0.11,
    width: width * 0.6,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 0.8,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerImage: {
    height: height * 0.1,
    width: width * 0.1,
    resizeMode: "contain",
  },
  iconView: {
    // backgroundColor: "white",
    height: height * 0.09,
    width: width * 1,
    flexDirection: "row",
    alignItems: "center",
  },
  balanceTxt: {
    fontFamily: "Lato-Bold",
    fontSize: height / 50,
    color: COLOR.LABETEXT,
  },
  gremTxt: {
    fontFamily: "Lato-Bold",
    fontSize: height / 45,
    color: COLOR.LABETEXT,
  },
  copyTxt: {
    fontFamily: "Lato-Regular",
    fontSize: height / 85,
    color: COLOR.COPYTXT,
  },
  amtTxt: {
    fontFamily: "Lato-Bold",
    fontSize: height / 30,
    color: "black",
  },
  iconInsideView: {
    // backgroundColor: "yellow",
    height: height * 0.09,
    width: width * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
