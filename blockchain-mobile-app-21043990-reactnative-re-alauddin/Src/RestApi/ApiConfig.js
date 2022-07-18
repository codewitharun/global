// ************* BaseURL *************
export const ServerUrl = "https://java-blockchainapp.mobiloitte.org/"; // Main Staging Server URL

export const LoginUrl = ServerUrl + "auth";
export const SignUpUrl = ServerUrl + "account/signup";
export const MyAccountUrl = ServerUrl + "account/my-account";

export const ForgotPasswordUrl =
    ServerUrl + "account/forget-password/mobiloitApp";
export const ChangePasswordUrl = ServerUrl + "account/change-password";
export const ResendOtpUrl = ServerUrl + "account/resend-verify-email?";
export const SignUpVerifyUrl = ServerUrl + "account/verify-user";
export const SetPasswordUrl = ServerUrl + "account/reset-password";
export const BuyTokenUrl = ServerUrl + "wallet/buy-token";
export const CoinListUrl =
    ServerUrl + "wallet/wallet/get-all-user-balance-and-coinlist";

// ======== Redemption API ======== //
export const VendorListUrl = ServerUrl + "account/admin/user-management/vendor-search-filter"
// export const VendorDetailUrl = ServerUrl + "account/admin/user-management"

// Wallet Api
export const GetUserAddressUrl = ServerUrl + "wallet/get-address-new";
export const GetAllUserBalanceCoinListUrl =
    ServerUrl + "wallet/wallet/get-all-user-balance-and-coinlist";
export const GetTransactionsList =
    ServerUrl +
    "wallet/get-all-transaction-history?page=0&pageSize=10&coinName=&txnType=";
