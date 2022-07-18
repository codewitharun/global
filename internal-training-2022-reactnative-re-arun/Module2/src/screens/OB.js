import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const {height, width} = Dimensions.get('window');
const slides = [
  {
    key: 1,
    background: 'rgb(76,0,131)',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    title: 'Professionals you can trust',
    text: 'Lorem ipsunm Lorem ipsum is a name for a common type of placeholde rexr Also known as filler or what is this loewm ipsem whycan dummy text, this is simply text act Its essentially nonsense.',
    titleColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
  },
  {
    key: 2,
    background: 'rgb(76,0,131)',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    title: 'second slide',
    text: 'Lorem ipsunm Lorem ipsum is a name for a common type of placeholde rexr Also known as filler or what is this loewm ipsem whycan dummy text, this is simply text act Its essentially nonsense.',
    titleColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
  },
  {
    key: 3,
    background: 'rgb(76,0,131)',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    title: 'next slide',
    text: 'Lorem ipsunm Lorem ipsum is a name for a common type of placeholde rexr Also known as filler or what is this loewm ipsem whycan dummy text, this is simply text act Its essentially nonsense.',
    titleColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
  },
  {
    key: 4,
    background: 'rgb(76,0,131)',
    image: require('../assets/images/onboard/Onboarding.jpeg'),
    title: 'Professionals you can trust',
    text: 'orem ipsunm Lorem ipsum is a name for a common type of placeholde rexr Also known as filler or what is this loewm ipsem whycan dummy text, this is simply text act Its essentially nonsense.',
    titleColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
  },
];
const Onboarding = props => {
 

  const _renderItem = ({item}) => {
    return (
      <View style={styles.mainvw}>
        <View style={styles.imgvw1}>
          <View style={styles.imgvw}>
            <Image style={styles.img} source={item.image} />
          </View>
        </View>
        <View style={styles.maintext}>
          <View style={styles.maintext1}>
            <Text style={[styles.titles, {color: item.titleColor}]}>
              {item.title}
            </Text>
          </View>
          <View style={styles.maintext1}>
            <Text style={[styles.texttitle, {color: item.textColor}]}>
              {item.text}
            </Text>
          </View>
        </View>
        {/* <View style={styles.arrowvw}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Transactions')}>
            <View style={styles.arrowvw1}>
              <Text style={styles.arrowtxt}>→</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };
//   _renderItem = ({item}: {item: Item}) => {
//     return (
//       <View
//         style={[
//           styles.slide,
//           {
//             backgroundColor: item.bg,
//           },
//         ]}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={item.image} style={styles.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };

  _keyExtractor = (item: Item) => item.title;

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>hello</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} /> */}
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
                    ? {backgroundColor: 'white', width: 30}
                    : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                ]}
                onPress={() => this.slider?.goToSlide(i, true)}
              />
            ))}
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>

        <LinearGradient
        colors={['rgb(66,101,252)', 'rgb(97,46,236)', 'rgb(138,0,221)']}
        style={styles.Touchable}>
        <Text
          style={{color: 'white', fontSize: 60, bottom: 16, fontWeight: '400'}}>
          →
        </Text>
      </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          onSkip={_onSkip}
          showSkipButton={true}
          keyExtractor={this._keyExtractor}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
        //   renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          showNextButton={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: Platform.OS === 'android' ? height * 1 : height * 0.9,
    width: width * 1,
    backgroundColor: 'rgb(79,0,135)',
  },
  mainvw: {
    width: width * 0.94,
    height: height,
    backgroundColor: 'rgb(86,166,36)',
  },
  img: {
    height: height * 0.4,
    width: width * 0.8,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  imgvw1: {
    height: height * 0.5,
    width: width * 0.94,
    backgroundColor: 'rgb(86,166,36)',
  },
  imgvw: {
    height: height * 0.5,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  maintext: {
    width: width * 0.8,
    height: Platform.OS === 'android' ? height * 0.3 : height * 0.25,
    alignSelf: 'center',
  },
  maintext1: {
    width: width * 0.8,
    height: Platform.OS === 'android' ? height * 0.15 : height * 0.11,
    justifyContent: 'center',
  },

  titles: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texttitle: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  // arrowvw: {
  //   width: width * 0.11,
  //   height: height * 0.1,
  //   justifyContent: 'center',
  //   alignSelf: 'flex-end',
  //   borderTopLeftRadius: 30,
  //   borderBottomLeftRadius: 30,
  // },
  // arrowvw1: {
  //   width: width * 0.11,
  //   height: height * 0.05,
  //   borderWidth: 1,
  //   borderColor: 'rgb(255,255,255)',
  //   borderRadius: 30,
  // },
  // arrowtxt: {
  //   fontSize: 38,
  //   fontWeight: '300',
  //   color: 'rgb(255,255,255)',
  //   width: width * 0.11,
  //   height: height * 0.05,
  //   textAlign: 'center',
  // },
});

export default Onboarding;
