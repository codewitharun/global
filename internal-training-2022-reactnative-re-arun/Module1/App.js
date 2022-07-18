// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Insurance from './src/assets/Screens/insurence';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Investment from './src/assets/Screens/investment';
import Register from './src/assets/Screens/register';
import Payment from './src/assets/Screens/payment';
import Login from './src/assets/Screens/login';
import Withdraw from './src/assets/Screens/withdraw';
import Modals from './src/assets/Screens/modalt1';
import Test from './src/assets/Screens/test';

import {SafeAreaView} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
   
      <View style={{alignSelf:'center'}}>
        <Text style={{color:'black'}}>Click on the Icons to move to the desired location</Text>
      </View>

      <View
        style={{
          flex: 1,
          
          alignItems: 'center',
          justifyContent: 'space-evenly',
          alignSelf:"center",
          flexDirection: 'column',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Insurence')}>
          <Icon name="rocket" size={30} color={'black'} />
          <Text style={{color:'black'}}>Insurence</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Investment')}>
          <Icon name="currency-rupee" size={30} color={'black'} />
          <Text style={{color:'black'}}>Investment</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Icon name="ab-testing" size={30} color={'black'} />
          <Text style={{color:'black'}}>Register</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Icon name="currency-usd" size={30} color={'black'} />
          <Text style={{color:'black'}}>Payment</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="bag-personal" size={30} color={'black'} />
          <Text style={{color:'black'}}>Login</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Withdraw')}>
          <Icon name="credit-card" size={30} color={'black'} />
          <Text style={{color:'black'}}>Withdraw</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Modals')}>
          <Icon name="hospital" size={30} color={'black'} />
          <Text style={{color:'black'}}>Modal</Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Test')}>
          <Icon name="hospital" size={30} color={'black'} />
          <Text>Test Screen</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{alignSelf:'center'}}>
        <Text style={{color:'black'}}>Please use light mode for better experience</Text>
      </View>
      
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Insurence"
          component={Insurance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Investment"
          component={Investment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Modal1" component={Modals} options={{headerShown:false}}/> */}
        <Stack.Screen
          name="Modals"
          component={Modals}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
