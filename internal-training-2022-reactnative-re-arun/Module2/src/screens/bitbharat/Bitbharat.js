import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
const {height, width} = Dimensions.get('window');
const Oeye = require('../../assets/images/BItbharat/eye.png');
const Ceye = require('../../assets/images/BItbharat/eyeclose.png');
const Bitbharat = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // *********** Step-1 ***********
  
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  //**For-password */
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  //**For-Email */

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
      setErrorPassword('password must contain (0-9) (a-z) (A-Z)(@$%^&*)');
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
      setErrorPassword('password must contain (0-9) (a-z) (A-Z)(@$%^&*)');
      // return !flag;
      flag = false;
    } else setErrorPassword(null);

    return flag;
  };
  const onSubmit = () => {
    if (validate()) {
      validate();
      // alert('Sussessful');
      navigation.navigate('Account');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.maincontiner}>
        <View style={styles.CrossV}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/BItbharat/cross.jpg')}
              style={{height: 25, width: 25}}
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
            Bitbharat Account Login
          </Text>
        </View>
        <View style={styles.mailPhoneV}>
          <View style={styles.mail}>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: 'rgb( 60,104, 133)'}}>
                Email
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.phone}>
            <TouchableOpacity>
              <Text style={{fontSize: 18, color: 'rgb( 60,104, 133)'}}>
                Phone number
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.txtEmail}>
          <Text style={{fontSize: 20, color: 'rgb(72,118,147)'}}> Email </Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.062,
              width: width * 0.14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/BItbharat/email.jpg')}
              style={{height: 15, width: 25}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={'rgb( 60,104, 133)'}
              // placeholderTextColor={'rgb( 60,104, 133)'}
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
              height:'3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
          </View>
        ) : null}

        <View style={styles.txtPass}>
          <Text style={{fontSize: 20, color: 'rgb(72,118,147)'}}>Password</Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.062,
              width: width * 0.14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/BItbharat/lock.jpg')}
              style={{height: 25, width: 28}}
            />
          </View>
          <View style={{width:width*0.65}}>
            <TextInput
              placeholder="Enter your Password"
              placeholderTextColor={'rgb( 60,104, 133)'}
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
              height: '3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.squre}>
          <View>
            <TouchableOpacity>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                boxType={'square'}
                tintColor="rgb(0,168,195)"
                onCheckColor="rgb(0,168,195)"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{fontSize: 18, color: 'rgb(0,168,195)', paddingLeft: 10}}>
              Remember me
            </Text>
          </View>
        </View>

        <View style={styles.check}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/BItbharat/check.jpeg')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{fontSize: 18, paddingLeft: 10, color: 'rgb(0,168,195)'}}>
              Please click captcha button
            </Text>
          </View>
        </View>
        <View style={styles.TouchableTV}>
          <TouchableOpacity onPress={() => onSubmit('')}>
            <LinearGradient
              colors={['rgb(85,175,207)', 'rgb(55,121,176)', 'rgb(45,102,165)']}
              style={styles.Touchable}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.forget}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: 'rgb(0,168,195)'}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: 'underline',
                color: 'rgb(0,168,195)',
              }}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bitbharat;

const styles = StyleSheet.create({
  maincontiner: {
    height: height * 1,
    width: width * 1,

    backgroundColor: 'rgb( 0,26,43)',
  },

  header: {
    height: height * 0.15,
    width: width * 0.88,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  mail: {
    height: height * 0.04,
    width: width * 0.21,
    borderRadius: 3,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb( 0,40, 66)',
  },
  phone: {
    height: height * 0.04,
    width: width * 0.31,
    // borderRadius:3,
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailPhoneV: {
    flexDirection: 'row',
    height: height * 0.048,
    width: width * 0.64,
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  txtEmail: {
    height: height * 0.05,
    width: width * 0.26,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPass: {
    height: height * 0.05,
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
    // backgroundColor: 'rgb(0,39,65)',
// backgroundColor:'red',
    flexDirection: 'row',
    // justifyContent:'space-between',
    borderRadius: 8,
  },
  squre: {
    height: height * 0.069,
    width: width * 0.48,
    flexDirection: 'row',
    // backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent:'space-evenly',
  },
  check: {
    height: height * 0.07,
    width: width * 0.88,
    backgroundColor: 'rgb(0,40,66)',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 20,
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
    backgroundColor: 'rgb(0,138,181)',
    justifyContent: 'center',
  },
  register: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
  },
  forget: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
  },
  CrossV: {
    alignItems: 'flex-end',
    height: height * 0.055,
    width: width * 0.94,
    // backgroundColor: 'cyan',
    paddingTop: 15,
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
});
