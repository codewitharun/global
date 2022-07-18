import react, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Details from '../Account details/Details';
const {height, width} = Dimensions.get('window');

const Accountt = ({navigation}) => {
  const [Email, setEmail] = useState('');

  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const [Price, setPrice] = useState('');
  const [errorPrice, setErrorPrice] = useState('');

  // Step-2
  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === '') {
      setErrorEmail('*Please enter email');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email');
    } else {
      setErrorEmail(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass === '') {
      setErrorPassword('*Please verify Identity.');
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword('*Please enter  valid identity');
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid identity.');
    } else {
      setErrorPassword(null);
    }
  };

  const _pricevalidate = price => {
    var priceRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (price === '') {
      setErrorPrice('*Please enter your id No ');
    } else if (!priceRegex.test(price)) {
      setErrorPrice('*Please enter valid id  No ');
    } else {
      setErrorPrice(null);
    }
  };

  // Step-3
  const validate = () => {
    let flag = true;
    if (Email === '') {
      // setErrorEmail('*Please enter email.');
      // flag = false;
      return !flag;
    }
    if (Password === '') {
      // setErrorPassword('*Please enter password--.');
      // flag = false;
      return !flag;
    }

    if (Price === '') {
      // setErrorPrice('*Please enter price--.');
      // flag = false;
      return !flag;
    }
    return flag;
  };

  // step-4
  const onSubmit = () => {
    if (validate()) {
      // alert('Success');
      navigation.navigate("Home");
    } else {
      alert('something went wrong');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
        <View style={styles.crosV}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require('../../assets/images/detais/right.jpeg')}
                style={{height: 70, width: 60}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/account/cross.png')}
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.txtyouraccount}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            Create Your Account
          </Text>
        </View>
        <View style={styles.txtView}>
          <Text style={{color: 'rgb(62, 104, 131)', fontSize: 15}}>
            company is the worlds's largest crypto exchange platform
          </Text>
        </View>
        <View style={styles.createView1}>
          <Image
            source={require('../../assets/images/account/create.jpg')}
            style={{height: 14, width: 14}}
          />
          <Text style={{fontSize: 19, color: 'white'}}> Create Account </Text>
        </View>
        <View style={styles.TxtInputV}>
          <TextInput
            style={styles.TxtInput}
            placeholder=" Enter your account details."
            placeholderTextColor={'rgb(62, 104, 131)'}
            color={'white'}
            keyboardType={'email-address'}
            maxLength={24}
            onChangeText={txt => {
              setEmail(txt), _emailvalidate(txt);
            }}
          />
        </View>
        {errorEmail !== null ? (
          <View
            style={{
              height: '2%',
              width: '80%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
          </View>
        ) : null}

        <View style={styles.createView}>
          <Image
            source={require('../../assets/images/account/card.jpg')}
            style={{height: 11, width: 15}}
          />
          <Text style={{fontSize: 19, color: 'white'}}> Verify Identity </Text>
        </View>
        <View style={styles.TxtInputV}>
          <TextInput
            style={styles.TxtInput}
            placeholder=" Verify your identity to protect your account."
            placeholderTextColor={'rgb(62, 104, 131)'}
            color={'white'}
            secureTextEntry={false}
            maxLength={16}
            onChangeText={txt => {
              setPassword(txt), _passwordvalidate(txt);
            }}
          />
        </View>
        {errorPassword !== null ? (
          <View
            style={{
              height: '2%',
              width: '80%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.createView}>
          <Image
            source={require('../../assets/images/account/lock1.jpg')}
            style={{height: 15, width: 15}}
          />
          <Text style={{fontSize: 19, color: 'white'}}> Unlock Price </Text>
        </View>
        <View style={styles.TxtInputV}>
          <TextInput
            style={styles.TxtInput}
            placeholder=" Get your price and start trading."
            placeholderTextColor={'rgb(42, 79, 105)'}
            color={'white'}
            secureTextEntry={true}
            maxLength={16}
            onChangeText={txt => {
              setPrice(txt), _pricevalidate(txt);
            }}
          />
        </View>

        {errorPrice !== null ? (
          <View
            style={{
              height: '2%',
              width: '80%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorPrice}</Text>
          </View>
        ) : null}

        <View
          style={{
            height: height * 0.08,
            width: width * 0.94,
            justifyContent: 'center',
          }}>
          <View style={styles.loremText}>
            <Text style={{fontSize: 14, color: 'rgb(42, 79, 105)'}}>
              By creacting an account you agree to our
            </Text>
            <Text style={{color: 'rgb(0,131,156)'}}>Terms and </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: width * 0.75,
            }}>
            <Text style={{color: 'rgb(0,131,156)'}}> Condition</Text>
            <Text style={{color: 'rgb(42, 79, 105)'}}> and </Text>
            <Text style={{color: 'rgb(0,131,156)'}}>
              Data Protection Guidlines
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={styles.TouchableOpacityV}>
            <Text style={{color: 'white', fontSize: 24}}>
              Create Personal Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.business}>
          <Text style={{color: ' rgb(52, 105, 115)'}}>
            ______________ or, for businesses ________________
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.Entity}>
            <Text style={{color: 'white', fontSize: 24}}>
              Create Entity Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomV}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Already registered ?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: 'rgb(0, 135, 160)',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Login in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Accountt;
const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'rgb(0, 26, 43)',
  },
  txtyouraccount: {
    height: height * 0.06,
    width: width * 0.73,
    justifyContent: 'center',
    // backgroundColor: 'red',
    // backgroundColor: 'rgb(0, 26, 43)',
    alignItems: 'center',
  },
  txtView: {
    height: height * 0.06,
    width: width * 0.74,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createView1: {
    height: height * 0.047,
    width: width * 0.48,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },

  createView: {
    height: height * 0.047,
    width: width * 0.44,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  TxtInput: {
    height: height * 0.04,
    width: width * 0.79,
    //   borderWidth:1,
    //   backgroundColor:'aqua',
    padding: 12,
  },
  TxtInputV: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loremText: {
    // backgroundColor: 'aqua',
    justifyContent: 'center',
    // alignSelf:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableOpacityV: {
    height: height * 0.07,
    width: width * 0.89,
    backgroundColor: ' rgb(0, 106, 160)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  business: {
    height: height * 0.07,
    width: width * 0.89,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  Entity: {
    height: height * 0.07,
    width: width * 0.89,
    backgroundColor: ' rgb(0, 40, 66)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomV: {
    height: height * 0.16,
    width: width * 0.89,
    flexDirection: 'row',
    //   backgroundColor:'red',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  crosV: {
    height: height * 0.08,
    width: width * 0.94,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    //   backgroundColor:'skyblue',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

//
