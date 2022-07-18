import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/Buttons/CustomButton";
import { FONTS } from "../../utils/FontFamily";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");

const ExistingLogin = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <ImageBackground source={ImagePath.TBG} style={styles.main}>
          <View style={styles.image}>
            <Image
              source={ImagePath.BRW}
              resizeMode="contain"
              style={{ height: 120, width: 150 }}
            />
          </View>
          <View style={styles.imag}>
            <Image
              source={ImagePath.BRW_MIRROR}
              resizeMode="contain"
              style={{ height: 120, width: 150 }}
            />
          </View>

          <View style={styles.bottomView}>
            <View style={styles.refrel}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Referal_code")}
              >
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsSemiBold,
                    fontSize: height / 58,
                    color: "#2C2C4E",
                  }}
                >
                  Invited? Add Referral Code
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <CustomButton
                title="Create New Account"
                ButtonPress={() =>
                  props.navigation.navigate("CreateNew_Account")
                }
              />
            </View>

            <View style={styles.button2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <View
                  style={{
                    height: height * 0.07,
                    width: width * 0.9,
                    borderRadius: 7,
                    // backgroundColor: "yellow",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "rgb( 100,181,251)",
                    borderWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      color: "rgb( 100,181,251)",
                      fontFamily: FONTS.PoppinsMedium,
                      fontSize: width / 31,
                    }}
                  >
                    Log in to existing account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default ExistingLogin;

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
  },
  image: {
    height: height * 0.34,
    width: width * 1,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imag: {
    height: height * 0.18,
    width: width * 1,
    // backgroundColor: "yellow",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  bottomView: {
    height: height * 0.28,
    width: width * 1,
    // backgroundColor: "red",
    position: "absolute",
    bottom: 20,
    // borderWidth: 1,
  },

  button: {
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "center",
  },
  button2: {
    width: width * 0.9,
    height: height * 0.11,
    // backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // position: "absolute",
    // bottom: 20,
  },
  refrel: {
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: "center",
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
    // borderWidth: 1,
  },
});

{
  /* <View style={styles.image}>
<Image
  style={{
    height: 370,
    width: 380,
    resizeMode: "center",
    position: "absolute",
  }}
  source={ImagePath.BRW}
/>
</View>
<View style={styles.imag}>
<Image
  style={{
    height: 650,
    width: 389,
    resizeMode: "center",
    position: "absolute",
  }}
  source={ImagePath.BRW_MIRROR}
/>
</View>

 */
}
