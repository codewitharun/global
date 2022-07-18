import {
  StyleSheet,
  FlatList,
  Modal,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { ImagePath } from "../../utils/ImagePath";
import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import Header from "../../Components/Header";
import CustomButton from "../../Components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { BuyTokenUrl, CoinListUrl } from "../../RestApi/ApiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../Components/CustomInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

const BuySell = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loaderBuy, setLoaderBuy] = useState(false);
  const [buy, setBuy] = useState("Buy");
  const [cmcPrice, setCmcPrice] = useState("Buy");
  const [buyToken, setBuyToken] = useState("");
  const [buyTokenPrice, setBuyTokenPrice] = useState("");
  const [sellTokenPrice, setSellTokenPrice] = useState("");
  const [availableBal, setAvailBal] = useState("");
  const [buyTokenExchange, setBuyTokenExchange] = useState("");
  const [sellToken, setSellToken] = useState("GREM");
  const [sellTokenChange, setSellTokenChange] = useState("GREM");
  const [amount, setAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [indexItem, setIndex] = useState("");
  const [price, setPrice] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalSell, setModalSell] = useState(false);
  const [modalSellChange, setModalSellChange] = useState(false);
  const [coinList, setCoinList] = useState([]);
  const [userBalance, setUserBalance] = useState([]);
  const [errorEmail, setErrorEmail] = useState("");
  const [disable, setDisable] = useState(false);
  const [errorEmailBuy, setErrorEmailBuy] = useState("");
  const [disableBuy, setDisableBuy] = useState(false);

  useEffect(() => {
    GetToken()
    CoinList()
  }, [])

  //  ========== GetToken Third Party API ========== //
  const GetToken = () => {
    axios({
      method: "GET",
      // url: "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin,tether,ethereum",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=27&page=1&sparkline=false&price_change_percentage=1h%2C%2024h",
      // headers: { "X-CMC_PRO_API_KEY": "5c0ba086-7936-428a-b99e-efd78a712206" },
    }).then(async (res) => {
      console.log("@@@ Response ====>", res)
      const results = res?.data?.slice(0, 3)

      // const tempData = Object.values(res.data.data).map((item) => {
      //   return { [item.symbol]: item.quote.USD.price }
      // })
      console.log("@@@ Response Resullts ====>", results)
      setCmcPrice(results)
    }).catch(async (err) => {
      console.log("@@@ Errror ===>", err)
    })
  }

  //  ========== CoinLIst Balance API ========== //
  const CoinList = async () => {
    setLoaderBuy(true)
    const Value = await AsyncStorage.getItem("token")
    console.log("@@@ Token ====>", Value)
    axios({
      method: "GET",
      url: CoinListUrl,
      headers: {
        Authorization: `Bearer ${Value}`,
        "Content-Type": "application/json"
      }
    }).then(async (res) => {
      console.log("@@@ Response CoinList =====>", res)
      setCoinList(res?.data?.data?.coinList)
      setUserBalance(res?.data?.data?.userBalance)
      setLoaderBuy(false)
    }).catch(async (err) => {
      console.log("@@@ Error ======>", err)
      setLoaderBuy(false)
    })
  }

  // ========== Buy Token ========== //
  const BuyToken = async () => {
    setIsLoading(true)
    const Value = await AsyncStorage.getItem("token")
    console.log("@@@ Data =====>", Value, amount, price, buyToken, buyTokenExchange)
    axios({
      method: "POST",
      url: `https://java-blockchainapp.mobiloitte.org/wallet/wallet/buy-token?coinName=${buyToken}&tokenName=${buyTokenExchange}`,
      headers: {
        Authorization: `Bearer ${Value}`,
        "Content-Type": "application/json"
      },
      data: {
        coinQuantity: amount,
        icoAmount: price
      },
    }).then(async (res) => {
      console.log("@@@ BuyToken Response ====>", res)
      if (res.data.status === 202) {
        alert("Insufficient balance")
        setIsLoading(false)
      } else {
        // props.navigation.navigate("TransactionDetails")
        alert("Purchased Successful")
        setIsLoading(false)
      }
    }).catch(async (err) => {
      console.log("@@@ BuyToken Error ===>", err)
      alert("Something went wrong")
      setIsLoading(false)
    })

  }

  // ========== Sell Token ========== //
  const sellTokenAPI = async () => {
    setLoader(true)
    const Value = await AsyncStorage.getItem("token")
    console.log("@@@ Data =====>", Value, amount, price, buyToken, buyTokenExchange)
    axios({
      method: "POST",
      url: `https://java-blockchainapp.mobiloitte.org/wallet/wallet/sell-token?coinName=${sellToken}&tokenName=${sellTokenChange}`,
      headers: {
        Authorization: `Bearer ${Value}`,
        "Content-Type": "application/json"
      },
      data: {
        coinQuantity: sellAmount,
        icoAmount: sellTokenPrice
      },
    }).then(async (res) => {
      console.log("@@@ sellTokenAPI Response ====>", res)
      // props.navigation.navigate("TransactionDetails")
      alert("Sold !!!!")
      setLoader(false)
    }).catch(async (err) => {
      console.log("@@@ sellTokenAPI Error ===>", err)
      alert("Something Went Wrong")
      setLoader(false)
    })
  }

  const renderFlatListDetail = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBuyToken(item?.coinShortName), setAmount(""), setPrice(""), setBuyTokenPrice(item?.marketPriceInUsd), setModalVisible(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item?.coinShortName}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };

  const renderBuydetails = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBuyTokenExchange(item?.instrument), setPrice(""), setAmount(""), setIndex(index), setModal(false), setAvailBal(item?.totalBalance)
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item?.instrument}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };

  const renderSellDetail = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellToken(item?.coinShortName), setSellAmount(""), setSellTokenPrice(item?.marketPriceInUsd), setModalSell(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item?.coinShortName}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };

  const renderSellExchnage = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellTokenChange(item?.instrument), setSellAmount(""), setModalSellChange(false), setAvailBal(item?.totalBalance)
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item?.instrument}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)} style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={coinList}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderFlatListDetail(item)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  function renderModalChange() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <TouchableWithoutFeedback onPress={() => setModal(false)} style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={userBalance}
                nestedScrollEnabled={true}
                renderItem={({ item, index }) => renderBuydetails(item, index)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  function renderModalSell() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modalSell}>
          <TouchableWithoutFeedback onPress={() => setModalSell(false)} style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={coinList}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderSellDetail(item)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  function renderModalSellChange() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalSellChange}
        >
          <TouchableWithoutFeedback onPress={() => setModalSellChange(false)} style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={userBalance}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderSellExchnage(item)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  const onCalculate = (txt) => {
    let temp = 0;
    if (buyToken === buyTokenExchange) {
      alert("Token and coin can't be same")
    } else {
      if (txt != "") {
        if (buyTokenExchange == "GREM" || buyTokenExchange == "GRET") {
          temp = (txt * buyTokenPrice) / availableBal
          setPrice(temp)
        } else {
          if (buyTokenExchange == "BTC") {
            temp = (txt * buyTokenPrice) / cmcPrice[0]?.current_price
            setPrice(temp)
          } else if (buyTokenExchange == "ETH") {
            temp = (txt * buyTokenPrice) / cmcPrice[1]?.current_price
            setPrice(temp)
          } else if (buyTokenExchange == "USDT") {
            temp = (txt * buyTokenPrice) / cmcPrice[2]?.current_price
            setPrice(temp)
          }
        }
      }
    }
  }

  const validateAmount = (txt) => {
    console.log("@@@ Txt ====>", txt <= 0)
    if (txt === "") {
      setErrorEmail("*Please enter Amount.");
      setDisable(true)
    } else if (txt <= 0) {
      setErrorEmail("*Please enter amount greater than zero.");
      setDisable(true)
    } else {
      setErrorEmail(null);
      setDisable(false)
    }
  };

  const validateAmountBuy = (txt) => {
    console.log("@@@ Txt ====>", txt <= 0)
    if (txt === "") {
      setErrorEmailBuy("*Please enter Amount.");
      setDisableBuy(true)
    } else if (txt <= 0) {
      setErrorEmailBuy("*Please enter amount greater than zero.");
      setDisableBuy(true)
    } else {
      setErrorEmailBuy(null);
      setDisableBuy(false)
    }
  };

  const onCalculateSell = (txt) => {
    console.log("@@@ ======", sellTokenPrice, cmcPrice, availableBal, txt)
    let temp = 0;
    if (sellToken === sellTokenChange) {
      alert("Token and coin can't be same")
    } else {
      if (txt != "") {
        if (sellTokenChange == "GREM" || sellTokenChange == "GRET") {
          temp = (txt * sellTokenPrice) / availableBal
          setSellTokenPrice(temp)
        } else {
          if (sellTokenChange == "BTC") {
            temp = (txt * sellTokenPrice) / cmcPrice[0]?.current_price
            setSellTokenPrice(temp)
          } else if (sellTokenChange == "ETH") {
            temp = (txt * sellTokenPrice) / cmcPrice[1]?.current_price
            setSellTokenPrice(temp)
          } else if (sellTokenChange == "USDT") {
            temp = (txt * sellTokenPrice) / cmcPrice[2]?.current_price
            setSellTokenPrice(temp)
          }
        }
      }
    }
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.tabParent}>
          {buy === "Buy" ? (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Buy")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Sell")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Sell</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Buy")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Sell")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.TABBACK : COLOR.BUTTONCOLOR,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Sell</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {buy === "Buy" ? (
          loaderBuy ? (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#244273" />
            </View>
          ) :
            <View>
              <View style={styles.personalView}>
                <Text style={styles.personalTxt}>Buy</Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.issueCounty}
              >
                <Text style={styles.gremtxt}>{buyToken}</Text>
                <Image
                  source={ImagePath.DOWN}
                  resizeMode="contain"
                  style={{ height: height * 0.05, width: width * 0.05 }}
                />
              </TouchableOpacity>
              <View style={styles.forView}>
                <Text style={styles.forTxt}>For</Text>
              </View>
              <TouchableOpacity
                onPress={() => setModal(true)}
                style={styles.btcDropdown}
              >
                <Text style={styles.gremtxt}>{buyTokenExchange}</Text>
                <Image
                  source={ImagePath.DOWN}
                  resizeMode="contain"
                  style={{ height: height * 0.05, width: width * 0.05 }}
                />
              </TouchableOpacity>
              <View style={{ justifyContent: "center", height: height * 0.07, width: width * 0.9, alignSelf: "center" }}>
                <Text style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: height / 55,
                  color: "black",
                }}>Available Balance : {availableBal}</Text>
              </View>
              <View style={{ justifyContent: "center", height: height * 0.15, width: width * 0.9, alignSelf: "center" }}>
                <Text style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: height / 55,
                  color: "black",
                }}>Amount</Text>
                <CustomInput
                  value={amount}
                  placeholder="Amount"
                  keyboardType="number-pad"
                  onChangeText={(txt) => {
                    setAmount(txt), onCalculate(txt), validateAmountBuy(txt)
                  }}
                />
              </View>
              <View style={{ height: height * 0.03, width: width * 0.9 }}>
                {errorEmailBuy !== null ? (
                  <View
                    style={{
                      height: height * 0.03,
                      width: "90%",
                      alignSelf: "center",
                      // backgroundColor: "green",
                    }}
                  >
                    <Text style={{ color: "red", fontSize: 12 }}>{errorEmailBuy}</Text>
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.9,
                  alignSelf: "center",
                  // backgroundColor:"green",
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: height / 55,
                    marginVertical: 8,
                  }}
                >
                  You will be receive : {amount} {buyToken}
                </Text>
                <Text style={{ color: "gray", fontSize: height / 55, }}>
                  You will be pay : {parseFloat(price).toFixed(10)}
                </Text>
              </View>
              <View style={styles.buttonView}>
                <CustomButton
                  Disabled={disableBuy}
                  title={
                    isLoading ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      "Buy")
                  }
                  ButtonPress={() =>
                    BuyToken()
                  }
                />
              </View>
            </View>
        ) : (
          <View>
            <View style={styles.personalView}>
              <Text style={styles.personalTxt}>Sell</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalSell(true)}
              style={styles.issueCounty}
            >
              <Text style={styles.gremtxt}>{sellToken}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <View style={styles.forView}>
              <Text style={styles.forTxt}>For</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalSellChange(true)}
              style={styles.btcDropdown}
            >
              <Text style={styles.gremtxt}>{sellTokenChange}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <View style={{ justifyContent: "center", height: height * 0.15, width: width * 0.9, alignSelf: "center" }}>
              <Text style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 55,
                color: "black",
              }}>Amount</Text>
              <CustomInput
                value={sellAmount}
                placeholder="Amount"
                keyboardType="number-pad"
                onChangeText={(txt) => {
                  setSellAmount(txt), onCalculateSell(txt), validateAmount(txt)
                }}
              />
            </View>
            <View style={{ alignSelf: "center", height: height * 0.04, width: width * 0.9 }}>
              {errorEmail !== null ? (
                <View
                  style={{
                    height: height * 0.04,
                    width: "90%",
                    alignSelf: "center",
                    // backgroundColor: "green",
                  }}
                >
                  <Text style={{ color: "red", fontSize: 12 }}>{errorEmail}</Text>
                </View>
              ) : null}
            </View>
            <View
              style={{
                height: height * 0.08,
                width: width * 0.9,
                alignSelf: "center",
                // backgroundColor:"green",
                justifyContent: "flex-end",

              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: height / 55,
                  marginVertical: 8,
                }}
              >
                You will be sell : {sellAmount} {sellToken}
              </Text>
              <Text style={{ color: "gray", fontSize: height / 55, }}>
                You will be receive : {parseFloat(sellTokenPrice).toFixed(10)}
              </Text>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                Disabled={disable}
                title={
                  loader ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    "Sell"
                  )
                }
                ButtonPress={() => sellTokenAPI()}
              />
            </View>
          </View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Header
          title={"Buy & Sell"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.navigate("DashBoard")}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {renderQr()}
        </KeyboardAwareScrollView>
      </ImageBackground>
      {renderModal()}
      {renderModalChange()}
      {renderModalSell()}
      {renderModalSellChange()}
    </SafeAreaView>
  );
};

export default BuySell;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  inputAmt: {
    height: height * 0.08,
    width: width * 0.65,
    // backgroundColor: "red"
  },
  gremtxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 65,
    color: "black",
  },
  container: {
    // flex: 1,
    height: height * 0.5,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  inputGremtxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 65,
    color: "black",
  },
  modalView: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: height / 35,
    backgroundColor: "white",
  },
  buttonView: {
    // backgroundColor: "pink",
    height: height * 0.15,
    width: width * 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  modalParent: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    height: height * 0.001,
    width: width * 0.8,
    backgroundColor: COLOR.MAILTXT,
    alignSelf: "center",
  },
  modalView: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: height / 35,
    backgroundColor: "white",
  },
  getText: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 45,
    color: "black",
  },
  gremRect: {
    height: height * 0.2,
    width: width * 0.8,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  buyText: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 40,
    color: "white",
  },
  tabView: {
    // backgroundColor: "red",
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: COLOR.TABBACK,
    borderRadius: height * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personalView: {
    height: height * 0.05,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  forView: {
    height: height * 0.065,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  personalTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 44,
    color: COLOR.REMEBERTEXT,
  },
  forTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 52,
    color: COLOR.lightGrey,
  },
  issueCounty: {
    borderWidth: 1,
    // borderRadius: 5,
    borderColor: "#ddd",
    // borderBottomWidth: 0,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    // elevation: 3,
    marginTop: height * 0.01,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  btcDropdown: {
    borderWidth: 1,
    // borderRadius: 5,
    borderColor: "#ddd",
    // borderBottomWidth: 0,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    // elevation: 3,
    marginTop: height * 0.001,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inuputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginTop: height * 0.025,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  tabParent: {
    height: height * 0.12,
    width: width * 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
