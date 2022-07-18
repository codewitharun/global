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
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const Account = ({navigation}) => {
  // *********** Step-1 ***********

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  //**For-password */
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [price, setPrice] = useState('');
  const [errorPrice, setErrorPrice] = useState('');
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

  const _pricevalidate = price => {
    var Regexx = /^[0]?[6789]\d{3}$/;
    if (price === '' ||price === undefined || price=== null) {
      setErrorPrice('*please enter your bidding Price ');
    } else if (!Regexx.test(price)) {
      setErrorPrice('*please enter valid ammount ');
    } else {
      setErrorPrice(null);
    }
  };

 

 
  // Step-3
  const validate = () => {
    var Regex4 =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Regx2 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
      var Regx3 = /^\(?([6-9]{2})\)?[-. ]?([0-9]{1})[-. ]?([0-9]{1})$/;
    
    let flag = true;

    if (email === '') {
      setErrorEmail('*please enter email');
      flag = false;
      // return !flag;
    } else if (!Regex4.test(email)) {
      setErrorEmail('*Please enter valid email');
      // return !flag;
      flag = false;
    } else {
      setErrorEmail(null);
    }
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('*Please enter password');
      // return !flag;
      flag = false;
    } else if (!Regx2.test(password)) {
      setErrorPassword('password must contain (0-9) (a-z) (A-Z)(@$%^&*)');
      // return !flag;
      flag = false;
    } else setErrorPassword(null);
  
  if (price === '') {
    setErrorPrice('*please enter Price');
    flag=false;
  }
  if (price === '' || price === undefined || price === null) {
    setErrorPrice('*Please enter Price');
    flag=false;
  }
  if (!Regx3.test(price)) {
    setErrorPrice('*Price must only be in thousands only');
    flag=false;
  } else setErrorPrice(null);
  



    return flag;
  };

  // step-4
  const onSubmit = () => {
    if (validate()) {
      // alert('Success');
      navigation.navigate('Level');
    } else {
      alert('something went wrong');
    }
  };



  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={styles.crosV}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Level')}>
              <Image
                source={require('../../assets/images/detais/right.jpeg')}
                style={{height: 50, width: 60}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/account/cross.png')}
                style={{height: 20, width: 20}}
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
            Company is the worlds's largest crypto exchange platform
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
            placeholder="Enter your account details."
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
              height: '3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 13}}>{errorEmail}</Text>
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
            placeholder="Verify your identity to protect your account."
            placeholderTextColor={'rgb(62, 104, 131)'}
            color={'white'}
            secureTextEntry={true}
            maxLength={16}
            onChangeText={txt => {
              setPassword(txt), _passwordvalidate(txt);
            }}
          />
        </View>
        {errorPassword !== null ? (
          <View
            style={{
              height: '3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 13}}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.createView}>
          <Image
            source={require('../../assets/images/account/lock1.jpg')}
            style={{height: 25, width: 21}}
          />
          <Text style={{fontSize: 19, color: 'white'}}> Unlock Price </Text>
        </View>
        <View style={styles.TxtInputV}>
          <TextInput
            style={styles.TxtInput}
            placeholder="Get your price and start trading."
            placeholderTextColor={'rgb(42, 79, 105)'}
            color={'white'}
            secureTextEntry={false}
            maxLength={4}
            onChangeText={txt => {
              setPrice(txt), _pricevalidate(txt);
            }}
          />
        </View>

        {errorPrice !== null ? (
          <View
            style={{
              height: '3%',
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 13}}>{errorPrice}</Text>
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
              By creating an account you agree to our
            </Text>
            <TouchableOpacity>  
            <Text style={{color: 'rgb(0,131,156)'}}> Terms and </Text>
            </TouchableOpacity>
          
          </View>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              width: width * 0.8,
            }}>
            <TouchableOpacity>

            <Text style={{color: 'rgb(0,131,156)'}}> Condition</Text>
            </TouchableOpacity>
            <Text style={{color: 'rgb(42, 79, 105)'}}> and </Text>
            <TouchableOpacity>
            <Text style={{color: 'rgb(0,131,156)'}}>
              Data Protection Guidlines.
            </Text>

            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => onSubmit()}
            >
            <LinearGradient
              colors={['rgb(85,175,207)', 'rgb(55,121,176)', 'rgb(45,102,165)']}
              style={styles.Touchable}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color:'white'}}>Create Personal Account</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.Horizon}>
          <View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />
          <View>
            <Text style={styles.HorizonText}> or,for businesses </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />
        </View>
        <View>
          <TouchableOpacity style={styles.Entity} onPress={() => navigation.navigate("Home")}>
            <Text style={{color: 'white', fontSize: 20}}>
              Create Entity Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomV}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Already registered?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Text
              style={{
                color: 'rgb(0, 135, 160)',
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine:"underline"
              }}>
               {' '}Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container:{
    height:height*1,
    width:width*1,
    backgroundColor: 'rgb(0, 26, 43)',
  },
  maincontainer: {
    height: height * 1,
    width: width * 0.9,
    alignSelf:'center',
    backgroundColor: 'rgb(0, 26, 43)',
  },
  txtyouraccount: {
    height: height * 0.06,
    width: width * 0.78,
    justifyContent: 'center',
    // backgroundColor: 'red',
    // backgroundColor: 'rgb(0, 26, 43)',
    alignItems: 'center',
  },
  txtView: {
    height: height * 0.06,
    width: width * 0.7,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  createView1: {
    height: height * 0.047,
    width: width * 0.4,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },

  createView: {
    height: height * 0.047,
    width: width * 0.36,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  TxtInput: {
    height: height * 0.045,
    width: width * 0.8,
    //   borderWidth:1,
    // backgroundColor:'aqua',
    // padding: 12,
  },
  TxtInputV: {
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  HorizonText:{color:'white'},
  loremText: {
    // backgroundColor: 'aqua',
    // justifyContent: 'center',
    // alignSelf:'center',
    // alignItems: 'center',
    flexDirection: 'row',
    width:width*1,
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
    width: width * 0.96,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
      // backgroundColor:'skyblue',
    alignSelf: 'center',
    alignItems: 'center',
  },
  Horizon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    width: width * 0.9,
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

//
