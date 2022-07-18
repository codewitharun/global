import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
  
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const Flat = [
  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD   ',
  },
  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD 30',
  },

  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD 30',
  },

  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD 30',
  },

  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD 30',
  },
  {
    name: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    name1: 'Units : 4 UNIT/USD 30',
  },
];

const Modals = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModalPress = () => setIsModalVisible(true);
  const handleCloseModalPress = () => setIsModalVisible(false);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.main}>
          <View style={{height: height * 0.020}}></View>
          <View style={styles.inv}>
            
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <View style={styles.vie2}>
                      <Icon
                name="arrow-left"
                size={35}
                style={styles.ico}
                color={'white'}
              />
                  </View>
                </TouchableOpacity>
                <View style={styles.vie3}>
                  <Text style={styles.txt4}>Notifications</Text>
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
                      <View style={styles.cont}>
                        {/* <View style={{justifyContent: 'center'}}>
                      <Image source={item.src} style={styles.img} />
                    </View> */}
                        <View style={styles.container}>
                          <View style={styles.container1}>
                            <Text style={styles.txt}>{item.name}</Text>
                            <View style={{height: height * 0.01}}></View>
                            <Text style={styles.txt1}>{item.name1}</Text>
                            <View style={{height: height * 0.027}}></View>
                            {/* <Text style={styles.txt2}>{item.name2}</Text> */}
                          </View>
                        </View>
                      </View>
                      <View style={{height: height * 0.02}}></View>
                      <View></View>
                    </View>
                  );
                }}
              />
         
            </View>
            
            <View>
            <View style={styles.centeredView}>
      <TouchableOpacity  onPress={handleOpenModalPress}  style={[styles.button, styles.buttonOpen]} >
      <Text style={styles.textStyle}>
      Log Out
      </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} hasBackdrop={true}>
        
        <View style={styles.centeredView}>
                      
                      <View style={{height:height/1}}></View>
                      <View style={styles.modalView}>
                      <View style={{height:height*0.03}}></View>
                        <Text style={styles.modalText}>Logout</Text>
                        
                        <Text style={styles.modalTextt}>
                          Are you sure you want to log  
                        </Text>
                   
                        
                        <Text style={styles.modalTexttt} >
                          out  from the app ?
                        </Text>
                        <View style={{height:height*0.02}}></View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCloseModalPress}>
                            <Text style={styles.textStyle}>No</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCloseModalPress}>
                            <Text style={styles.textStyle}>Yes</Text>
                          </TouchableOpacity>
  
                          
                        </View>
                      </View>
                    </View>
      </Modal>
    </View>
    
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Modals;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(240, 241, 242)',
    height: height * 1,
    width: width * 1,
  },
  ico: {
    width: width * 0.08,
    alignSelf:'center'
  },
  container: {
    // backgroundColor:'yellow',
    height: height * 0.1,
    width: width * 0.8,
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  container1: {
    // backgroundColor:'red',
    height: height * 0.09,
    width: width * 0.9,
    // alignSelf: 'center',
  },
  txt: {
    fontSize: 12,
    fontWeight: '500',
    color:'black'
  },
  txt1: {
    color: 'grey',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'right',
    // width:320,
    right:25
  },
  txt2: {
    color: 'grey',
    fontSize: 10,
    fontWeight: '600',
  },
  vie2: {
    backgroundColor: 'rgb(113,222,207)',
    height: height * 0.06,
    width: width * 0.12,
    // alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txt5: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  vie3: {
    justifyContent: 'center',
    // backgroundColor:'green',
    width: width / 1.7,
    alignSelf: 'center',
  },
  txt4: {
    textAlign: 'center',
    fontSize: 27,
    color: 'black',
    fontWeight: 'bold',
  },
  inv: {
    width: width / 1.1,
    alignSelf: 'center',
    // height:height*1
  },
  cont: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: width * 0.89,
    alignSelf: 'center',
    height: height * 0.1,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    //overflow: 'hidden',
  },
  centeredView: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: width * 1,
    height: height/3.2,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 50,
    shadowRadius: 150,
    elevation: 6,
    // justifyContent: 'flex-end',
    alignContent:'center',
    // alignSelf:'flex-end'
  },
  button: {
    height: 50,
    width: 150,
    elevation: 2,
    borderRadius:100,
    justifyContent: 'space-around',
  },
  buttonOpen: {
    backgroundColor: 'rgb(113,222,207)',
  },
  buttonClose: {
    backgroundColor: 'rgb(113,222,207)',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    // textAlign: "center",
    alignSelf: 'center',
    fontSize:20,
    
  },
  modalText: {
    height: 40,
    fontSize:26,
    textAlign: 'center',
    fontWeight:'bold', 
    color:'black'
    
  },
  modalTextt: {
    height: 30,
    width:width*0.5,
    alignSelf:'center',
    textAlign: 'center',
    flex: 0, flexWrap: 'wrap',
    lineHeight:40,
    color:'black'
  
    
  },
  modalTexttt: {
    height: 30,
    width:width*0.5,
    alignSelf:'center',
    textAlign: 'center',
    flex: 0, flexWrap: 'wrap',
    lineHeight:20,
    color:'black'
    
  },
  
});
