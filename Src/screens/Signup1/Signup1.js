import { StyleSheet, Text, Dimensions, Image, View } from "react-native";
import React from "react";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/Buttons/CustomButton";
import { FONTS } from "../../utils/FontFamily";
const { height, width } = Dimensions.get("window");

const Signup1 = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        <Image
          style={{
            height: 250,
            width: 250,
            resizeMode: "center",
            position: "absolute",
          }}
          source={ImagePath.SIGNUP1}
        />
      </View>
      <View style={styles.imag}>
        <Image
          style={{
            height: 250,
            width: 250,
            resizeMode: "center",
            position: "absolute",
          }}
          source={ImagePath.MASK_SIGNUP}
        />
      </View>
      <View style={styles.text}>
        <Text
          style={{
            fontSize: height / 35,
            fontFamily: FONTS.PoppinsMedium,
            fontWeight: "500",
            color: "#2C2C4E",
          }}
        >
          Email has been sent
        </Text>
        <View style={styles.txt}>
          <Text
            style={{
              fontSize: height / 35,
              fontFamily: FONTS.PoppinsMedium,
              // fontWeight: "500",
              color: "#2C2C4E",
            }}
          >
            successfully
          </Text>
        </View>
      </View>
      <View style={styles.btncon}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.9,
          }}
        >
          <CustomButton
            title="Continue"
            ButtonPress={() => props.navigation.navigate("SignUpNo")}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup1;

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "#ffff",
  },
  image: {
    height: height * 0.45,
    width: width * 1,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  imag: {
    height: height * 0.1,
    width: width * 1,
    // position: "absolute",
    // backgroundColor: "green",
    alignItems: "center"
  },
  text: {
    height: height * 0.2,
    width: width * 0.7,
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    alignItems: "center",
  },
  txt: {
    height: height * 0.05,
    width: width * 0.45,
    // alignItems:'center',
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    alignItems: "center"
  },
  btncon: {
    height: height * 0.27,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "flex-end",
    // backgroundColor:'green'
    position: "absolute",
    bottom: 30,
  },
});
