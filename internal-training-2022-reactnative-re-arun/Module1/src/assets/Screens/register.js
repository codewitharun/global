import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('window');
const Register = ({navigation}) => (
  <SafeAreaView style={styles.scontainer}>
    <View style={styles.container}>
      <View style={styles.con2}>
        <Text style={styles.title}>Register & Play</Text>
      </View>
      <View style={styles.imv}>
        <Icon name="crown" size={30} color={'white'} style={styles.im} />
      </View>
      <View style={styles.h}>
        <Text style={styles.txt}>We will send you confirmation code</Text>
      </View>
      <View style={styles.ti}>
        <View style={styles.icvi}></View>
        <View style={styles.imvi}>
          <Image source={require('../Images/india.jpeg')} style={styles.flg} />
        </View>
        <View style={styles.icvi}>
          <TouchableOpacity>
            <Icon name="angle-down" color={'grey'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icvi}>
          <View style={styles.verticleline}></View>
        </View>
        <TextInput placeholder="9346573823" placeholderTextColor={'black'} />
      </View>
      <View style={styles.toview}>
        <View>
          <TouchableOpacity
            style={styles.to}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txt}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ch}></View>
        <View>
          <Text style={styles.txt}>By Registering I Agree To TIAR's T&Cs</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default Register;

const styles = StyleSheet.create({
  scontainer: {
    backgroundColor: 'rgb(20,20,60)',
    flex: 0,
  },
  container: {
    backgroundColor: 'rgb(20,20,60)',
    height: height / 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  con2: {
    height: height / 6,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'rgb(253, 106, 67)',
    fontFamily: 'Copperplate',
    fontSize: 30,
    letterSpacing: -3.5,
  },

  imv: {height: height / 5, justifyContent: 'center'},
  im: {alignSelf: 'center'},
  h: {height: 40},
  txt: {color: 'white'},
  ti: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    width: width * 0.9,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  flg: {
    height: 15,
    width: 20,
    borderRadius: 2,
  },
  toview: {
    height: height * 0.29,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  to: {
    backgroundColor: 'rgb(253, 106, 67)',
    height: 35,
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
  },
  ch: {height: 20},
  imvi: {
    width: 30,
  },
  icvi: {
    width: 18,
  },
  verticleline: {
    borderLeftWidth: 2,
    borderLeftColor: 'rgb(225, 230, 237)',
    height: 35,
  },
});
