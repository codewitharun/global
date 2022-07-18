import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');
const Insurance = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.scr}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.to1}
              onPress={() => navigation.navigate('Home')}>
              <Icon
                name="arrow-left"
                size={35}
                style={styles.ico}
                color={'white'}
              />
            </TouchableOpacity>
            <View style={styles.container1}>
              <Text style={styles.title}>Car Insurance</Text>
            </View>
          </View>
          <View style={{height: 25}}></View>
          <View style={styles.imgv}>
            <Image source={require('../Images/1.jpeg')} style={styles.imgs} />
          </View>
          <View style={{height: 25}}></View>

          <View style={styles.tv}>
            <View style={styles.tvf}>
              <View>
                <Text style={styles.lefttitle}>Policy Details</Text>
                <Text style={styles.left}>Units 4Unit/USD 3000</Text>
                <View style={{height: 15}}></View>

                <Text style={styles.left}>Price</Text>
                <Text style={styles.left}>Minimum Purchase</Text>
                <Text style={styles.left}>Payout frequency</Text>
                <Text style={styles.left}>Currency Type</Text>
              </View>
              <View>
                <Text style={styles.righttitle}>Date:24-April-2021</Text>
                <View style={{height: 50}}></View>
                <Text style={styles.righttext}>$ 427</Text>
                <Text style={styles.righttext}>2-Units</Text>
                <Text style={styles.righttext}>Monthly</Text>
                <Text style={styles.righttext}>USD</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              height: height * 0.24,
            }}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <TouchableOpacity style={styles.subm}>
                <Text style={styles.submtext}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //  backgroundColor: 'red',
    height: height / 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  to1: {
    backgroundColor: 'rgb(113,222,207)',
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  ico: {
    width: width * 0.08,
  },
  container1: {
    height: 45,
    width: width * 0.7,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    alignSelf: 'center',
    color:'black'
  },
  imgv: {
    height: height * 0.2,
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    //backgroundColor: 'red',
  },
  imgs: {
    alignSelf: 'center',
    height: height * 0.22,
    width: width * 0.89,
  },
  tv: {width: width * 0.9, alignSelf: 'center'},
  tvf: {flexDirection: 'row', justifyContent: 'space-between'},
  lefttitle: {fontWeight: 'bold', fontSize: 18, color:'black'},
  left: {lineHeight: 30, color: 'grey'},
  righttitle: {
    color: 'grey',
  },
  righttext: {alignSelf: 'flex-end', lineHeight: 30, color: '#696969'},
  subm: {
    backgroundColor: 'rgb(113,222,207)',
    height: 50,
    width: 330,
    justifyContent: 'center',
    borderRadius: 20,
  },
  submtext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scr: {
    width: width * 0.9,
    // backgroundColor:'red'
  },
});
