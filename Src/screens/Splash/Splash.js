import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ImageBackground,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import { COLOR } from "../../utils/Colors";
ImagePath;
const { height, width } = Dimensions.get("window");

const Splash = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      // alert('This is Splash Screen');
      props.navigation.navigate("Swiper");
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.main}>
      <ImageBackground
        source={ImagePath.SPLASH_BG}
        style={styles.main}
        resizeMode="cover"
      >
        <View
          style={{
            height: height * 0.22,
            width: width * 1,
            // borderWidth: 1,
            // backgroundColor: "red",
            justifyContent: "flex-end",
          }}
        >
          <Image resizeMode="contain" source={ImagePath.BASE_REWARD} style={{ height: height * 0.2, width: width * 1 }} />
        </View>

        <View style={styles.image}>
          <Image
            source={ImagePath.BRW}
            resizeMode="contain"
            style={{ height: 160, width: 200 }}
          />
        </View>
        <View style={styles.imag}>
          <Image source={ImagePath.BRW_MIRROR} resizeMode="contain" />
        </View>
        <View
          style={{
            height: height * 0.18,
            width: width * 0.9,
            // backgroundColor: "red",
            justifyContent: "flex-end",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              color: "#FFFFFF",
              fontSize: height / 54,
              letterSpacing: 0.05
            }}
          >
            CRYPTO BANKING
          </Text>
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              color: "#FFFFFF",
              fontSize: height / 54,
              letterSpacing: 0.05
            }}
          >
            REWARDING YOUR LOYALTY ALL THE WAY
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  BaseReward: {
    height: height * 0.3,
    width: width * 1,
    backgroundColor: "pink",
    // justifyContent: 'center',
    alignSelf: "center",
    alignItems: "center",
    // marginHorizontal: 10,
  },
  image: {
    height: height * 0.3,
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
});
