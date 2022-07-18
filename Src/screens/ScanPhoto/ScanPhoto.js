import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";
const { height, width } = Dimensions.get("window");

const ScanPhoto = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View style={styles.header}>
          <ImageBackground
            source={ImagePath.GIRL}
            resizeMode="stretch"
            style={styles.header}
          >
            <View style={styles.headerBut}>
              <View
                style={{
                  height: height * 0.07,
                  width: width * 0.12,
                  // backgroundColor: "red",
                  // alignItems:'center',
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Image
                    source={ImagePath.KYC_BACK_BUTTON}
                    resizeMode="contain"
                    style={{ height: 35, width: 35 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerTital}>
                <Text
                  style={{
                    fontSize: width / 24,
                    color: COLOR.BLACK,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  Take a Selfie
                </Text>
              </View>
            </View>
            <View style={styles.Scanner}>
              <View style={styles.ScanImage}>
                <Image
                  source={ImagePath.GIRL_FACE}
                  resizeMode="contain"
                  style={{ height: 200, width: 250 }}
                />
              </View>
              <View style={styles.DoucmentFrame}>
                <View style={styles.txxt}>
                  <Text
                    style={{
                      color: COLOR.BLACK,
                      fontSize: width / 39,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Center your face in the frame amd follow {"\n"}
                  </Text>

                  <Text
                    style={{
                      color: COLOR.BLACK,
                      fontSize: width / 39,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    the on-screen instructions.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.BottomView}>
            <View style={styles.button}>
              <CustomButton title="Continue" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanPhoto;

const styles = StyleSheet.create({
  mainConatiner: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: "skyblue",
    // backgroundColor: "rgb(109,111,112)",
  },
  header: {
    height: height * 0.79,
    width: width * 1,
  },
  headerBut: {
    height: height * 0.08,
    width: width * 0.9,
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  headerTital: {
    width: width * 0.7,
    height: height * 0.05,
    // backgroundColor: "yellow",

    justifyContent: "center",
    alignItems: "center",
  },
  Scanner: {
    width: width * 1,
    height: height * 0.4,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  useFronttxt: {
    width: width * 0.4,
    height: height * 0.04,
    backgroundColor: "red",
  },
  ScanImage: {
    width: width * 0.9,
    height: height * 0.29,
    // borderWidth: 1,
    alignItems: "center",
    // backgroundColor:'green'
    justifyContent: "flex-end",
  },
  BottomView: {
    height: height * 0.14,
    width: width * 1,
    // backgroundColor: "yellow",
    justifyContent: "flex-end",
    // bottom: 2,
  },

  DoucmentFrame: {
    height: height * 0.5,
    width: width * 0.9,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    // borderWidth: 1,
  },
  txxt: {
    height: height * 0.07,
    width: width * 0.9,
    // borderWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
