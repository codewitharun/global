import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.scontainer}>
      <View style={styles.container}>
       <View >
       <TouchableOpacity style={styles.icv}  onPress={() => navigation.navigate('Home')} >
          <Icon
            name="arrow-left"
            color={'white'}
            size={35}
            
          />
       </TouchableOpacity>
        </View>
        <View style={styles.imv}>
          <Image source={require('../Images/avtar.jpeg')} style={styles.im} />
          
            
          
        </View>
        <View>
          <Text style={styles.txt}>Full Name</Text>
          <TextInput style={styles.tinput} placeholderTextColor="grey" placeholder={'     Arun Kumar'} />
          <Text style={styles.txt}>Email ID</Text>
          <TextInput
            style={styles.tinput}
            placeholder={'     re-arun@indicchain.com'}
            placeholderTextColor="grey"
          />
          <Text style={styles.txt}>Phone Number</Text>
          <View style={styles.ti}>
            <View style={styles.icvi}></View>
            <View style={styles.imvi}>
              <Image
                source={require('../Images/india.jpeg')}
                style={styles.flg}
              />
            </View>
            <View style={styles.imvi}>
            <TouchableOpacity>

            <Text style={{color:'black'}}>+91</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.icvi}>
            <TouchableOpacity>

              <Icon name="angle-down" color={'black'} />
              
            </TouchableOpacity>
            
            </View>
            <View style={styles.verticleline}></View>
            <TextInput style={styles.tinput1} placeholderTextColor="grey" placeholder="  Mobile Number" />
            <View style={styles.icvi}>
              
            </View>
          </View>
        </View>
        <View style={styles.ht}></View>
        <View style={styles.toview}>
          <TouchableOpacity style={styles.to}>
            <Text style={styles.totxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scontainer: {
    backgroundColor: 'white',
    flex: 0,
  },
  container: {
    // backgroundColor: 'red',
    height: height / 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  icv: {
    backgroundColor: 'rgb(113,222,207)',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  imv: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  im: {
    width: 150,
    // height: 200,
    // borderRadius: 100 / 1,
  },
  ico: {},
  icv2: {
    alignContent: 'center',
  },
  icv3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100 / 4,
    height: 50,
    width: 50,
    position: 'absolute',
  },
  txt: {
    lineHeight: 30,
    color:'black'
  },
  tinput: {
    height: 50,
    width: width * 0.9,
    backgroundColor: 'rgb(232, 235, 233)',
    borderRadius: 10,
    textAlign:'auto',
    
  },
  tinput1: {
    height: 50,
    width: width * 0.63,
    backgroundColor: 'rgb(232, 235, 233)',
    borderRadius: 10,
  },
  tiphone: {
    flexDirection: 'row',
  },
  imvi: {
    width: 30,
  },
  flg: {
    height: 20,
    width: 20,
    borderRadius: 100 / 2,
  },
  icvi: {
    width: 18,
  },
  ti: {
    flexDirection: 'row',
    backgroundColor: 'rgb(232, 235, 233)',
    height: 50,
    width: width * 0.3,

    borderRadius: 10,
    alignItems: 'center',
  },
  verticleline: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgb(143, 145, 148)',
    height: 40,
  },
  ht: {
    height: 50,
  },
  to:{
   justifyContent:'center',
    backgroundColor:'rgb(113,222,207)',
    height:60,
    width:width*0.8,
    alignItems:'center',
    borderRadius:30,
  },
  toview:{
    // justifyContent:'center',
    alignSelf:'center',
  },
  totxt:{
        fontSize:22,color:'white',
        fontWeight:'500',
        textAlign:'center'
  }
});
