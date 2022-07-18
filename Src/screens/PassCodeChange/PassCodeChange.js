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
import CustomInput from "../../components/CustomInput/CustomInput";

const PassCodeChange = (props) => {
  const [check, setCheck] = useState(true);

  const [checkOne, setCheckOne] = useState(true);

  const [checkTwo, setCheckTwo] = useState(true);

  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.7,
          width: width * 1,
          // backgroundColor: "red",
          // borderWidth: 1,
          marginVertical: 25,
        }}
      >
        <View style={styles.tital}>
          <Text style={styles.txxt}>Current Passcode</Text>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: "white",
            height: height * 0.08,
            width: width * 0.9,
            alignSelf: "center",
          }}
        >
          <CustomInput
            secureEntry={check}
            RightIcon={true}
            RightIconPress={() => setCheck(check ? false : true)}
            rightImg={check ? ImagePath.HIDE : ImagePath.SHOW}
          />
        </View>

        <View style={styles.NewPassword}>
          <Text style={styles.txxt}>New Passcode</Text>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: "white",
            height: height * 0.08,
            width: width * 0.9,
            alignSelf: "center",
          }}
        >
          <CustomInput
            secureEntry={checkOne}
            RightIcon={true}
            RightIconPress={() => setCheckOne(checkOne ? false : true)}
            rightImg={checkOne ? ImagePath.HIDE : ImagePath.SHOW}
          />
        </View>

        <View style={styles.NewPassword}>
          <Text style={styles.txxt}>Confirm Passcode</Text>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: "white",
            height: height * 0.08,
            width: width * 0.9,
            alignSelf: "center",
          }}
        >
          <CustomInput
            secureEntry={checkTwo}
            RightIcon={true}
            RightIconPress={() => setCheckTwo(checkTwo ? false : true)}
            rightImg={checkTwo ? ImagePath.HIDE : ImagePath.SHOW}
          />
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
          title="Change Passcode"
          ButtonPress={() => props.navigation.navigate("Settings")}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassCodeChange;

const styles = StyleSheet.create({
  requirePasscode: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "flex-end",
    // borderWidth: 1,
  },
  tital: {
    marginTop: height * 0.02,
    height: height * 0.04,
    width: width * 0.9,
    alignSelf: "center",
  },
  NewPassword: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: "center",
    // borderWidth:1,
    justifyContent: "center",
  },
  txxt: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 60,
    color: "#2C2C4E",
  },
});
