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
  Switch,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";
import WalletHeader from "../../components/Header/WalletHeader";
import { COLOR } from "../../utils/Colors";
import NewHeader from "../../components/Header/NewHeader";

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabledsSecurity, SetIsEnabledsSecurity] = useState(false);
  const toggleSwitchSecuirty = () =>
    SetIsEnabledsSecurity((previousState) => !previousState);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* <ImageBackground
        resizeMode="stretch"
        source={ImagePath.HEADERBACK}
        style={{
          flexDirection: "row",
          height: height * 0.22,
          width: "100%",
        }}
      > */}
      <Header
        Drawer={true}
        HeaderTitle={true}
        Title="Settings"
        onDrawerPress={() => props.navigation.goBack()}
        rightIcon={true}
        RightIconTwoPress={() => props.navigation.navigate()}
        RightIconTwo={true}
        RightIconPress={() => props.navigation.navigate("Pay")}
      />
      {/* </ImageBackground> */}

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 5, marginTop: height * 0.06, height: height * 1.1, width: width * 1 }}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            // borderWidth: 1,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            Profile
          </Text>
        </View>
        <View style={styles.profileMainContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CryptoMarkitProfile")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Name, phone, email
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("BankDetails")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Bank Details
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TransactionHistory")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Transaction History
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CryptoMarkitContect")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Contacts
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("VerifyIdentity")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  KYC
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: height * 0.06,
            width: width * 0.9,
            //   borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            App
          </Text>
        </View>

        <View style={styles.profileMainContainer1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("LaunchScreen")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont1}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Launch Screen
                </Text>
              </View>
              <View style={styles.innerTitaltxt}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsMedium,
                    fontSize: width / 38,
                  }}
                >
                  Home
                </Text>
              </View>
              <View style={styles.nextArow1}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SelectLanguage")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont1}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Language
                </Text>
              </View>
              <View style={styles.innerTitaltxt}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsMedium,
                    fontSize: width / 38,
                  }}
                >
                  English
                </Text>
              </View>
              <View style={styles.nextArow1}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Currency")}>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont1}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Currency
                </Text>
              </View>
              <View style={styles.innerTitaltxt}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsMedium,
                    fontSize: width / 38,
                  }}
                >
                  USD{" "}
                </Text>
              </View>
              <View style={styles.nextArow1}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.EmailPhone}>
            <View style={styles.titalCont1}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsRegular,
                  fontSize: width / 32,
                  color: "black",
                }}
              >
                Dark Mode
              </Text>
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.27,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "rgb(105,55,231)" }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: height * 0.06,
            width: width * 0.9,
            //   borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            Security
          </Text>
        </View>

        <View style={styles.profileMainContainer1}>
          <View style={styles.EmailPhone}>
            <View style={styles.titalCont1}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsRegular,
                  fontSize: width / 32,
                  color: "black",
                }}
              >
                Unlock with Biometric
              </Text>
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.26,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "rgb(105,55,231)" }}
                thumbColor={isEnabledsSecurity ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchSecuirty}
                value={isEnabledsSecurity}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PassCodeSetting")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Passcode Settings
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PassCodeChange")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Change Passcode
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Factor_Authentication")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Contacts2-Factor Authentication
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: height * 0.06,
            width: width * 0.9,
            //   borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            Notification
          </Text>
        </View>
        <View style={styles.profileMainContainer2}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("NotificationSetting")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Notification Settings
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: height * 0.06,
            width: width * 0.9,
            //   borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            Support
          </Text>
        </View>
        <View style={styles.profileMainContainer3}>
          <TouchableOpacity onPress={() => props.navigation.navigate("HelpCenter")}>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Help Center
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ContectSupport")}
          >
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Contact Support
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: height * 0.06,
            width: width * 0.9,
            //   borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              color: COLOR.BLACK,
              fontWeight: "bold",
            }}
          >
            About Base Reward
          </Text>
        </View>
        <View style={styles.profileMainContainer1}>
          <TouchableOpacity>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Fees & Limits
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("TermsAndConditions")}>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Term & Conditions
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicy")}>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Privacy Notice
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.EmailPhone}>
              <View style={styles.titalCont}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: width / 32,
                    color: "black",
                  }}
                >
                  Visit Our Website
                </Text>
              </View>
              <View style={styles.nextArow}>
                <Image source={ImagePath.NEXT_ARROW} resizeMode="contain" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: height * 0.07,
            width: width * 0.9,
            // borderWidth: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{ fontFamily: FONTS.PoppinsMedium, fontSize: width / 31 }}
          >
            App Version 1.000 0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  profileMainContainer: {
    height: height * 0.35,
    width: width * 0.9,
    borderWidth: 0.1,
    alignSelf: "center",
    // borderRadius: 11,
    // borderColor: "#ddd",
    // borderBottomWidth: 0,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
    // elevation: 3,
  },
  profileMainContainer1: {
    height: height * 0.28,
    width: width * 0.9,
    borderWidth: 0.1,
    alignSelf: "center",
  },
  profileMainContainer2: {
    height: height * 0.07,
    width: width * 0.9,
    borderWidth: 0.1,
    alignSelf: "center",
  },
  profileMainContainer3: {
    height: height * 0.14,
    width: width * 0.9,
    borderWidth: 0.1,
    alignSelf: "center",
  },
  titalCont: {
    height: height * 0.06,
    width: width * 0.7,
    // borderWidth: 1,
    justifyContent: "center",
  },
  titalCont1: {
    height: height * 0.06,
    width: width * 0.55,
    // borderWidth: 1,
    justifyContent: "center",
  },
  innerTitaltxt: {
    height: height * 0.06,
    width: width * 0.2,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  nextArow: {
    height: height * 0.06,
    width: width * 0.12,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-end",
  },
  nextArow1: {
    height: height * 0.06,
    width: width * 0.07,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-end",
  },
  EmailPhone: {
    flexDirection: "row",
    height: height * 0.07,
    width: width * 0.86,
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 1,
    borderColor: "rgb(239,239,239)",
    alignSelf: "center",
  },
});
