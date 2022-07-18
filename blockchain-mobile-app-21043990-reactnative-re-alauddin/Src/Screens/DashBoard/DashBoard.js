import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Image, Text, Input } from "@rneui/themed";
import { ImagePath } from "../../utils/ImagePath";
import { COLOR } from "../../utils/Color";
import AppIntroSlider from "react-native-app-intro-slider";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  GetAllUserBalanceCoinListUrl,
  GetUserAddressUrl,
} from "../../RestApi/ApiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const { height, width } = Dimensions.get("screen");
import moment from "moment";

const DATA = [
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  // {
  //     image: ImagePath.GREM,
  //     status: "GREM",
  //     xrp: "320",
  //     from: "0x4200c90",
  //     usd: "$208.856"
  // },
  // {
  //     image: ImagePath.GREM,
  //     status: "GREM",
  //     xrp: "320",
  //     from: "0x4200c90",
  //     usd: "$208.856"
  // },
];

const DashBoard = (props) => {
  const [isLodingCoins, setIsLoadingCoins] = useState(false);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  const [coinList, setCoinList] = useState([]);
  const [userBalance, setUserBalance] = useState([]);
  const [transactionsHistoryList, setTransactionsHistoryList] = useState([]);
  const [userAddress, setUserAddress] = useState([]);

  useEffect(() => {
    GetBalanceCoinListApi();
    GetAllTransactionsApi();
  }, [props.route]);

  // ****** Get All User Balance & CoinList Api ******
  const GetBalanceCoinListApi = async () => {
    const Token = await AsyncStorage.getItem("token");
    setIsLoadingCoins(true);
    axios({
      method: "GET",
      url: GetAllUserBalanceCoinListUrl,
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(async (response) => {
        if (response.status === 200) {
          console.log("==== BalanceCoinList Response ====", response);
          setCoinList(response?.data?.data?.coinList);
          setUserBalance(response?.data?.data?.userBalance);
          setIsLoadingCoins(false);
        } else {
          alert("Something went wrong.");
          setIsLoadingCoins(false);
        }
      })
      .catch((err) => {
        console.log("===== BalanceCoinList Catch Error ======", err);

        setIsLoadingCoins(false);
      });
  };

  // ****** All Transactions Api ******
  const GetAllTransactionsApi = async () => {
    const Token = await AsyncStorage.getItem("token");
    setIsLoadingTransactions(true);
    axios({
      method: "GET",
      url: "https://java-blockchainapp.mobiloitte.org/wallet/get-all-transaction-history?page=0&pageSize=10",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(async (response) => {
        if (response?.data?.status === 200) {
          console.log("==== Transaction History Response ====", response);
          setTransactionsHistoryList(response?.data?.data?.resultlist);
          setIsLoadingTransactions(false);
        } else {
          alert("Something went wrong.");
          setIsLoadingTransactions(false);
        }
      })
      .catch((err) => {
        console.log("===== Transactions History Catch Error ======", err);

        setIsLoadingTransactions(false);
      });
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("WalletDetails", {
            walletDetails: item,
            userBalance: userBalance,
          })
        }
      >
        <ImageBackground
          source={ImagePath.SLIDER}
          resizeMode="cover"
          style={{ height: height * 0.22, width: width * 1 }}
        >
          <View style={styles.iconView}>
            <View style={styles.iconInsideView}>
              <Image
                source={{ uri: item?.coinImage }}
                resizeMode="contain"
                style={{
                  height: height * 0.12,
                  width: width * 0.12,
                }}
              />
            </View>
            <View style={styles.balnceView}>
              <Text style={styles.balanceTxt}>Total Balance</Text>
            </View>
          </View>
          <View style={styles.amountView}>
            {item?.coinFullName === "Bitcoin" && (
              <Text style={styles.amtTxt}>
                {item?.coinFullName === "Bitcoin"
                  ? userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            {item?.coinFullName === "Ethereum" && (
              <Text style={styles.amtTxt}>
                {item?.coinFullName === "Ethereum"
                  ? userBalance[1]?.totalBalance
                  : "0"}
              </Text>
            )}
            {item?.coinFullName === "Tether" && (
              <Text style={styles.amtTxt}>
                {item?.coinFullName === "Tether"
                  ? userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            {item?.coinFullName === "Grem" && (
              <Text style={styles.amtTxt}>
                {item?.coinFullName === "Grem"
                  ? userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            {item?.coinFullName === "Gret" && (
              <Text style={styles.amtTxt}>
                {item?.coinFullName === "Gret"
                  ? userBalance[0]?.totalBalance
                  : "0"}
              </Text>
            )}
            <Text style={styles.balanceTxt}>{item?.coinFullName}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  function renderHeader() {
    return (
      <View style={styles.headerParent}>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={styles.drawerView}
        >
          <Image source={ImagePath.DRAWER} style={styles.drawerImg} />
        </TouchableOpacity>
        <View style={styles.nameView}>
          <Text style={styles.morningTxt}>Good morning</Text>
          <Text style={styles.nameTxt}>Mohd !</Text>
        </View>
        <TouchableOpacity style={styles.bellView}>
          <Image source={ImagePath.BELL} style={styles.bellImg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
          style={styles.profileView}
        >
          <Image source={ImagePath.PROFILE} style={styles.drawerImg} />
        </TouchableOpacity>
      </View>
    );
  }

  // Coins list
  const renderFlatListDetail = (item) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("TransactionDetails")}
          style={styles.mainView}
        >
          <View style={styles.imgView}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.fltImg}
            ></Image>
          </View>
          <View style={styles.amtView}>
            <Text style={styles.tokennametxt}>{item.status}</Text>
            <View style={styles.detailView}>
              <Text style={styles.amountTxt}>Amount</Text>
              <Text style={styles.valuetxt}>{item.xrp}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.borderDrawer}></View>
      </View>
    );
  };

  // Withdraw list
  const renderWithdrawDetail = (item) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("TransactionDetails", {
              transactionDetails: item,
              coinImage: coinList,
            })
          }
          style={styles.withdrawList}
        >
          <View style={styles.flatLisImgView}>
            {item?.txnType === "REDEEM" && (
              <Image
                source={ImagePath.DOWN_ARROW}
                resizeMode="contain"
                style={{ height: height * 0.1, width: width * 0.1 }}
              />
            )}

            {item?.txnType === "BUY" && (
              <Image
                source={ImagePath.UP_ARROW}
                resizeMode="contain"
                style={{ height: height * 0.1, width: width * 0.1 }}
              />
            )}

            {item?.txnType === "DEPOSIT" && (
              <Image
                source={ImagePath.DOWN_ARROW}
                resizeMode="contain"
                style={{ height: height * 0.1, width: width * 0.1 }}
              />
            )}

            {item?.txnType === "WITHDRAW" && (
              <Image
                source={ImagePath.DOWN_ARROW}
                resizeMode="contain"
                style={{ height: height * 0.1, width: width * 0.1 }}
              />
            )}

            {item?.txnType === "DIVIDENED" && (
              <Image
                source={ImagePath.DOWN_ARROW}
                resizeMode="contain"
                style={{ height: height * 0.1, width: width * 0.1 }}
              />
            )}
          </View>

          <View style={styles.tokenView}>
            <View style={{ width: width * 0.22 }}>
              <Text numberOfLines={1} style={styles.tokenNameTxt}>
                {item?.txnType}
              </Text>
            </View>
            <View style={styles.withdrawAmt}>
              <Text style={styles.titleTxt}>Amount</Text>
              <Text style={styles.xrpTxt}>
                {item?.amount ? item?.amount : "0"}
              </Text>
            </View>
          </View>
          <View style={styles.statusView}>
            <Text style={styles.dateTxt}>
              {moment(item?.txnTime).format("DD-MM-YYYY HH:MM")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.statusTxt}>Status :</Text>
              <Text
                style={[
                  styles.sucessTxt,
                  {
                    color:
                      item?.status === "SUCCESS" || item?.status === "CONFIRM"
                        ? "green"
                        : "red",
                  },
                ]}
              >
                {item?.status}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.borderDrawer}></View>
      </View>
    );
  };

  function renderSlider() {
    return (
      <View style={styles.sliderView}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={coinList}
          showSkipButton={false}
          showDoneButton={false}
          showNextButton={false}
          dotStyle={{
            backgroundColor: "#ABBEDE",
            marginTop: -height * 0.0001,
          }}
          activeDotStyle={{
            backgroundColor: "#244273",
            marginTop: -height * 0.0001,
          }}
        />
      </View>
    );
  }

  function renderList() {
    return (
      <View style={styles.scrollStyle}>
        <View style={styles.transView}>
          <Text style={styles.transTxt}>Transaction History</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("TransactionHistory", {
                coinImage: coinList,
              })
            }
          >
            <Text style={styles.viewAllTxt}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderDrawer}></View>
        {/* <FlatList
          data={DATA}
          nestedScrollEnabled={true}
          renderItem={({ item }) => renderFlatListDetail(item)}
        /> */}

        <View style={styles.borderDrawer}></View>
        <FlatList
          data={transactionsHistoryList}
          nestedScrollEnabled={true}
          contentContainerStyle={{
            paddingBottom: height * 0.22,
          }}
          renderItem={({ item }) => renderWithdrawDetail(item)}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.mainContainer}
      >
        {renderHeader()}
        {renderSlider()}
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <ScrollView>{renderList()}</ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  headerParent: {
    height: height * 0.12,
    width: width * 1,
    alignItems: "center",
    flexDirection: "row",
    paddingRight: width * 0.04,
    // backgroundColor: "red"
  },
  withdrawAmt: {
    height: height * 0.05,
    width: width * 0.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tokennametxt: {
    fontSize: height / 44,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  titleTxt: {
    fontSize: height / 100,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  flatLisImgView: {
    flexDirection: "row",
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "flex-start",
    width: width * 0.15,
  },
  tokenView: {
    flexDirection: "row",
    height: height * 0.06,
    paddingVertical: height * 0.01,
    marginLeft: width * 0.03,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.4,
  },
  xrpTxt: {
    fontSize: height / 65,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  withdrawList: {
    width: width * 0.9,
    flexDirection: "row",
    height: height * 0.08,
    alignItems: "center",
    alignSelf: "center",
  },
  tokenNameTxt: {
    fontSize: height / 53,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Medium",
  },
  statusView: {
    // backgroundColor: "pink",
    height: height * 0.05,
    width: width * 0.3,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  dateTxt: {
    fontSize: height / 90,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  amtView: {
    flexDirection: "row",
    height: height * 0.05,
    marginLeft: width * 0.03,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.7,
  },
  amountTxt: {
    fontSize: height / 70,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  sucessTxt: {
    fontSize: height / 90,
    color: COLOR.GREEN,
    fontFamily: "Poppins-Regular",
  },
  detailView: {
    height: height * 0.05,
    width: width * 0.2,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  mainView: {
    width: width * 0.9,
    justifyContent: "center",
    flexDirection: "row",
    height: height * 0.08,
    alignItems: "center",
    alignSelf: "center",
  },
  statusTxt: {
    fontSize: height / 90,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  fltImg: {
    height: height * 0.1,
    width: width * 0.1,
  },
  valuetxt: {
    fontSize: height / 58,
    color: "black",
    fontFamily: "Poppins-SemiBold",
  },
  imgView: {
    flexDirection: "row",
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "flex-start",
    width: width * 0.15,
  },
  amountView: {
    // backgroundColor: "blue",
    height: height * 0.08,
    width: width * 1,
    alignItems: "center",
  },
  transView: {
    // backgroundColor: "red",
    height: height * 0.085,
    width: width * 0.88,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.01,
  },
  mainContainer: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: "yellow",
  },
  sliderView: {
    height: height * 0.3,
    width: width * 1,
    // backgroundColor: "yellow",
    resizeMode: "cover",
  },
  drawerImg: {
    height: height * 0.06,
    width: width * 0.06,
    resizeMode: "contain",
  },
  borderDrawer: {
    height: height * 0.005,
    width: width * 1,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
  },
  bellImg: {
    height: height * 0.06,
    width: width * 0.06,
    resizeMode: "contain",
  },
  scrollStyle: {
    backgroundColor: "white",
    height: height * 1,
    width: width * 1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  balanceTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 70,
    color: COLOR.BALANCETXT,
  },
  amtTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 35,
    color: "black",
  },
  transTxt: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 45,
    color: "black",
  },
  viewAllTxt: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 62,
    color: COLOR.BUTTONCOLOR,
    textDecorationLine: "underline",
  },
  drawerView: {
    // backgroundColor: "yellow",
    height: height * 0.1,
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    height: height * 1,
    width: width * 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "yellow",
  },
  iconView: {
    // backgroundColor: "white",
    height: height * 0.09,
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center",
  },
  iconInsideView: {
    // backgroundColor: "yellow",
    height: height * 0.09,
    width: width * 0.32,
    alignItems: "center",
    justifyContent: "center",
  },
  nameView: {
    // backgroundColor: "green",
    height: height * 0.05,
    width: width * 0.5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bellView: {
    // backgroundColor: "lightblue",
    height: height * 0.1,
    width: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  balnceView: {
    // backgroundColor: "green",
    height: height * 0.06,
    width: width * 0.35,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  morningTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 60,
    color: "black",
    alignSelf: "flex-start",
  },
  nameTxt: {
    fontFamily: "Poppins-Bold",
    fontSize: height / 50,
    color: COLOR.BUTTONCOLOR,
    alignSelf: "flex-start",
  },
  profileView: {
    // backgroundColor: "lightpink",
    height: height * 0.1,
    width: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
});
