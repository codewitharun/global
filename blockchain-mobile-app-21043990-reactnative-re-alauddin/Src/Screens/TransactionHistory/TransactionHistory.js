import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ImagePath } from "../../utils/ImagePath";
import Header from "../../Components/Header";
import moment from "moment";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR } from "../../utils/Color";
const { height, width } = Dimensions.get("screen");

const TransactionHistory = (props) => {
  const [coinImage, setCoinImage] = useState(props?.route?.params?.coinImage);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionsHistoryList, setTransactionsHistoryList] = useState([]);
  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState(10);

  useEffect(() => {
    GetAllTransactionsApi();
  }, [page]);

  // ****** All Transactions Api ******
  const GetAllTransactionsApi = async () => {
    const Token = await AsyncStorage.getItem("token");
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://java-blockchainapp.mobiloitte.org/wallet/get-all-transaction-history?page=${page}&pageSize=${pageData}`,
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(async (response) => {
        if (response?.data?.status === 200) {
          console.log("==== Transaction History Response ====", response);
          // setTransactionsHistoryList(response?.data?.data?.resultlist);
          setTransactionsHistoryList([
            ...transactionsHistoryList,
            ...response?.data?.data?.resultlist,
          ]);
          setIsLoading(false);
        } else {
          alert("Something went wrong.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("===== Transactions History Catch Error ======", err);

        setIsLoading(false);
      });
  };

  const renderWithdrawDetail = (item) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("TransactionDetails", {
              transactionDetails: item,
              coinImage: coinImage,
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

            {item?.txnType === "SELL" && (
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
              <Text style={styles.statusTxt}>Status : </Text>
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

  const renderLoader = () => {
    return isLoading ? (
      <View
        style={{
          height: height * 0.07,
          marginBottom: height * 0.02,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    return setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Header
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          title={"Transaction History"}
          leftPress={() => props.navigation.goBack()}
        />
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={transactionsHistoryList}
            nestedScrollEnabled={true}
            contentContainerStyle={{ paddingBottom: height * 0.22 }}
            renderItem={({ item }) => renderWithdrawDetail(item)}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  withdrawList: {
    width: width * 0.9,
    flexDirection: "row",
    height: height * 0.08,
    alignItems: "center",
    alignSelf: "center",
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
  tokenNameTxt: {
    fontSize: height / 53,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Medium",
  },
  withdrawAmt: {
    height: height * 0.05,
    width: width * 0.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleTxt: {
    fontSize: height / 100,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  xrpTxt: {
    fontSize: height / 65,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
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
  statusTxt: {
    fontSize: height / 70,
    color: COLOR.TOKEN_COLOR,
    fontFamily: "Poppins-Regular",
  },
  borderDrawer: {
    height: height * 0.005,
    width: width * 1,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
  },
});
