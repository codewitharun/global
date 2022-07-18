import { StyleSheet, ActivityIndicator, ImageBackground, Alert, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { androidCameraPermission } from '../../utils/Permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../Components/Header';
import axios from 'axios';
import moment from 'moment';
import { MyAccountUrl } from '../../RestApi/ApiConfig';
const { height, width } = Dimensions.get("screen")

const progressStepsStyle = {
    activeStepIconBorderColor: '#0a0d64',
    activeLabelColor: '#0a0d64',
    activeStepNumColor: 'white',
    activeStepIconColor: '#0a0d64',
    completedStepIconColor: '#0a0d64',
    completedProgressBarColor: '#0a0d64',
    completedCheckColor: 'white'
};

const Kyc = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [address, setAddress] = useState("Residential");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [photo, setPhoto] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [idFront, setIdFront] = useState("");
    const [idBack, setIdBack] = useState("");
    const [selfie, setSelfie] = useState("");
    const [addressFront, setAddressFront] = useState("");
    const [addressFrontPerma, setAddressFrontPerma] = useState("");
    const [addressBack, setAddressBack] = useState("");
    const [addressBackPerma, setAddressBackPerma] = useState("");
    const [docIdNum, setDocIdNum] = useState("");
    const [docName, setDocName] = useState("");

    useEffect(() => {
        GetAccountApi()
    }, [])

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", moment(date).format("MM-DD-YYYY"));
        setDate(moment(date).format("MM-DD-YYYY"))
        hideDatePicker();
    };

    // ************* On Select Image Picker *************
    const onSelectImage = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onCamera },
                { text: "Gallary", onPress: onGallary },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onIdFornt = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onIdFrontCamera },
                { text: "Gallary", onPress: onGallaryIdFront },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onIdBack = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onIdBackCamera },
                { text: "Gallary", onPress: onGallaryIdBack },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onSelfieWithId = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onSelfieWithIdCamera },
                { text: "Gallary", onPress: onGallarySelfie },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onAddressProofFront = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onAddressProofFrontCamera },
                { text: "Gallary", onPress: onGallaryAddressFront },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onAddressProofFrontPermanent = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onAddressProofFrontCameraPermanent },
                { text: "Gallary", onPress: onGallaryAddressFrontPermanent },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onAddressProofBack = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onAddressProofBackCamera },
                { text: "Gallary", onPress: onGallaryAddressBack },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    const onAddressProofBackPermanent = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onAddressProofBackCameraPermanent },
                { text: "Gallary", onPress: onGallaryAddressBackPermanent },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    // ************* On Camera Picker *************
    const onCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera =====", image);
            setPhoto(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onIdFrontCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Id Front =====", image);
            setIdFront(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onIdBackCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Id Back =====", image);
            setIdBack(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onSelfieWithIdCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Selfie =====", image);
            setSelfie(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onAddressProofFrontCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Address Front =====", image);
            setAddressFront(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onAddressProofFrontCameraPermanent = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Address Front =====", image);
            setAddressFrontPerma(image.path);

            // UploadFileApi(image.path);
        });
    };

    const onAddressProofBackCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Address Back =====", image);
            setAddressBack(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onAddressProofBackCameraPermanent = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera Address Back =====", image);
            setAddressBackPerma(image.path);
            // UploadFileApi(image.path);
        });
    };

    // ************* On Gallary Picker *************
    const onGallary = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image", image);
            setPhoto(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onGallaryIdFront = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image Id Front", image);
            setIdFront(image.path);
            uploadIdFront(image)
            // UploadFileApi(image.path);
        });
    };

    const onGallaryIdBack = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image Id Back", image);
            setIdBack(image.path);
            uploadIdBack(image)
            // UploadFileApi(image.path);
        });
    };

    const onGallarySelfie = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image Selfie", image);
            setSelfie(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onGallaryAddressFront = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image Address front", image);
            setAddressFront(image.path);
            // UploadFileApi(image.path);
        });
    };
    const onGallaryAddressFrontPermanent = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image Address front", image);
            setAddressFrontPerma(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onGallaryAddressBack = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image address back", image);
            setAddressBack(image.path);
            // UploadFileApi(image.path);
        });
    };

    const onGallaryAddressBackPermanent = () => {
        console.log("In Gallery")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image address back", image);
            setAddressBackPerma(image.path);
            // UploadFileApi(image.path);
        });
    };

    // ========= GetAccount Pass API ====== //
    const GetAccountApi = async () => {
        const Value = await AsyncStorage.getItem("token");
        setIsLoading(true);
        axios({
            method: "GET",
            url: "https://java-blockchainapp.mobiloitte.org/account/my-account",
            headers: {
                authorization: `Bearer ${Value}`,
                "content-type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== GetAccountApi Response ======", response);
                if (response.data.status === 200) {
                    setDetails(response.data.data)
                    setIsLoading(false);
                } else {
                    alert("No Data Found");
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log("===== GetAccountApi Catch Error ======", err);
                setIsLoading(false);
            });
    };

    // ========= Upload Front ID API ====== //
    const uploadIdFront = async (imagePath) => {
        const Value = await AsyncStorage.getItem("token");
        const formData = new FormData();
        formData.append("file", {
            uri: imagePath.path,
            name: "image",
            type: imagePath.mime,
        });
        axios({
            method: "POST",
            url: "https://java-blockchainapp.mobiloitte.org/account/upload-file",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(async (response) => {
                console.log("====== Upload Response ======", response);
                if (response.data.status === 200) {
                    setIdFront(response.data.data)
                    setIsLoading(false);
                } else {
                    alert("Document Not Uploaded");
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log("===== Upload Catch Error ======", err.response);
                setIsLoading(false);
            });
    };

    // ========= Upload Back ID API ====== //
    const uploadIdBack = async (imagePath) => {
        const Value = await AsyncStorage.getItem("token");
        const formData = new FormData();
        formData.append("file", {
            uri: imagePath.path,
            name: "image",
            type: imagePath.mime,
        });
        console.log("form data new ", formData);
        axios({
            method: "POST",
            url: "https://java-blockchainapp.mobiloitte.org/account/upload-file",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(async (response) => {
                console.log("====== Upload Back Response ======", response);
                if (response.data.status === 200) {
                    setIdBack(response.data.data)
                    setIsLoading(false);
                } else {
                    alert("Document Not Uploaded");
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log("===== Upload Back Catch Error ======", err.response);
                // setIsLoading(false);
            });
    };

    // ========= KYC API ====== //
    const KycApi = async () => {
        const Value = await AsyncStorage.getItem("token");
        var dat = new Date();
        var timing = dat.toISOString()
        setIsLoading(true);
        axios({
            method: "POST",
            url: "https://java-blockchainapp.mobiloitte.org/account/save-kyc-details",
            data: {
                document: [
                    {
                        backIdUrl: idBack,
                        createTime: timing,
                        docIdNumber: "1234456465656",
                        docName: "PASSPORT",
                        documentStatus: "PENDING",
                        frontIdUrl: idFront,
                        latest: true,
                        reason: "string",
                        updateTime: timing
                    }
                ]
            },
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== KYC Response ======", response);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("===== KYC Catch Error ======", err.response);
                setIsLoading(false)
            });
    };

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                {isLoading ? (
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#244273" />
                    </View>
                ) :
                    <ProgressSteps {...progressStepsStyle}>
                        <ProgressStep nextBtnText={"Save & Next"} onNext={() => console.log("OnNext")} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.09, width: width * 0.65, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: 18 }}>
                            <View style={styles.personalView}>
                                <Text style={styles.personalTxt}>Personal Information</Text>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput placeholder='Full Name'
                                    editable={false}
                                    value={details.firstName + details.lastName}
                                    style={{
                                        fontFamily: "Lato-Regular",
                                        fontSize: height / 65,
                                        color: "black", height: height * 0.1, width: width * 0.75
                                    }} />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput placeholder='Mobile Number'
                                    editable={false}
                                    value={details.phoneNo}
                                    style={{
                                        fontFamily: "Lato-Regular",
                                        fontSize: height / 65,
                                        color: "black", height: height * 0.1, width: width * 0.75
                                    }} />
                            </View>
                            <View style={styles.dateView}>
                                <TouchableOpacity onPress={() => { }} style={styles.dobView}>
                                    <Text style={styles.titleTxt}>{details.dob}</Text>
                                    {/* <Image source={ImagePath.DATE} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} /> */}
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <View style={styles.dobView}>
                                    <TextInput placeholder='POB' style={{
                                        fontFamily: "Lato-Regular",
                                        fontSize: height / 65,
                                        color: "black", height: height * 0.08, width: width * 0.35
                                    }} />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput placeholder='Gender'
                                    editable={false}
                                    value={details.gender}
                                    style={{
                                        fontFamily: "Lato-Regular",
                                        fontSize: height / 65,
                                        color: "black", height: height * 0.1, width: width * 0.75
                                    }} />
                            </View>
                            <TouchableOpacity onPress={() => onSelectImage()} style={styles.uploadView}>
                                {photo === "" ?
                                    <Text style={styles.titleTxt}>Upload Photo</Text>
                                    :
                                    <Image source={{ uri: photo }} resizeMode="contain" style={{ height: 100, width: 150 }} />
                                }
                            </TouchableOpacity>
                        </ProgressStep>
                        <ProgressStep previousBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} previousBtnTextStyle={{ color: 'white', fontSize: height / 50 }} nextBtnText={"Save & Next"} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: height / 50 }}>
                            <View style={styles.personalView}>
                                <Text style={styles.personalTxt}>Identification</Text>
                            </View>
                            <TouchableOpacity style={styles.issueCounty}>
                                <Text style={styles.titleTxt}>Issuing county</Text>
                                <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.issueCounty}>
                                <Text style={styles.titleTxt}>Select ID Type</Text>
                                <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                            </TouchableOpacity>
                            <View style={styles.dateView}>
                                <View style={styles.dobView}>
                                    <TextInput placeholder='ID Number'
                                        onChangeText={(txt) => setDocIdNum(txt)}
                                        style={{
                                            fontFamily: "Lato-Regular",
                                            fontSize: height / 65,
                                            color: "black", height: height * 0.09, width: width * 0.35
                                        }} />
                                </View>
                                <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                    <Text style={styles.titleTxt}>Exp Date</Text>
                                    <Image source={ImagePath.DATE} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                            <TouchableOpacity onPress={() => onIdFornt()} style={styles.issueCounty}>
                                <Text style={styles.browseTxt}>Browse</Text>
                                {idFront === "" ?
                                    <Text style={styles.titleTxt}>Upload ID Proof - Front</Text>
                                    :
                                    <Image source={{ uri: idFront }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                }

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onIdBack()} style={styles.issueCounty}>
                                <Text style={styles.browseTxt}>Browse</Text>
                                {idBack === "" ?
                                    <Text style={styles.titleTxt}>Upload ID Proof - Back</Text>
                                    :
                                    <Image source={{ uri: idBack }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onSelfieWithId()} style={styles.uploadId}>
                                <Text style={styles.browseTxt}>Browse</Text>
                                {selfie === "" ?
                                    <Text style={styles.titleTxt}>Upload Selfie with ID Proof</Text>
                                    :
                                    <Image source={{ uri: selfie }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                }
                            </TouchableOpacity>
                        </ProgressStep>
                        <ProgressStep onSubmit={() => KycApi()} previousBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} previousBtnTextStyle={{ color: 'white', fontSize: height / 50 }} nextBtnText={"Save & Next"} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: height / 50 }}>
                            <View style={styles.personalView}>
                                <Text style={styles.personalTxt}>Contact Information</Text>
                            </View>
                            <View style={styles.addressView}>
                                <TouchableOpacity onPress={() => setAddress("Residential")}>
                                    <Text style={{
                                        fontFamily: "Poppins-SemiBold",
                                        fontSize: height / 70,
                                        textDecorationLine: 'underline',
                                        color: address === "Residential" ? COLOR.REMEBERTEXT : COLOR.ADDRESS
                                    }}>Residential Address</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setAddress("Permanent")}>
                                    <Text style={{
                                        fontFamily: "Poppins-SemiBold",
                                        fontSize: height / 70,
                                        textDecorationLine: 'underline',
                                        color: address === "Permanent" ? COLOR.REMEBERTEXT : COLOR.ADDRESS
                                    }}>Permanet Address</Text>
                                </TouchableOpacity>
                            </View>
                            {address === "Residential" ?
                                <View>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Select country</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <View style={styles.dateView}>
                                        <View style={styles.dobView}>
                                            <TextInput placeholder='ZIP' style={{
                                                fontFamily: "Lato-Regular",
                                                fontSize: height / 65,
                                                color: "black", height: height * 0.09, width: width * 0.35
                                            }} />
                                        </View>
                                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                            <Text style={styles.titleTxt}>City</Text>
                                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Select State</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Address proof type</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onAddressProofFront()} style={styles.issueCounty}>
                                        <Text style={styles.browseTxt}>Browse</Text>
                                        {addressFront === "" ?
                                            <Text style={styles.titleTxt}>Upload Address Proof - Front</Text>
                                            :
                                            <Image source={{ uri: addressFront }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                        }

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onAddressProofBack()} style={styles.uploadId}>
                                        <Text style={styles.browseTxt}>Browse</Text>
                                        {addressBack === "" ?
                                            <Text style={styles.titleTxt}>Upload Address Proof - back</Text>
                                            :
                                            <Image source={{ uri: addressBack }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                :
                                <View>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Select country</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <View style={styles.dateView}>
                                        <View style={styles.dobView}>
                                            <TextInput placeholder='ZIP' style={{
                                                fontFamily: "Lato-Regular",
                                                fontSize: height / 65,
                                                color: "black", height: height * 0.09, width: width * 0.35
                                            }} />
                                        </View>
                                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                            <Text style={styles.titleTxt}>City</Text>
                                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Select State</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.issueCounty}>
                                        <Text style={styles.titleTxt}>Address proof type</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onAddressProofFrontPermanent()} style={styles.issueCounty}>
                                        <Text style={styles.browseTxt}>Browse</Text>
                                        {addressFrontPerma === "" ?
                                            <Text style={styles.titleTxt}>Upload Address Proof - Front</Text>
                                            :
                                            <Image source={{ uri: addressFrontPerma }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onAddressProofBackPermanent()} style={styles.uploadId}>
                                        <Text style={styles.browseTxt}>Browse</Text>
                                        {addressBackPerma === "" ?
                                            <Text style={styles.titleTxt}>Upload Address Proof - back</Text>
                                            :
                                            <Image source={{ uri: addressBackPerma }} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            }
                        </ProgressStep>
                    </ProgressSteps>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    title={"KYC"}
                    leftPress={() => props.navigation.navigate("DashBoard")}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    <ScrollView>
                        {renderQr()}
                    </ScrollView>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Kyc

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    personalTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 55,
        color: COLOR.REMEBERTEXT
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: COLOR.TITLETXT
    },
    browseTxt: {
        textDecorationLine: 'underline',
        fontFamily: "Lato-Regular",
        fontSize: height / 55,
        color: COLOR.LABETEXT
    },
    inputView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-around",
        alignSelf: "center"
    },
    issueCounty: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-between",
        alignSelf: "center"
    },
    uploadId: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        marginBottom: height * 0.04,
        justifyContent: "space-between",
        alignSelf: "center"
    },
    personalView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    addressView: {
        height: height * 0.035,
        width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.03
    },
    dobView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.43,
        // alignSelf: "center",
        justifyContent: "space-around"
    },
    uploadView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.2,
        width: width * 0.9,
        alignSelf: "center",
        justifyContent: "space-around",
        marginBottom: height * 0.09
    },
    dateView: {
        height: height * 0.1,
        width: width * 0.9,
        flexDirection: "row",
        // backgroundColor: "red",
        alignSelf: "center",
        alignItems: "flex-end",
        justifyContent: "space-between"
    }
})