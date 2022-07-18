import {
  Image,
  View,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  BackHandler,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect} from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const {height, width} = Dimensions.get('window');

const Square = ({isLight, selected}) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgb( 0,73,254)' : 'grey';
  } else {
    backgroundColor = 'white';
  }

  return (
    <View
      style={{
        width: 4,
        height: 4,
        marginHorizontal: 1,
        backgroundColor,
        bottom: 106,
        right: 134,

        width: selected ? 20 : 4,
        borderRadius: 50,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({isLight, ...props}) => (
  <TouchableOpacity
    title={'Done'}
    onPress={() => navigation.navigate("Home")}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: 'red',
    }}
    textStyle={{color: color(isLight)}}
    {...props}
  />
);

const Skip = ({isLight, skipLabel, ...props}) => (
  <Button
    title={'Skip'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    textStyle={{color: color(isLight)}}
    {...props}>
    {skipLabel}
  </Button>
);

const Next = ({isLight, ...props}) => (
  <TouchableOpacity
  onPress={() => navigation.navigate(Next)}
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{color: color(isLight)}}
    {...props}>
    <View style={{bottom: 52, left: -259}}>
      <LinearGradient
        colors={['rgb(66,101,252)', 'rgb(97,46,236)', 'rgb(138,0,221)']}
        style={styles.Touchable}>
        <Text
          style={{color: 'white', fontSize: 60, bottom: 16, fontWeight: '400'}}>
          →
        </Text>
      </LinearGradient>
    </View>
  </TouchableOpacity>
);

// const onboardingRef = useRef<Onboarding>(null);
const completeOnboarding = async () => {
  await AsyncStorage.setItem("HasOnboarder",JSON.stringify({hasOnvarded:true
  }));
  navigation.navigate("Home")
}
const CustomButtons = ({navigation}) => (
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        // {text: 'YES', onPress: () => BackHandler.exitApp()},
        
        {text: 'YES', onPress: () => navigation.navigate('Home')},
        
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []),
  (
    <Onboarding
      DotComponent={Square}
      NextButtonComponent={Next}
      // SkipButtonComponent={Skip}
      showPagination={true}
      DoneButtonComponent={Done}
      // bottomBarColor=,
      bottomBarHeight={1}
      onSkip={() => navigation.navigate("Home")}
      // titleStyles={{color: 'blue'}} // set default color for the title
      pages={[
        {
          backgroundColor: '#fff',

          image: (
            <Image
              source={require('../assets/images/onboard/Onboarding.jpeg')}
              style={{height: height * 0.5, width: width * 1, bottom: 5}}
            />
          ),
          title: 'Safe & Secure',

          subTitleStyles: {
            color: 'black',
            height: height * 0.1,
            width: width * 0.72,
            textAlign: 'justify',
            fontWeight: '400',
            right: 28,
          },
          subtitle:
            'BUY ,SELL crypto in few clicks. SEND and RECIEVE crypto for free',

          titleStyles: {
            color: 'black',
            height: height * 0.06,
            width: width * 0.45,
            left: -80,
            fontWeight: '400',
            fontSize: 28,
          }, // overwrite default color
        },
        {
          backgroundColor: '#fff',

          image: (
            <Image
              source={require('../assets/images/onboard/Onboarding.jpeg')}
              style={{height: height * 0.5, width: width * 1, bottom: 5}}
            />
          ),
          title: 'Safe & Secure',

          subTitleStyles: {
            color: 'black',
            height: height * 0.1,
            width: width * 0.72,
            textAlign: 'justify',
            fontWeight: '400',
            right: 28,
          },
          subtitle:
            'BUY ,SELL crypto in few clicks. SEND and RECIEVE crypto for free',

          titleStyles: {
            color: 'black',
            height: height * 0.06,
            width: width * 0.45,
            left: -80,
            fontWeight: '400',
            fontSize: 28,
          }, // overwrite default color
        },
        {
          backgroundColor: '#fff',

          image: (
            <Image
              source={require('../assets/images/onboard/Onboarding.jpeg')}
              style={{height: height * 0.5, width: width * 1, bottom: 5}}
            />
          ),
          title: 'Safe & Secure',

          subTitleStyles: {
            color: 'black',
            height: height * 0.1,
            width: width * 0.72,
            textAlign: 'justify',
            fontWeight: '400',
            right: 28,
          },
          subtitle:
            'BUY ,SELL crypto in few clicks. SEND and RECIEVE crypto for free',

          titleStyles: {
            color: 'black',
            height: height * 0.06,
            width: width * 0.45,
            left: -80,
            fontWeight: '400',
            fontSize: 28,
          }, // overwrite default color
        },
      ]}
    />
  )
);

export default CustomButtons;

const styles = StyleSheet.create({
  Touchable: {
    height: height * 0.09,
    width: width * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: 'rgb(0,138,181)',
    justifyContent: 'center',
    // flex: 1,
  },
});
