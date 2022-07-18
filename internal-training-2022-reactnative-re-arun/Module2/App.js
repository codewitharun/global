import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Allsport from './src/screens/Winsum All sports/Allsport';
import Account from './src/screens/Your account/Account';
import Level from './src/screens/Level/Level';
import Winsum from './src/screens/Winsum/Winsum';
import Details from './src/screens/Account details/Details';
import Transaction from './src/screens/all transaction/Transaction';
import Bitbharat from './src/screens/bitbharat/Bitbharat';
import Onbor from './src/screens/onbor';
import Splash from './src/screens/splas';
import Test from './src/screens/test';
import Onboarding from './src/screens/onboard';
import Appp from './src/screens/test';
function HomeScreen ({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Button
        title="Go to Splash"
        onPress={() => navigation.navigate('Splash')}
      />
       
       <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Onboard')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Bitbharat"
        onPress={() => navigation.navigate("Bitbharat")}
      />
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
      <Button
        title="Go to allsport"
        onPress={() => navigation.navigate('Allsport')}
      />
      <Button
        title="Go to Levels"
        onPress={() => navigation.navigate('Level')}
      />
      <Button
        title="Go to Transaction"
        onPress={() => navigation.navigate('Transaction')}
      />
      <Button
        title="Go to Winsum"
        onPress={() => navigation.navigate(' Winsum')}
      />
     
    </View>
  );
}
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Splash' component={Splash} />
        {/* <Stack.Screen name="Onboard" component={Onbor} /> */}
        <Stack.Screen name='Onboard' component={Onboarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Allsport" component={Allsport} />
     <Stack.Screen name='Test' component={Appp} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name=" Winsum" component={Winsum} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Bitbharat" component={Bitbharat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({});
