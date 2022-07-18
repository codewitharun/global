import React , {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  BackHandler, Alert
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
const {width,height} = Dimensions.get("window")
const data = [
  {
    key:1,
    title: 'Safe & Secure',
    text: 'BUY, SELL crypto in few clicks . SEND and RECIEVE crypto for free.',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    bg: '#fff',
  },
  {
    key:2,
    title: 'Safe & Secure',
    text: 'BUY, SELL crypto in few clicks . SEND and RECIEVE crypto for free.',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    bg: '#fff',
  },
  {
    key:3,
    title: 'Safe & Secure',
    text: "BUY, SELL crypto in few clicks . SEND and RECIEVE crypto for free.",
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    bg: '#fff',
  },
];

type Item = (typeof data)[0];

const styles = StyleSheet.create({
  slide: {
    height:height*1,
    width:width*0.9,
    alignSelf:'center',
    // backgroundColor:'green',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width*0.9,
    height: height*0.5,
    
  },
  text: {
    color: 'black',
    fontSize:18,
    fontWeight:'400',
    lineHeight:33,
    // textAlign: 'center',
    
  },
  title: {
    fontSize: 36,
    color: 'black',
    fontWeight:'400',
    // lineHeight:50,
    // textAlign: 'center',
  },
  titleView:{},
  textView:{
    width:300,
  },
  buttonCircle: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    // left: 16,

    // right: 16,
  },
  Touchable: {
    height: height * 0.08,
    width: width * 0.18,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: 'rgb(0,138,181)',
    justifyContent: 'center',
    // flex: 1,
  },
  paginationDots: {
    height: 30,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 7,
    height: 5,
    borderRadius: 5,
    marginHorizontal:2,
  },
});


// const CustomButtons = ({navigation}) => (
export default class App  extends React.Component {
  
  _renderItem = ({item}: {item: Item}) => {
    
    return (
        <View style={{backgroundColor:'white', height:height*1,}}>

      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        
        <Image source={item.image} style={styles.image} />
        <View style={styles.titleView} >

        <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.textView}>

        <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
        </View>
    );
  };

  _keyExtractor = (item: Item) => item.key;

  _renderNextButton = () => {
    return (
     <View>

     </View>
    );
  };

  _renderDoneButton = () => {
    return (
    <View>

    </View>
    );
  };

  _renderPagination = (activeIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.dot,
                  i === activeIndex
                    ? {backgroundColor: 'blue', width: 20}
                    : {backgroundColor: 'rgba(0, 0, 0, .2)',width:5},
                ]}
                onPress={() => this.slider?.goToSlide(i, true)}
              />
            ))}
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>

        <LinearGradient
        colors={['rgb(66,101,252)', 'rgb(97,46,236)', 'rgb(138,0,221)']}
        style={styles.Touchable}>
    <Image source={require("../assets/images/onboard/arrow-20-32.png")} />
      </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  render()  {
    return (
      <View style={{flex: 1}}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}

          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
        />
      </View>
    );
  }
}
