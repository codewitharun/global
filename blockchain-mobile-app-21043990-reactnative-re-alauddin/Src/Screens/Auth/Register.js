import {
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import { CountryCode } from "../../utils/CountryCode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../../Components/AuthInput";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SignUpUrl } from "../../RestApi/ApiConfig";
import axios from "axios";
import Header from "../../Components/Header";
import { showMessage } from "react-native-flash-message";
import moment from "moment";
const { height, width } = Dimensions.get("screen");

const Register = (props) => {
  // ************ Country Code States Starts Here ************
  // ************* step 1 ***************
  const [isLoading, setIsLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState(null);
  const [date, setDate] = useState("DOB");
  const [LastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [Phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(null);
  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);
  const [Address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState(null);
  const [errorCountry, setErrorCountry] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [errorCity, setErrorCity] = useState(null);
  const [errorZip, setErrorZip] = useState(null);
  const [errorDate, setErrorDate] = useState(null);
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [City, setCity] = useState("");
  const [Zip, setZip] = useState("");
  const [Dob, setDob] = useState("");

  // ************* step 2 ***************

  const _validateFirstName = (fname) => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == "" || fname == undefined || fname == null) {
      setErrorFirstName("*Please enter first name.");
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName("*Please enter valid first name.");
    } else {
      setErrorFirstName(null);
    }
  };

  const _validateCountry = (value) => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (value == "" || value == undefined || value == null) {
      setErrorCountry("*Please enter Country name.");
    } else if (!fnameRegex.test(value)) {
      setErrorCountry("*Please enter valid Country name.");
    } else {
      setErrorCountry(null);
    }
  };

  const _validateState = (value) => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (value == "" || value == undefined || value == null) {
      setErrorState("*Please enter State name.");
    } else if (!fnameRegex.test(value)) {
      setErrorState("*Please enter valid State name.");
    } else {
      setErrorState(null);
    }
  };

  const _validateCity = (value) => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (value == "" || value == undefined || value == null) {
      setErrorCity("*Please enter City name.");
    } else if (!fnameRegex.test(value)) {
      setErrorCity("*Please enter valid City name.");
    } else {
      setErrorCity(null);
    }
  };

  const _validateLastName = (lname) => {
    var lnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (lname == "" || lname == undefined || lname == null) {
      setErrorLastName("*Please enter last  name.");
    } else if (!lnameRegex.test(lname)) {
      setErrorLastName("*Please enter valid last name.");
    } else {
      setErrorLastName(null);
    }
  };

  const _emailvalidate = (mail) => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (mail === "") {
      setErrorEmail("*Please enter email.");
    } else if (!emailRegex.test(mail)) {
      setErrorEmail("*Please enter valid email.");
    } else {
      setErrorEmail(null);
    }
  };

  const _ZipValidate = (Phone) => {
    var PhoneRegex = /^([0-9]){6,6}$/;
    if (Phone === "") {
      setErrorZip("*Please enter Zip Code.");
    } else if (!PhoneRegex.test(Phone)) {
      setErrorZip("*Please enter valid Zip Code.");
    } else {
      setErrorZip(null);
    }
  };

  const _Phonevalidate = (Phone) => {
    var PhoneRegex = /^([0-9]){10,14}$/;
    if (Phone === "") {
      setErrorPhone("*Please enter Phone Number.");
    } else if (!PhoneRegex.test(Phone)) {
      setErrorPhone("*Please enter valid Phone Number.");
    } else {
      setErrorPhone(null);
    }
  };

  const _passwordvalidate = (pass) => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pass === "") {
      setErrorPassword("*Please enter password.");
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        "*Please enter a special character and length must be 8 digit."
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword("*Please enter valid password.");
    } else {
      setErrorPassword(null);
    }
  };

  const _validateAddress = (address) => {
    var addressRegex = /^[a-z A-Z-, ]{2,32}$/i;
    if (address == "" || address == undefined || address == null) {
      setErrorAddress("*Please enter address.");
    } else if (!addressRegex.test(address)) {
      setErrorAddress("*Please enter valid address.");
    } else {
      setErrorAddress(null);
    }
  };

  // ************* step 3 ***************

  const validate = () => {
    let flag = true;

    if (FirstName === "") {
      setErrorFirstName("*Please enter First Name.");
      flag = false;
    }

    if (LastName === "") {
      setErrorLastName("*Please enter Last Name.");
      flag = false;
    }

    if (Email === "") {
      setErrorEmail("*Please enter email.");
      flag = false;
    }
    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }
    if (Phone === "") {
      setErrorPhone("*Please enter Phone Number.");
      flag = false;
    }
    if (Address === "") {
      setErrorAddress("*Please enter Address.");
      flag = false;
    }
    if (Country === "") {
      setErrorCountry("*Please enter Country.");
      flag = false;
    }
    if (State === "") {
      setErrorState("*Please enter State.");
      flag = false;
    }
    if (City === "") {
      setErrorCity("*Please enter City.");
      flag = false;
    }
    if (Zip === "") {
      setErrorZip("*Please enter Zip.");
      flag = false;
    }
    if (date === "DOB") {
      setErrorDate("*Please enter DOB.");
      flag = false;
    }

    return flag;
  };

  // ************ step 4 ************

  const onSubmit = () => {
    if (validate()) {
      SignUpAPi();
    } else {
      alert("Mandatory field is required");
      // setModalVisible(!modalVisible);
    }
  };

  // ************ Country Code States End Here ************

  const [hidepass, setHidePass] = useState(false);
  const [check, setCheck] = useState(false);

  // ************ Country Code States Starts Here ************
  const [filterdata, setFilterdata] = useState("");
  const [countryImage, setCountryImage] = useState();
  const [contrymodal, setcontrymodal] = useState(false);
  const [code, setCode] = React.useState("+91");
  const [isText, setIsText] = React.useState("");
  // ************ Country Code States Ends Here ************

  // ************ Country Code Search Functions ************
  const SeacrFunct = (value) => {
    if (value !== "") {
      // console.log("countryCode----", CountryCode);
      let mydata = CountryCode.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilterdata(mydata);
      setIsText(value);
    }
  };

  // ************ Country Code Render Item ************
  const renderItem = ({ item }) => (
    <Item name={item.label} dialCode={item.value} icon={item.icon} />
  );

  // ************ Country Code Item Functions ************
  const Item = ({ name, dialCode, icon }) => (
    <TouchableOpacity
      key={String(name)}
      onPress={() => {
        setCode(dialCode);
        setCountryImage(icon);
        setcontrymodal(!contrymodal);
      }}
    >
      <View style={styles.item}>
        <Image source={icon} style={styles.image2} resizeMode="cover" />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.dialcodeText}>{dialCode}</Text>
      </View>
    </TouchableOpacity>
  );

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", moment(date).format("MM-DD-YYYY"));
    setDate(moment(date).format("MM-DD-YYYY"));
    setPhone(code + Phone);
    hideDatePicker();
  };

  // ************* SignUp API ***************
  const SignUpAPi = () => {
    const DATA = {
      address: Address,
      city: City,
      country: Country,
      countryCode: code,
      dob: date,
      email: Email,
      firstName: FirstName,
      lastName: LastName,
      password: Password,
      phoneNo: Phone,
      roleStatus: "USER",
      state: State,
      zipCode: Zip,
    };

    setIsLoading(true);
    axios({
      method: "post",
      url: SignUpUrl,
      data: DATA,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("@@@ SinUp API Response ======>", response);
        showMessage({
          message: response?.data?.message,
          type: "success",
          icon: "success",
          textStyle: {
            fontSize: height / 55,
          },
          style: {
            width: Platform.OS === "android" ? width * 0.92 : null,
            borderRadius: Platform.OS === "android" ? 5 : null,
            margin: Platform.OS === "android" ? 15 : null,
            alignItems: Platform.OS === "android" ? "center" : null,
          },
        });
        props.navigation.navigate("SignUpVerify", { email: Email });
        setIsLoading(true);
      })
      .catch((err) => {
        console.log("@@@ Signup APi Error ======>", err.response);
        setIsLoading(true);
      });
  };

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={contrymodal}
          onRequestClose={() => {
            setcontrymodal(!contrymodal);
          }}
        >
          <View style={styles.MainModalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.ModalSecondContainer}>
                <View style={styles.searchView}>
                  <TextInput
                    value={filterdata}
                    style={styles.searchInput}
                    placeholder="Search country name"
                    onChangeText={(text) => {
                      setIsText(text);
                      SeacrFunct(text);
                    }}
                    placeholderTextColor="#9796A8"
                  />
                </View>

                <View style={{ height: "80%", width: width }}>
                  <FlatList
                    data={filterdata ? filterdata : CountryCode}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                  />
                </View>
                <View style={styles.ModalThirdContainer}></View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={contrymodal}
          onRequestClose={() => {
            setcontrymodal(!contrymodal);
          }}
        >
          <View style={styles.MainModalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.ModalSecondContainer}>
                <View style={styles.searchView}>
                  <TextInput
                    value={filterdata}
                    style={styles.searchInput}
                    placeholder="Search country name"
                    onChangeText={(text) => {
                      setIsText(text);
                      SeacrFunct(text);
                    }}
                    placeholderTextColor="#9796A8"
                  />
                </View>

                <View style={{ height: "80%", width: width }}>
                  <FlatList
                    data={filterdata ? filterdata : CountryCode}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                  />
                </View>
                <View style={styles.ModalThirdContainer}></View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.inputView}>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your first name"}
              keyboardType="default"
              maxLength={30}
              autoCorrect={false}
              onChangeText={(txt) => {
                setFirstName(txt), _validateFirstName(txt);
              }}
            />
            {errorFirstName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorFirstName}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your last name"}
              keyboardType="default"
              maxLength={30}
              autoCorrect={false}
              onChangeText={(txt) => {
                setLastName(txt), _validateLastName(txt);
              }}
            />

            {errorLastName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorLastName}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your email address"}
              onChangeText={(txt) => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />

            {errorEmail != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorEmail}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "pink",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              separator={true}
              CountryCode={true}
              countryCode={code}
              leftIconPress={() => setcontrymodal(true)}
              countryImage={
                countryImage
                  ? countryImage
                  : require("../../assets/Images/flag.png")
              }
              placeholder={"Enter your phone number"}
              keyboardType={"numeric"}
              returnKeyType="done"
              onChangeText={(txt) => {
                setPhone(txt), _Phonevalidate(txt);
              }}
            />

            {errorPhone != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorPhone}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your address"}
              onChangeText={(txt) => {
                setAddress(txt), _validateAddress(txt);
              }}
            />

            {errorAddress != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorAddress}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your country"}
              onChangeText={(txt) => {
                setCountry(txt), _validateCountry(txt);
              }}
            />

            {errorCountry != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorCountry}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your state"}
              onChangeText={(txt) => {
                setState(txt), _validateState(txt);
              }}
            />

            {errorState != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorState}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your city"}
              onChangeText={(txt) => {
                setCity(txt), _validateCity(txt);
              }}
            />

            {errorCity != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorCity}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              keyboardType="number-pad"
              placeholder={"Enter your zip code"}
              onChangeText={(txt) => {
                setZip(txt), _ZipValidate(txt);
              }}
            />

            {errorZip != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                  // backgroundColor: "grey"
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorZip}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setDatePickerVisibility(true)}
              style={{
                // top: height * 0.01,
                borderRadius: 10,
                backgroundColor: COLOR.TXT_INPUT,
                padding: 20,
                flexDirection: "row",
                // alignItems: "center",
                height: height * 0.075,
                width: width * 0.9,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: height / 64,
                  color: COLOR.BUTTONCOLOR,
                }}
              >
                {date}
              </Text>
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
            minimumDate={new Date("1970-01-01")}
          />
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Password"}
              RightIcon={true}
              secureTextEntry={hidepass}
              rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
              rightPress={() => setHidePass(hidepass ? false : true)}
              onChangeText={(txt) => {
                setPassword(txt), _passwordvalidate(txt);
              }}
            />

            {errorPassword != null ? (
              <View
                style={{
                  height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorPassword}
                </Text>
              </View>
            ) : null}
          </View>
        </View>

        <View
          style={{
            marginTop: height * 0.03,
            alignItems: "center",
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: height * 0.045,
              width: width * 0.6,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {check ? (
              <TouchableOpacity onPress={() => setCheck(false)}>
                <Image
                  source={ImagePath.CHECK}
                  resizeMode="contain"
                  style={{ height: height * 0.05, width: width * 0.05 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setCheck(true)}
                style={{
                  height: height * 0.025,
                  width: width * 0.05,
                  backgroundColor: check ? COLOR.BUTTONCOLOR : COLOR.CHECK,
                }}
              ></TouchableOpacity>
            )}
            <View
              style={{
                height: height * 0.045,
                width: width * 0.5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: height / 78,
                  color: COLOR.REMEBERTEXT,
                }}
              >
                I agree to{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: height / 78,
                    color: COLOR.BUTTONCOLOR,
                  }}
                >
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            // marginTop: height * 0.0,
            height: height * 0.1,
            width: width * 1,
            justifyContent: "space-around",
            alignItems: "center",
            // backgroundColor: "aqua",
          }}
        >
          <CustomButton
            title={
              isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                "Register"
              )
            }
            ButtonPress={() => onSubmit()}
          />
        </View>

        <View
          style={{
            height: height * 0.045,
            alignSelf: "center",
            // position: "absolute",
            // bottom: height * 0.1,
            width: width * 0.5,
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: height / 78,
              color: COLOR.REMEBERTEXT,
            }}
          >
            Already have an account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 78,
                color: COLOR.BUTTONCOLOR,
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
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
        <Header title={"Register"} />
        {renderModal()}
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <ScrollView>{renderQr()}</ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1.5, // 1.2
    // flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  inputView: {
    height: height * 1.08,
    width: width * 1,
    // backgroundColor: "yellow",
    marginTop: height * 0.08,
    alignItems: "center",
    justifyContent: "space-around",
  },
  // *******Date picker style******//
  ModalSecondContainer: {
    height: height * 0.5,
    width: width * 0.93,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  MainModalContainer: {
    height: height * 1,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  searchView: {
    height: "12%",
    width: width / 1.2,
    // marginVertical: "5%",
    // marginHorizontal: '7%',
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    borderBottomWidth: 0.9,
    borderColor: "#CFD2D8",
    fontSize: height / 50,
    fontWeight: "600",
    color: "black",
    txtStyle: {
      fontWeight: "400",
      fontSize: height / 55,
      color: "black",
    },
  },

  item: {
    // marginHorizontal: '10%',
    marginVertical: "3%",
    // justifyContent: 'center',
    // width: width / 1.1,
    width: width / 1.3,
    alignSelf: "center",
    flexDirection: "row",
  },

  image2: {
    height: height * 0.03,
    width: width * 0.07,
  },

  nameText: {
    fontSize: height / 50,
    alignSelf: "center",
    marginLeft: 15,
    color: "grey",
    width: width / 1.7,
  },
  dialcodeText: {
    fontSize: height / 50,
    alignSelf: "center",
    marginLeft: height / 70,
    color: "grey",
  },
});
