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
import CustomInput from "../../components/CustomInput/CustomInput";

const AddAnotherBank = (props) => {
  const [check, setCheck] = useState(true);

  const renderBank = () => {
    return (
      <View style={styles.bank}>
        <View style={styles.bankContain}>
          <View style={styles.upperTxt}>
            <Text
              style={{
                color: "#2C2C4E",
                fontFamily: FONTS.PoppinsMedium,
                fontSize: height / 55,
              }}
            >
              Add your bank account details before{"\n"}adding funds to your
              wallet.
            </Text>
          </View>

          <View style={styles.MidTxt}>
            <Text
              style={{
                color: "#2C2C4E",
                fontFamily: FONTS.PoppinsMedium,
                fontSize: height / 65,
              }}
            >
              Bank account should belong to
            </Text>
            <Text
              style={{
                color: "#2C2C4E",
                fontFamily: FONTS.PoppinsMedium,
                fontSize: height / 42,
              }}
            >
              Ronald Richards
            </Text>
          </View>
          <View>
            <View
              style={{
                marginTop: height * 0.02,
                height: height * 0.04,
                width: width * 0.9,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 55,
                  color: "#2C2C4E",
                }}
              >
                Account Number
              </Text>
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
                RightIcon={true}
                RightIconPress={() => setCheck(check ? false : true)}
                rightImg={check ? ImagePath.SHOW : ImagePath.HIDE}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                marginTop: height * 0.02,
                height: height * 0.04,
                width: width * 0.9,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 55,
                  color: "#2C2C4E",
                }}
              >
                Re-enter Account Number
              </Text>
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
                RightIcon={true}
                RightIconPress={() => setCheck(check ? false : true)}
                rightImg={check ? ImagePath.SHOW : ImagePath.HIDE}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                marginTop: height * 0.02,
                height: height * 0.04,
                width: width * 0.9,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 55,
                  color: "#2C2C4E",
                }}
              >
                SWIFT Code
              </Text>
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
                RightIcon={false}
                RightIconPress={() => setCheck(check ? false : true)}
                rightImg={check ? ImagePath.SHOW : ImagePath.HIDE}
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
        Title="Add Bank Account"
      />
      {/* {renderDetail()} */}
      {renderBank()}
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
          title="Proceed"
          ButtonPress={() => props.navigation.navigate("AddBankVerify")}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAnotherBank;

const styles = StyleSheet.create({
  bank: {
    height: height * 0.7,
    width: width * 1,
    // backgroundColor: "red",
    // borderWidth: 1,
    justifyContent: "center",
  },
  bankContain: {
    height: height * 0.6,
    width: width * 0.9,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
  },
  upperTxt: {
    height: height * 0.095,
    width: width * 0.9,
    // borderWidth: 1,
  },
  MidTxt: {
    height: height * 0.09,
    width: width * 0.9,
    // borderWidth: 1,
  },
});
