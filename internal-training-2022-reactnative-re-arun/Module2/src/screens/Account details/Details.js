import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {step1} from 'react-native/Libraries/Animated/Easing';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
const {height, width} = Dimensions.get('window');
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const verticalStaticData = [
  {
    id: 0,
    text: " I agree to receive email updates from Company ",
    textStyle: { textDecorationLine: "none" , fontSize:14,borderWidth: 3,
    borderColor: 'rgb(255,47,187)',},
    fillColor: "rgb(85,175,207)",
    unfillColor: "#ffffff",
    
  },
 
  {
    id: 2,
    text: "I agree to share data form marketing purpose",
    fillColor: "rgb(85,175,207)",
    unfillColor: "#ffffff",
    textStyle: { textDecorationLine: "none", fontSize:14, },
    
  },
];

const Details = ({navigation}) => {
  // *********** Step-1 ***********
  const [email, setEmail] = useState('');

  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(true);
  // Step-2
  const _emailvalidate = email => {
    var Regex1 =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*please enter email,');
    } else if (!Regex1.test(email)) {
      setErrorEmail('*please enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };
  //**For-password */
  const _passwordvalidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('please enter password');
    } else if (!Regex.test(password)) {
      setErrorPassword('password must contain (0-9)(a-z)(A-Z)');
    } else {
      setErrorPassword(null);
    }
  };

  const validate = () => {
    var Regex4 =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Regx2 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    let flag = true;

    if (email === '') {
      setErrorEmail('*please enter email');
      flag = false;
      // return !flag;
    } else if (!Regex4.test(email)) {
      setErrorEmail('*please enter valid email');
      // return !flag;
      flag = false;
    } else {
      setErrorEmail(null);
    }
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('*please enter password');
      // return !flag;
      flag = false;
    } else if (!Regx2.test(password)) {
      setErrorPassword('password must contain (0-9)(a-z)(A-Z)');
      // return !flag;
      flag = false;
    } else setErrorPassword(null);

    return flag;
  };
  const onSubmit = () => {
    if (validate()) {
      validate();
      // alert('Sussessful');
      navigation.navigate('Bitbharat');
    } else {
      alert('Something went wrong');
    }
  };

  const [checkboxState, setCheckboxState] = React.useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return <View></View>;
    }
    return null;
  };
  return (
    <SafeAreaView>
      <View style={styles.maincontiner}>
        <View style={styles.CrossV}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/detais/right.jpeg')}
              style={{height: 50, width: 45}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/BItbharat/cross.jpg')}
              style={{height: 15, width: 15}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgb( 285,300,300)',
              fontWeight: 'bold',
            }}>
            Enter Account Details
          </Text>
        </View>
        <View style={styles.txtEmail}>
          <Text style={{fontSize: 18, color: 'rgb(72,118,147)'}}> Email </Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.042,
              width: width * 0.12,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'red',
              borderRightWidth: 1,
            }}>
            <Image
              source={require('../../assets/images/detais/mail.jpeg')}
              style={{height: 15, width: 25}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={'rgb( 60,104, 133)'}
              // placeholderTextColor={'white'}
              color={'white'}
              keyboardType={'email-address'}
              maxLength={24}
              onChangeText={txt => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />
          </View>
        </View>

        {errorEmail !== null ? (
          <View
            style={{
              height: '3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
          </View>
        ) : null}

        <View style={styles.txtPass}>
          <Text style={{fontSize: 18, color: 'rgb(72,118,147)'}}>Password</Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.042,
              width: width * 0.12,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'red',
              borderRightWidth: 1,
            }}>
            <Image
              source={require('../../assets/images/detais/lock.png')}
              style={{height: 25, width: 28}}
            />
          </View>
          <View style={{width: width * 0.67}}>
            <TextInput
              placeholder="Enter your Password"
              placeholderTextColor={'rgb( 60,104, 133)'}
              // placeholderTextColor={'white'}
              keyboardType="default"
              color={'white'}
              secureTextEntry={passwordVisible == false ? true : false}
              maxLength={16}
              onChangeText={txt => {
                setPassword(txt), _passwordvalidate(txt);
              }}
            />
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(!passwordVisible);
              }}>
              {passwordVisible == true && (
                <Image
                  source={require('../..//assets/images/BItbharat/eye.png')}
                  style={{height: 22, width: 22}}
                />
              )}
              {passwordVisible == false && (
                <Image
                  source={require('../../assets/images/BItbharat/eyeclose.png')}
                  style={{height: 22, width: 22}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {errorPassword !== null ? (
          <View
            style={{
              height: '5%',
              width: '90%',

              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.refferalId}>
          {renderLabel()}
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Referral ID (Optional) ' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.agree}>
          <TouchableOpacity>
            <BouncyCheckboxGroup
              onPress={(isChecked: boolean) => {}}
              data={verticalStaticData}
              // fillColor="rgb(85,175,207)"
              // unfillColor="#FFFFFF"
              // iconStyle={{borderColor: 'blue'}}
             
              style={{ flexDirection: "column" ,height:80, justifyContent:"space-around",}}
            />
          </TouchableOpacity>
          {/* <View style={styles.txtAgree}>
            <Text
              style={{
                color: 'rgb( 72,118,147)',
                paddingLeft: 1,
                fontSize: 12.5,
              }}>
              I agree to receive email updates from Company
            </Text>
          </View> */}
        </View>

        {/* <View style={styles.agree2}>
          <BouncyCheckboxGroup
            size={25}
            isChecked={true}
            fillColor="rgb(85,175,207)"
            unfillColor="#FFFFFF"
            data={verticalStaticData}
            text="I agree to share data form marketing purpose"
            iconStyle={{borderColor: 'blue'}}
            textStyle={{fontSize: 12.5}}
            onPress={(isChecked: boolean) => {}}
          />
   

          <Text style={{color: 'rgb( 72,118,147)'}}></Text>
        </View> */}
        <View style={styles.TouchableTV}>
          <TouchableOpacity onPress={() => onSubmit()}>
            <LinearGradient
              colors={['rgb(85,175,207)', 'rgb(55,121,176)', 'rgb(45,102,165)']}
              style={styles.Touchable}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  maincontiner: {
    height: height * 1,
    width: width * 1,

    backgroundColor: 'rgb( 0,26,43)',
  },

  header: {
    height: height * 0.07,
    width: width * 0.88,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
  },

  txtEmail: {
    height: height * 0.06,
    width: width * 0.26,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPass: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmailInputV: {
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height * 0.07,
    width: width * 0.88,
    backgroundColor: 'rgb(0,39,65)',
    flexDirection: 'row',
    borderRadius: 8,
  },

  TouchableTV: {
    height: height * 0.14,
    width: width * 0.88,
    // backgroundColor:'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Touchable: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: 'rgb(0,138,181)',
    justifyContent: 'center',
    // flex: 1,
  },

  CrossV: {
    // alignItems: 'flex-end',
    height: height * 0.075,
    width: width * 0.88,
    // backgroundColor: 'cyan',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  refferalId: {
    height: height * 0.075,
    width: width * 0.5,
    left: 25,
    // alignSelf: 'center',
    // backgroundColor: 'cyan',
    //  justifyContent:'center',

    flexDirection: 'row',
    alignItems: 'center',
  },
  agree: {
    height: height * 0.12,
    width: width * 0.88,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent:'space-around'
  },
  agree2: {
    height: height * 0.045,
    width: width * 0.88,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtAgree: {
    borderWidth: 3,
    borderColor: 'rgb(255,47,187)',
    // backgroundColor:'red'
  },
  dropdown: {
    width: width * 0.4,
    // height: 50,
    // borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingHorizontal: 8,
    // backgroundColor:'red'
  },
  // icon: {
  //   marginRight: 5,
  // },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'black',
    left: 22,
    top: 8,
    // zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 14,
    // backgroundColor:'red',
    color: 'rgb(72,118,147)',
  },
  selectedTextStyle: {
    fontSize: 16,

    color: 'rgb(72,118,147)',
  },
  iconStyle: {
    width: 20,
    height: 20,
    fontWeight: 'bold',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
