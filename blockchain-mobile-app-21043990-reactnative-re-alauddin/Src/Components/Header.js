import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../utils/Color";
const { height, width } = Dimensions.get("screen");

const Header = (props) => {
  const {
    title,
    rightPress,
    RightIcon,
    LeftIcon,
    leftPress,
    rightImg,
    leftImg,
  } = props;

  return (
    <View style={styles.headerParent}>
      {LeftIcon ? (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          <Image source={leftImg} style={styles.headerImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          {/* <Image source={leftImg} style={styles.headerImage} /> */}
        </TouchableOpacity>
      )}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          height: height * 0.1,
          width: width * 0.6,
        }}
      >
        <Text style={styles.walletText}>{title}</Text>
      </View>
      {RightIcon ? (
        <TouchableOpacity
          onPress={rightPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          <Image source={rightImg} style={styles.headerImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={leftPress}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: height * 0.1,
            width: width * 0.2,
          }}
        >
          {/* <Image source={leftImg} style={styles.headerImage} /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerParent: {
    height: height * 0.1,
    width: width * 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    height: height * 0.1,
    width: width * 0.1,
    resizeMode: "contain",
  },
  walletText: {
    fontFamily: "Poppins-Bold",
    fontSize: height / 45,
    color: COLOR.BUTTONCOLOR,
  },
});
