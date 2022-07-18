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
const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.scontainer}>
      <View style={styles.container}>
        <View>
          <Icon
            name="angle-left"
            size={40}
            color={'white'}
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.ht}></View>
          <Text style={styles.title}>Payment Option</Text>
        </View>
        <View style={styles.ht}></View>
        <View style={styles.opt}>
          <Text style={styles.optt}>Pay with crypto</Text>
        </View>
        <View style={styles.ht}></View>

        <View style={styles.twi}>
          <View style={styles.icw}>
            <View style={styles.icov}>
              <Icon
                name="bitcoin"
                size={25}
                color={'orange'}
                style={styles.ico}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              
              <Text style={styles.twitx}>Pay with crypto</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.htb}></View>
        <View style={styles.opt}>
          <Text style={styles.optt}>Debit/Credit Card</Text>
        </View>
        <View style={styles.ht}></View>

        <View style={styles.twi}>
          <View style={styles.icw}>
            <View style={styles.icov}>
              <Icon
                name="credit-card"
                size={25}
                color={'black'}
                style={styles.ico}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.twitx}>Add new card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

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
  title: {
    color: 'rgb(253, 106, 67)',
    height: 50,
    fontSize: 32,
    fontFamily: 'Copperplate',
  },
  opt: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height: 30,
  },
  optt: {
    color: 'white',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'Copperplate',
    bottom:10
  },
  twi: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icov: {
    height: 50,
    backgroundColor: 'white',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icw: {
    width: 70,
  },

  ht: {
    height: 25,
  },
  htb: {
    height: 35,
  },
  twitx: {
    color: 'white',
    fontFamily: 'Copperplate',
    fontSize: 24,
  },
});
