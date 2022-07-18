import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpNo from "../screens/Auth/SignUpNo";
import Otp from "../screens/Auth/Otp";
import Verified from "../screens/Auth/Verified";
import RegistrationSuccess from "../screens/Auth/RegistrationSuccess";
import Login from "../screens/Auth/Login";
import Splash from "../screens/Splash/Splash";
import Swiper from "../screens/Splash/Swiper";
import CreateNew_Account from "../screens/CreateNew_Account/CreateNew_Account";
import Referal_code from "../screens/Referal_code/Referal_code";
import Signup1 from "../screens/Signup1/Signup1";
import VerifyIdentity from "../screens/Auth/VerifyIdentity";
import FullLegalName from "../screens/Auth/FullLegalName";
import Instructions from "../screens/Auth/Instructions";
import BottomTab from './BottomTab'
import Drawer from './Drawer'
import RecieveBitcoin from '../screens/RecieveBitcoin/RecieveBitcoin'
import SendToContact from "../screens/SendToContacts/SendToContact";
import ContactDetail from "../screens/SendToContacts/ContactDetail";
import AddProfile from "../screens/SendToContacts/AddProfile";
import SendBlockChain from "../screens/SendToContacts/SendBlockChain";
import TransactionSuccess from "../screens/SendToContacts/TransactionSuccess";
import Pay from "../screens/SendToContacts/Pay";
import SelectId_type from "../screens/SelectId_type/SelectId_type";
import ScanDocument from "../screens/ScanDocument/ScanDocument";
import CompleteKyc from "../screens/CompleteKyc/CompleteKyc";
import VerificationPending from "../screens/VerificationPending/VerificationPending";
import ScanPhoto from "../screens/ScanPhoto/ScanPhoto";
import GiftCards from "../screens/SendToContacts/GiftCards";
import Home from "../screens/Home/Home";
import FiatWallet from "../screens/Home/FiatWallet";
import AddBank from "../screens/AddBank/AddBank";
import TransactionSuccessful from "../screens/AddBank/TransactionSuccessful";
import AddBankWithdraw from "../screens/AddBank/AddBankWithdraw";
import CryptoMarket from "../screens/Market/CryptoMarket";
import ExistingLogin from "../screens/ExistingLogin/ExistingLogin"
import Settings from "../screens/Settings/Settings"
import CoinDetails from "../screens/Market/CoinDetails";
import AddCard from "../screens/Market/AddCard";
import AddCardOtp from "../screens/Market/AddCardOtp";
import AddedSuccesfully from "../screens/Market/AddedSuccesfully";
import ReferralBonus from "../screens/Reward/ReferralBonus";
import PayRewards from "../screens/Reward/PayRewards";
import SelectCardApplied from "../screens/Card/SelectCardApplied";
import ReviewUpdate from "../screens/Card/ReviewUpdate";
import AddContect from "../screens/AddContect/AddContect";
import CryptoMarkitContect from "../screens/CryptoMarkitContect/CryptoMarkitContect";
import CryptoMarkitProfile from "../screens/CryptoMarkitProfile/CryptoMarkitProfile";
import CryptoMarkitEditProfile from "../screens/CryptoMarkitEditProfile/CryptoMarkitEditProfile";
import SelectLanguage from "../screens/SelectLanguage/SelectLanguage";
import BankDetails from "../screens/BankDetails/BankDetails";
import AddAnotherBank from "../screens/AddAnotherBank/AddAnotherBank";
import AddBankVerify from "../screens/AddBankVerify/AddBankVerify";
import TransactionHistory from "../screens/TransactionHistory/TransactionHistory";
import Card from "../screens/Card/Card";
import CardDetails from "../screens/Card/CardDetails";
import CardTransaction from "../screens/Card/CardTransaction";
import Crypto_Earn from "../screens/Crypto_Earn/Crypto_Earn";
import Wallet from "../screens/Home/Wallet";
import Market from "../screens/Market/Market";
import Reward from "../screens/Reward/Reward";
import LaunchScreen from "../screens/LaunchScreen/LaunchScreen";
import PassCodeChange from "../screens/PassCodeChange/PassCodeChange";
import PassCodeSetting from "../screens/PassCodeSetting/PassCodeSetting";
import Factor_Authentication from "../screens/Factor_Authentication/Factor_Authentication";
import EnableFactor_Authentication from "../screens/EnableFactor_Authentication/EnableFactor_Authentication";
import NotificationSetting from "../screens/NotificationSetting/NotificationSetting";
import HelpCenter from "../screens/HelpCenter/HelpCenter";
import ContectSupport from "../screens/ContectSupport/ContectSupport";
import Currency from "../screens/Currency/Currency";
import PrivacyPolicy from "../screens/Auth/PrivacyPolicy";
import TermsAndConditions from "../screens/Auth/TermsAndConditions";

const RootStack = createNativeStackNavigator()

const Routes = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="Swiper" component={Swiper} />
            <RootStack.Screen name="SignUpNo" component={SignUpNo} />
            <RootStack.Screen name="Otp" component={Otp} />
            <RootStack.Screen name="Verified" component={Verified} />
            <RootStack.Screen
                name="RegistrationSuccess"
                component={RegistrationSuccess}
            />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen
                name="CreateNew_Account"
                component={CreateNew_Account}
            />
            <RootStack.Screen name="SelectId_type" component={SelectId_type} />
            <RootStack.Screen name="ScanDocument" component={ScanDocument} />
            <RootStack.Screen name="ScanPhoto" component={ScanPhoto} />
            <RootStack.Screen name="CompleteKyc" component={CompleteKyc} />
            <RootStack.Screen
                name="VerificationPending"
                component={VerificationPending}
            />
            <RootStack.Screen name="Referal_code" component={Referal_code} />
            <RootStack.Screen name="Signup1" component={Signup1} />
            <RootStack.Screen name="VerifyIdentity" component={VerifyIdentity} />
            <RootStack.Screen name="FullLegalName" component={FullLegalName} />
            <RootStack.Screen name="Instructions" component={Instructions} />
            <RootStack.Screen name='Home' component={Drawer} />
            <RootStack.Screen name='RecieveBitcoin' component={RecieveBitcoin} />
            <RootStack.Screen name='SendToContact' component={SendToContact} />
            <RootStack.Screen name='ContactDetail' component={ContactDetail} />
            <RootStack.Screen name='AddProfile' component={AddProfile} />
            <RootStack.Screen name='SendBlockChain' component={SendBlockChain} />
            <RootStack.Screen name='TransactionSuccess' component={TransactionSuccess} />
            <RootStack.Screen name='Pay' component={Pay} />
            <RootStack.Screen name='GiftCards' component={GiftCards} />
            <RootStack.Screen name='HomePage' component={Home} />
            <RootStack.Screen name='FiatWallet' component={FiatWallet} />
            <RootStack.Screen name='AddBank' component={AddBank} />
            <RootStack.Screen name='TransactionSuccessful' component={TransactionSuccessful} />
            <RootStack.Screen name='AddBankWithdraw' component={AddBankWithdraw} />
            <RootStack.Screen name='CryptoMarket' component={CryptoMarket} />
            <RootStack.Screen name="ExistingLogin" component={ExistingLogin} />
            <RootStack.Screen name="Settings" component={Settings} />
            <RootStack.Screen name="CoinDetails" component={CoinDetails} />
            <RootStack.Screen name="AddCard" component={AddCard} />
            <RootStack.Screen name="AddCardOtp" component={AddCardOtp} />
            <RootStack.Screen name="AddedSuccesfully" component={AddedSuccesfully} />
            <RootStack.Screen name="ReferralBonus" component={ReferralBonus} />
            <RootStack.Screen name="PayRewards" component={PayRewards} />
            <RootStack.Screen name="SelectCardApplied" component={SelectCardApplied} />
            <RootStack.Screen name="ReviewUpdate" component={ReviewUpdate} />
            <RootStack.Screen
                name="CryptoMarkitContect"
                component={CryptoMarkitContect}
            />

            <RootStack.Screen
                name="CryptoMarkitProfile"
                component={CryptoMarkitProfile}
            />
            <RootStack.Screen name="AddContect" component={AddContect} />
            <RootStack.Screen
                name="CryptoMarkitEditProfile"
                component={CryptoMarkitEditProfile}
            />
            <RootStack.Screen name="SelectLanguage" component={SelectLanguage} />
            <RootStack.Screen name="BankDetails" component={BankDetails} />
            <RootStack.Screen name="AddAnotherBank" component={AddAnotherBank} />
            <RootStack.Screen name="AddBankVerify" component={AddBankVerify} />
            <RootStack.Screen
                name="TransactionHistory"
                component={TransactionHistory}
            />
            <RootStack.Screen
                name="CardDetails"
                component={CardDetails}
            />
            <RootStack.Screen
                name="CardTransaction"
                component={CardTransaction}
            />
            <RootStack.Screen
                name="Crypto_Earn"
                component={Crypto_Earn}
            />
            <RootStack.Screen
                name="Wallet"
                component={Wallet}
            />
            <RootStack.Screen
                name="Market"
                component={Market}
            />
            <RootStack.Screen
                name="Reward"
                component={Reward}
            />
            <RootStack.Screen
                name="Card"
                component={Card}
            />
            <RootStack.Screen name="LaunchScreen" component={LaunchScreen} />

            <RootStack.Screen name="PassCodeSetting" component={PassCodeSetting} />
            <RootStack.Screen name="PassCodeChange" component={PassCodeChange} />
            <RootStack.Screen
                name="Factor_Authentication"
                component={Factor_Authentication}
            />
            <RootStack.Screen
                name="EnableFactor_Authentication"
                component={EnableFactor_Authentication}
            />
            <RootStack.Screen
                name="NotificationSetting"
                component={NotificationSetting}
            />
            <RootStack.Screen name="HelpCenter" component={HelpCenter} />
            <RootStack.Screen name="ContectSupport" component={ContectSupport} />
            <RootStack.Screen name="Currency" component={Currency} />
            <RootStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <RootStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        </RootStack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})