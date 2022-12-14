import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adress from './assets/Screens/adress';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Address')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Address" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Address" component={Adress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;