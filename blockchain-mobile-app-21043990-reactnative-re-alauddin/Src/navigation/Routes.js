import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../Screens/Splash/Splash";
import Login from "../Screens/Auth/Login";
import DrawerRoutes from "./DrawerRoutes";
// import BottomTab from "../navigation/BottomTab";
// import WalletDetails from "../screens/WalletDetails/WalletDetails";
// import TransactionDetails from "../screens/TransactionDetails.js/TransactionDetails";
// import Wallet from "../screens/Wallet/Wallet";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";
import Kyc from "../Screens/Kyc/Kyc";
// import AddBank from "../screens/AddBank/AddBank";
// import WithDraw from "../screens/WithDraw/WithDraw";
import Profile from "../Screens/Profile/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
// import UsdtAddress from "../screens/Usdtaddress/Usdtaddress";
// import BuySell from "../screens/BuySell/BuySell";
// import ConfirmTrans from "../screens/BuySell/ConfirmTrans";
// import Redemption from "../screens/Redemption/Redemption";
// import VendorsDetails from "../screens/Redemption/VendorsDetails";
// import DrawerRoutes from "./DrawerRoutes";
import Register from "../Screens/Auth/Register";
// import ForgotPassword from "../screens/Auth/ForgotPassword";
// import VerifyOtp from "../screens/Auth/VerifyOtp";
// import ResetPassword from "../screens/Auth/ResetPassword";
// import Support from "../screens/Support/Support";
// import CreateTicket from "../screens/Support/CreateTicket";
// import SignUpVerify from "../screens/Auth/SignUpVerify";
// import TransactionHistory from "../screens/TransactionHistory/TransactionHistory";
// import KycSuccess from "../screens/KYC/KycSuccess";

const rootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <rootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <rootStack.Screen name="Splash" component={Splash} />
        <rootStack.Screen name="Login" component={Login} />
        <rootStack.Screen name="DashBoard" component={DrawerRoutes} />
        {/* <rootStack.Screen name="WalletDetails" component={Wall} /> */}
        {/* <rootStack.Screen
          name="TransactionDetails"
          component={Tra}
        /> */}
        {/* <rootStack.Screen name="Wallet" component={Wallet} /> */}
        <rootStack.Screen name="ChangePassword" component={ChangePassword} />
        <rootStack.Screen name="Kyc" component={Kyc} />
        {/* <rootStack.Screen name="AddBank" component={AddBank} /> */}
        {/* <rootStack.Screen name="WithDraw" component={WithDraw} /> */}
        <rootStack.Screen name="Profile" component={Profile} />
        <rootStack.Screen name="EditProfile" component={EditProfile} />
        {/* <rootStack.Screen name="UsdtAddress" component={UsdtAddress} /> */}
        {/* <rootStack.Screen name="BuySell" component={BuySell} /> */}
        {/* <rootStack.Screen name="ConfirmTrans" component={ConfirmTrans} /> */}
        {/* <rootStack.Screen name="Redemption" component={Redemption} /> */}
        {/* <rootStack.Screen name="VendorsDetails" component={VendorsDetails} /> */}
        <rootStack.Screen name="Register" component={Register} />
        {/* <rootStack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
        {/* <rootStack.Screen name="VerifyOtp" component={VerifyOtp} /> */}
        {/* <rootStack.Screen name="SignUpVerify" component={SignUpVerify} /> */}
        {/* <rootStack.Screen name="ResetPassword" component={ResetPassword} /> */}
        {/* <rootStack.Screen name="Support" component={Support} /> */}
        {/* <rootStack.Screen name="CreateTicket" component={CreateTicket} /> */}
        {/* <rootStack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
        />
        <rootStack.Screen
          name="KycSuccess"
          component={KycSuccess}
        /> */}
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
