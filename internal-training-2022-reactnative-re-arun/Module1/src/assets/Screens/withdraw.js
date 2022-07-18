import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-gesture-handler';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
const {width, height} = Dimensions.get('window');

const Withdraw = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(94,29,156)'}}>
      <View style={styles.scontainer}>
        <View style={styles.title}>
          <Icon
            name="arrow-left"
            size={25}
            color={'white'}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <View style={{}}>
          <Text style={styles.with}>Withdraw Money</Text>
        </View>
      </View>
      <View style={styles.ht}>
        <View style={{height: 30}}></View>

        <View>
          <Image
            style={styles.img}
            source={require('../Images/withdraw.jpeg')}
          />
        </View>
        <View style={{height: 35}}></View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.bal}>Balance : 550.00 $</Text>
        </View>
      </View>
      <View style={styles.ht1}></View>
      <View style={{backgroundColor: 'rgb(242,242,242)'}}>
        <View style={styles.withb}>
          <Text style={{color:'black', fontWeight:'500'}}>Withdrawable Balance : 500.00 $</Text>
          <View style={{justifyContent:'center',width:20,height:20,borderRadius:20,backgroundColor:'grey'}}>

          <Icon name="info" style={{backgroundColor:'grey',alignSelf:'center'}} />
          </View>
        </View>
        <View style={styles.ht2}>
          <View style={styles.tiv}>
            <TextInput style={styles.ti}></TextInput>
          </View>
        </View>

        <View style={{height: 10}}></View>
        
        <View style={styles.tit}>
        
          <Text style={{color: 'grey'}}>Choose Your Wallet</Text>
        </View>
        <View style={styles.tiv2}>
          <View style={styles.tivv}>
            <View style={{width:30}}>
        <TouchableOpacity>
              <Icon
                name="angle-down"
               color={'black'}
                size={20}
              />
</TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={styles.tov}>
            <TouchableOpacity style={styles.to}>
              <Text style={styles.tot}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  scontainer: {
    backgroundColor: 'rgb(94,29,156)',
    height: height * 0.06,
    width: width / 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'red',
    height: height * 0.8,
    width: width * 0.9,
    // alignSelf: 'center',
    // justifyContent:'flex-start'
  },
  title: {
    alignItems: 'center',
    backgroundColor: 'rgb(94,29,156)',
    width: 50,
  },
  icv: {
    width: width / 9,
  },
  with: {alignSelf: 'center', fontSize: 23, color: 'white', left:20},
  ht: {height: height / 2.5, backgroundColor: 'white'},
  img: {width: width / 1, height: 120, alignSelf: 'center'},
  bal: {fontSize: 26, fontWeight: '700', color:'black'},
  ht1: {height: 50, backgroundColor: 'rgb(242,242,242)'},
  withb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    height: 25,
  },
  ht2: {
    width: width * 0.9,
    backgroundColor: 'rgb(242,242,242)',
    alignSelf: 'center',
  },
  tiv: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  tivv: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    // borderRadius: 20,
    // height: height * 0.07,
    alignItems: 'center',
  },
  ti: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    height: 30,
  },
  tiv2: {
    width: width * 0.9,
    backgroundColor: 'rgb(242,242,242)',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  tov: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: height * 0.17,
  },
  to: {
    backgroundColor: 'rgb(82,20,141)',
    borderRadius: 50,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tot: {color: 'white', fontWeight: '700'},
});
