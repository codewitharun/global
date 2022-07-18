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

const AddBankVerify = (props) => {
  const [check, setCheck] = useState(true);

  const renderBank = () => {
    return (
      <View style={styles.bank}>
        <View style={styles.bankContain}>
          <Image source={ImagePath.BANK_PHOTOS} resizeMode="contain" />
        </View>
        <View style={styles.tttx}>
          <Text style={{ fontFamily: FONTS.PoppinsMedium, color: "#2C2C4E" }}>
            Your bank account has
          </Text>
          <Text style={{ fontFamily: FONTS.PoppinsMedium, color: "#2C2C4E" }}>
            been successfully added
          </Text>
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
          title="Verify & Proceed"
          //   ButtonPress={() => props.navigation.navigate("")}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddBankVerify;

const styles = StyleSheet.create({
  bank: {
    height: height * 0.7,
    width: width * 1,
    // backgroundColor: "red",
    // borderWidth: 1,
    // justifyContent: "center",
  },
  bankContain: {
    height: height * 0.39,
    width: width * 1,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tttx: {
    height: height * 0.18,
    width: width * 0.9,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
