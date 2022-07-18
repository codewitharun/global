import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";

const PassCodeSetting = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabledsSecurity, SetIsEnabledsSecurity] = useState(false);
  const toggleSwitchSecuirty = () =>
    SetIsEnabledsSecurity((previousState) => !previousState);

  const [isEnabledsSell, SetIsEnabledsSell] = useState(false);
  const toggleSwitchSell = () =>
    SetIsEnabledsSell((previousState) => !previousState);

  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.7,
          width: width * 1,
          // backgroundColor: "red",
          //   borderWidth: 1,
          marginVertical: 25,
        }}
      >
        <View
          style={{
            height: height * 0.1,
            width: width * 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: height * 0.06,
              width: width * 1,
              backgroundColor: "rgb(242,242,242)",
            }}
          >
            <View style={styles.requirePasscode}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 65,
                  color: "#2C3A4B",
                }}
              >
                Require passcode when
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.EmailPhone}>
          <View style={styles.titalCont1}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsMedium,
                fontSize: width / 32,
                color: "black",
              }}
            >
              Opening App
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

        <View style={styles.profileMainContainer1}>
          <View style={styles.EmailPhone}>
            <View style={styles.titalCont1}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: width / 32,
                  color: "black",
                }}
              >
                Buy Crypto
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
        </View>

        <View style={styles.profileMainContainer1}>
          <View style={styles.EmailPhone}>
            <View style={styles.titalCont1}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: width / 32,
                  color: "black",
                }}
              >
                Sell Crypto
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
                thumbColor={isEnabledsSell ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchSell}
                value={isEnabledsSell}
              />
            </View>
          </View>
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
        Title="Passcode Settings"
      />
      {renderProfile()}
    </SafeAreaView>
  );
};

export default PassCodeSetting;

const styles = StyleSheet.create({
  requirePasscode: {
    height: height * 0.06,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "center",
  },
  EmailPhone: {
    flexDirection: "row",
    height: height * 0.08,
    width: width * 0.86,
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderColor: "rgb(239,239,239)",
    alignSelf: "center",
    // borderWidth: 1,
  },
  titalCont1: {
    height: height * 0.06,
    width: width * 0.5,
    // borderWidth: 1,
    justifyContent: "center",
  },
});
