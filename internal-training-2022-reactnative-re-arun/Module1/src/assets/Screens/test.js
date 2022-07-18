import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, StyleSheet, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import react from 'react';
const Test = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModalPress = () => setIsModalVisible(true);
  const handleCloseModalPress = () => setIsModalVisible(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
       <Text onPress={() => navigation.navigate("Home")}> helllll</Text>
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default Test;
