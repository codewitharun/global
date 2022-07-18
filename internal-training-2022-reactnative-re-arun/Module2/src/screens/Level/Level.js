import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import Allsport from '../Winsum All sports/Allsport';
const {width, height} = Dimensions.get('window');


const Level = ({navigation}) => {
  const Flat = [
    {
      // src: require('../../../assets/images/Level/smile.jpg'),
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'New Guy',
      name1: ' You competed the welcome tutorail ',
      touchable: ' Collect',
    },
    {
      src: require('../../assets/images/Level/happy-24.png'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },
    {
      src: require('../../assets/images/Level/happy-24.png'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
            src: require('../../assets/images/Level/happy-24.png'),

      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },
  ];
 

  return (
    <SafeAreaView>
    
      <View style={styles.midView}>
        <View style={styles.maincontainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{height:50,width:50}}
              source={require('../../assets/images/Level/leftarrow.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 17}}> Achivements </Text>
        </View>
        <View style={styles.LevelView}>
          <View style={{alignSelf:'center'}}>
            <Text style={{fontSize:25, fontWeight:'bold',color:'white'}}> Level 53</Text>
          </View>
          <View style={{alignSelf:'center'}}>
         <Image source={require("../../assets/images/Level/line2.jpeg")} style={{borderColor:'rgb(119,185,31)' ,borderRadius:50 , height:15, width:width*0.8,}} />
          </View>
          <View>
            <Text style={{fontWeight:'bold', color:'white'}}>
              XP: 3540/53000
            </Text>
          </View>
        </View>

        <FlatList
          data={Flat}
          renderItem={({item}) => {
            return (
              <View style={styles.container1}>
                <Image source={item.src} style={{height: 40, width: 40, }} />
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 15 ,left:-5,color:'black'}}>
                    {item.name}
                  </Text>

                  <Text style={{color:'grey', fontSize:11,left:-10}}> {item.name1}</Text>
                  <Text style={{color:'grey',fontSize:11, left:-9}}> {item.name2}</Text>
                </View>
                <View style={styles.CollectV}>
                  <TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {item.touchable}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Level;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: ' rgb(97,00,159)',
    height: height * 0.10,
    width: width * 1,
    alignSelf: 'center',
    
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  LevelView: {
    height: height * 0.19,
    width: width * 1,
    backgroundColor:'rgb(119,185,31)',
    // alignSelf: 'center',
     justifyContent:'space-evenly',
     alignItems:'center',
    //  alignContent:'center'
  },

  midView: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: 'red',
    alignSelf: 'center',
    borderWidth: 1,
    // borderColor: 'rgb(231,231,231)',
  },

  container1: {
    height: height * 0.09,
    width: width * 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(231,231,231)',

    borderRadius: 2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  CollectV: {
    height: height * 0.035,
    width: width * 0.18,
    backgroundColor: 'rgb(90,0,150)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
