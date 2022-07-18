import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { back } from 'react-native/Libraries/Animated/Easing';
const {height, width} = Dimensions.get('window');
const {Platform} = React;

const data = [
  {label: '  Item 1', value: '1'},
  {label: '  Item 2', value: '2'},
  {label: '  Item 3', value: '3'},
  {label: '  Item 4', value: '4'},
  {label: '  Item 5', value: '5'},
  {label: '  Item 6', value: '6'},
  {label: '  Item 7', value: '7'},
  {label: ' Item 8', value: '8'},
];

const dataa = [
  {label: '  Item 1', value: '1'},
  {label: '  Item 2', value: '2'},
  {label: '  Item 3', value: '3'},
  {label: '  Item 4', value: '4'},
  {label: '  Item 5', value: '5'},
  {label: '  Item 6', value: '6'},
  {label: '  Item 7', value: '7'},
  {label: ' Item 8', value: '8'},
];

const datta = [
  {label: '  Item 1', value: '1'},
  {label: '  Item 2', value: '2'},
  {label: '  Item 3', value: '3'},
  {label: '  Item 4', value: '4'},
  {label: '  Item 5', value: '5'},
  {label: '  Item 6', value: '6'},
  {label: '  Item 7', value: '7'},
  {label: ' Item 8', value: '8'},
];
const Transaction = ({navigation}) => {
  // const [value, setValue] = useState(null);
  const List = [
    {
      key: 1,
      value: '$204',
      doller: '104.13 BTC',
      feed: 'Withdraw',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/red.png'),
      textColor: 'red',
    },
    {
      key: 2,
      value: '$204 ',
      doller: '104.13 BTC',
      feed: 'Deposit',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/green.png'),

      textColor: 'green',
    },
    {
      key: 3,
      value: '$204',
      doller: '104.13 BTC',
      feed: 'Withdraw',
      date: 'Aug, 19,2019',

      src: require('./../../assets/images/transaction/red.png'),
      textColor: 'red',
    },
    {
      key: 4,
      value: '$204 ',
      doller: '104.13 BTC',
      feed: 'Deposit',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/green.png'),
      textColor: 'green',
    },
    {
      key: 5,
      value: '$204',
      doller: '104.13 BTC',
      feed: 'Withdraw',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/red.png'),
      textColor: 'red',
    },
    {
      key: 6,
      value: '$204 ',
      doller: '104.13 BTC',
      feed: 'Deposit',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/green.png'),

      textColor: 'green',
    },
    {
      key: 7,
      value: '$204',
      doller: '104.13 BTC',
      feed: 'Withdraw',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/red.png'),
      textColor: 'red',
    },
    {
      key: 8,
      value: '$204 ',
      doller: '104.13 BTC',
      feed: 'Deposit',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/green.png'),
      textColor: 'green',
    },
    {
      key: 9,
      value: '$204',
      doller: '104.13 BTC',
      feed: 'Withdraw',
      date: 'Aug, 19,2019',
      // src: require('./../../assets/images/transaction/red.png'),
      src: require('./../../assets/images/transaction/red.png'),
      textColor: 'red',
    },
    {
      key: 10,
      value: '$204 ',
      doller: '104.13 BTC',
      feed: 'Deposit',
      date: 'Aug, 19,2019',
      src: require('./../../assets/images/transaction/green.png'),

      textColor: 'green',
    },
  ];

  const [value, setValue] = useState(null);

  const [isFocus, setIsFocus] = useState(false);

  const [valuee, setValuee] = useState(null);

  const [isFocuss, setIsFocuss] = useState(false);
  const [valuue, setValuue] = useState(null);

  const [isFocuus, setIsFocuus] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.Transaction}>
          <View style={styles.ArrowV}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <Image
                source={require('../../assets/images/transaction/leftA.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 22, color: 'white'}}>All Transaction</Text>
          </View>

          <View style={styles.PrinterV}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/transaction/close.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/images/transaction/printer.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.TransTypeV}>
          <View style={styles.TransVW}>
            {/* {renderLabel()} */}
            <Dropdown
              style={styles.dropdow}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocuss ? ' Transaction Type' : ' ...'}
              searchPlaceholder="Search..."
              value={valuee}
              onFocus={() => setIsFocuss(true)}
              onBlur={() => setIsFocuss(false)}
              onChange={item => {
                setValuee(item.valuee);
                setIsFocuss(false);
              }}
            />
          </View>
          <View style={styles.Coin}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              
              data={dataa}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? ' Coin' : ' ...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.method}>
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={datta}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocuus ? ' Choose' : '...'}
              searchPlaceholder="Search..."
              value={valuue}
              onFocus={() => setIsFocuus(true)}
              onBlur={() => setIsFocuus(false)}
              onChange={item => {
                setValuue(item.valuue);
                setIsFocuus(false);
              }}
            />
          </View>
        </View>

        <View style={styles.listvw}>
          <FlatList
            data={List}
            renderItem={({item}) => {
              return (
                <View style={styles.list}>
                  <View style={{width: 50, alignItems: 'center'}}>
                    <Image source={item.src} style={{height: 45, width: 40}} />
                  </View>

                  <View style={{width: width * 0.5}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '600',
                          color: 'rgb(0,0,0)',
                        }}>
                        {item.value}
                      </Text>
                    </View>
                    <View>
                      <Text style={{color: '#0f0f0f'}}>{item.doller}</Text>
                    </View>
                  </View>
                  <View style={styles.flex}>
                    <View>
                      <Text style={[styles.feedback, {color: item.textColor}]}>
                        {item.feed}
                      </Text>
                    </View>

                    <View>
                      <Text style={{color: '#0f0f0f'}}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'rgb( 245,245,245)',
  },
  topvw: {
    height: height * 0.19,
    width: width * 1,
    backgroundColor: 'rgb(97,0,169)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listvw: {
    height: height * 0.8,
    width: width * 1,
    // backgroundColor: 'blue',
  },
  list: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: width * 0.9,
    height: height / 14,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 7,
    backgroundColor: 'rgb(255,255,255)',
    borderWidth: 1,
    borderColor: '#b0abb3',
    borderBottomWidth: 2.5,
    borderBottomColor: '#b0abb3',
  },
  feedback: {
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },

  Transaction: {
    height: height * 0.09,
    width: width * 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(93,44,155)',
    alignItems: 'center',
  },

  ArrowV: {
    height: height * 0.065,
    width: width * 0.55,
    // backgroundColor:'blue',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  PrinterV: {
    height: height * 0.065,
    width: width * 0.23,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // backgroundColor:'blue',
    flexDirection: 'row',
  },
  TransTypeV: {
    width: width * 1,
    height: height / 11,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignSelf: 'center',
    // borderRadius: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Coin: {
    height: height * 0.05,
    width: width * 0.26,
    // backgroundColor: 'green',
    color: 'black',

    // justifyContent: 'center',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgb( 205,205,205)',
  },
  method: {
    height: height * 0.05,
    width: width * 0.25,

    // backgroundColor: 'blue',
    color:'black',

    justifyContent: 'center',
    // borderRadius:19,
    borderRightWidth: 2,
    borderBottomLeftRadius: 19,
    borderTopLeftRadius: 19,
    borderWidth: 1,
    borderColor: 'rgb( 205,205,205)',
  },
  TransVW: {
    // flexDirection: 'row',
    height: height * 0.06,
    // alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.38,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgb( 205,205,205)',
  },
  dropdown: {
    height: 50,
backgroundColor:'red',
    // borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    // backgroundColor: 'green',
    left: 22,
    top: 8,
  
    
    fontSize: 11,
    color: 'black',
  },
  placeholderStyle: {
    fontSize:11,
    color: 'black',
    textAlign:'center',
    // backgroundColor:'red',
  },
  selectedTextStyle: {
    fontSize: 11,
    color: 'black',
    // backgroundColor:'red'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default Transaction;
