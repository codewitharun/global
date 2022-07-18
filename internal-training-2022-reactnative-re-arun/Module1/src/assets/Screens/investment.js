import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const Flat = [
  {
    src: require('../Images/inv.jpeg'),
    name: 'Life Insurance policy',
    name1: 'Units : 4 UNIT/USD 3000',
    name2: 'Date : 24 - April -2021',
  },
  {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
      src: require('../Images/inv.jpeg'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
];

const Investment = ({navigation}) => {
  
  return (
    <SafeAreaView>
  
      <View>
        <View style={styles.main}>
          <View style={{height: height * 0.027}}></View>
          <View style={styles.inv}>
            <View style={styles.container3}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <View style={styles.vie2}>
                    {/* <Text style={styles.txt5}>←</Text> */}
                    <Icon
                name="arrow-left"
                size={35}
                style={styles.ico}
                color={'white'}
              />
                  </View>
                </TouchableOpacity>
                <View style={styles.vie3}>
                  <Text style={styles.txt4}>My Investments</Text>
                </View>
              </View>
            </View>
            <View style={{height: height * 0.027}}></View>

            <View>
            <FlatList
            //horizontal={true}
            // numColumns={4}
            showsHorizontalScrollIndicator={false}
            data={Flat}
            renderItem={({item}) => {
              return (
                <View>
                  <View
                    style={styles.cont}>
                    <View style={{justifyContent: 'center'}}>
                      <Image source={item.src} style={styles.img} />
                    </View>
                    <View style={styles.container}>
                      <View style={styles.container1}>
                        <Text style={styles.txt}>{item.name}</Text>
                        <View style={{height: height * 0.01}}></View>
                        <Text style={styles.txt1}>{item.name1}</Text>
                        <View style={{height: height * 0.027}}></View>
                        <Text style={styles.txt2}>{item.name2}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{height: height * 0.02}}></View>
                </View>
              );
            }}
          />

            </View>
          </View>
        
        </View>
      </View>
   
  </SafeAreaView>
);
};

export default Investment;

const styles = StyleSheet.create({
main: {
 backgroundColor: 'rgb(240, 241, 242)',
  height: height * 1,
  width: width * 1,
},
ico: {
  width: width * 0.08,
},
img: {
  height: height * 0.135,
  width: 100,
  // borderRadius:20
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
  overflow:'hidden',
  //backgroundColor:"cyan"
},
container: {
 // backgroundColor:'yellow',
  height: height * 0.12,
  width: width * 0.75,
  alignSelf: 'center',
  justifyContent: 'center',
},
container1: {
   //backgroundColor:'red',
  height: height * 0.11,
  width: width * 0.7,
  alignSelf: 'center',
},
txt: {
  fontSize: 18,
  fontWeight: '600',
  color:'black'
},
txt1: {
  color: 'grey',
  fontSize:10,
  fontWeight:'600'
},
txt2: {
  color: 'grey',
  fontSize:10,
  fontWeight:'600'
},
vie2: {
  backgroundColor: 'rgb(113,222,207)',
  height: height * 0.06,
  width: width * 0.13,

  justifyContent: 'center',
  borderRadius: 10,
},
ico: {
  width: width * 0.08,
  alignSelf:'center'
},
txt5: {
  fontSize: 25,
  color: 'white',
  textAlign: 'center',
},
vie3: {
  justifyContent: 'center',
  // backgroundColor:'green',
  width: width / 1.4,
  alignSelf: 'center',
},
txt4: {
  textAlign: 'center',
  fontSize: 26,
  color: 'black',
  fontWeight: 'bold',
},
inv: {
  width: width / 1.1,
  alignSelf: 'center',
  // height:height*1
},
cont:{
  flexDirection: 'row',
  backgroundColor: 'white',
  width: width*0.89,
  alignSelf: 'center',
  height: height * 0.154,
  borderWidth: 10,
  borderColor: 'white',
  borderRadius: 20,
  //overflow: 'hidden',
}
});
