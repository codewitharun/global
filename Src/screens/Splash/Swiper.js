import React from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: 1,
    image: ImagePath.SPLASH1,
    image1: ImagePath.MIRRORSPALSH1,
    text: "Safe & Secure",
    text1: "BUY, SELL crypto in few clicks. SEND and RECIEVE .",
    text2: "and RECIEVE crypto for free.",
    // backgroundColor: 'rgb (107, 57, 118)',
    titleColor: "rgb(255,255,255)",
    // textColor: 'rgb(255,255,255)',
  },
  {
    key: 2,
    image: ImagePath.SPLASH2,
    image1: ImagePath.MIRRORSPALSH2,
    Image2: ImagePath.BACKARROW,
    text: "Loyalty Reward:",
    text1: "Earn crypto for every transaction",
    text2: "you make",
    // backgroundColor: '#febe29',
    titleColor: "rgb(49,49,49)",
    // textColor: 'rgb(26,25,25)',
  },
  {
    key: 3,
    image: ImagePath.SPLASH3,
    image1: ImagePath.MIRRORSPALSH3,
    Image2: ImagePath.BACKARROW,
    text: "Crypto Card",
    text1: "Banking the UNBANKED in Africa and ",
    text2: "the World.",
    // backgroundColor: 'rgb(101,175,30)',
    titleColor: "rgb(255,255,255)",
    // textColor: 'rgb(255,255,255)',
  },
];

const _renderItem = ({ item }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: height * 0.8,
          width: width * 1,
          // backgroundColor: "green",
        }}
      >
        <View style={styles.backArrow}>
          <View style={styles.arrowimageV}>
            <TouchableOpacity>
              {/* <Image source={item.Image2} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={item.image}
            style={{
              height: 250,
              width: 250,
              resizeMode: "contain",
              // borderRadius: 160,
              position: "absolute",
            }}
          />
        </View>

        <View style={styles.titleContainer}>
          <Image
            source={item.image1}
            style={{
              height: 200,
              width: 220,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={styles.alltext}>
          <View style={styles.txtContainer2}>
            <Text
              style={

                {
                  color: "#2C2C4E",
                  // fontWeight: "bold",
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 28
                }
              }
            >
              {item.text}
            </Text>
          </View>
          <View style={styles.txtContainer}>
            <Text
              style={
                styles.txtView1}
            >
              {item.text1}
            </Text>
          </View>
          <View style={styles.txtContainer1}>
            <Text
              style={
                styles.txtView1}
            >
              {item.text2}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Swiper = (props) => (
  <View style={{ height: height * 1 }}>
    <View style={styles.container}>
      <SwiperFlatList
        paginationStyle={{
          width: width * 0.35,
          height: height * 0.07,
          // backgroundColor: "cyan",
          alignSelf: "flex-start",
          justifyContent: "center",
        }}
        paginationStyleItemActive={{
          width: width * 0.09,
          height: height * 0.01,
          backgroundColor: "rgb(0,126,247)",
        }}
        paginationStyleItem={{
          width: width * 0.02,
          height: height * 0.011,
          borderRadius: 20,
        }}
        autoplay
        autoplayDelay={5}
        autoplayLoop
        index={2}
        data={slides}
        showPagination={true}
        paginationActiveColor="blue"
        renderItem={_renderItem}
      ></SwiperFlatList>
    </View>

    <View style={styles.button}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ExistingLogin")}
        >
          <Image
            source={ImagePath.SMALLBUTTON}
            style={{ resizeMode: "contain", height: 50, width: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    height: height * 0.9,
    // width: width * 1,
  },

  text: {
    fontSize: width * 0.5,
    textAlign: "center",
  },

  //   ****
  mainContainer: {
    height: Platform.OS === "android" ? height * 1 : height * 1,
    width: width * 1,
    backgroundColor: "red",
  },
  titleContainer: {
    height: height * 0.2,
    width: width * 1,
    alignItems: "center",
    // backgroundColor: 'green',
    // borderWidth: 1,
  },
  //
  imgContainer: {
    height: height * 0.33,
    width: width * 1,
    alignItems: "center",
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  txtView: {
    fontSize: height / 35,
    color: COLOR.BLACK,
    // backgroundColor: "red",
  },
  txtView1: {
    fontSize: height / 50,
    color: "#2C2C4E",
    fontFamily: FONTS.PoppinsMedium
    // backgroundColor: "red",
  },
  txtContainer: {
    height: height * 0.03,
    width: width * 0.9,
    // backgroundColor: "red"
    // alignItems: 'center',
    // borderWidth: 1,
  },
  txtContainer1: {
    height: height * 0.03,
    width: width * 0.9,
    // alignItems: 'center',
    // borderWidth: 1,
    alignItems: "flex-start",
  },
  txtContainer2: {
    height: height * 0.06,
    width: width * 0.9,
    // alignItems: 'center',
    // borderWidth: 1,
  },
  alltext: {
    height: height * 0.75,
    width: width * 0.9,
    // backgroundColor: "blue",
    position: "absolute",
    // alignItems:'flex-end'
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  backArrow: {
    height: height * 0.09,
    width: width * 1,
    // backgroundColor: "cyan",
  },
  arrowimageV: {
    height: height * 0.06,
    width: width * 0.18,
    // borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 30,
    // justifyContent: "center",
    height: height * 0.1,
    width: width * 0.9,
    // backgroundColor: "yellow",
    alignSelf: "center",
  },
});

export default Swiper;
