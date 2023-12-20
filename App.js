import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential} from "firebase/auth";
import { auth } from './firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

    const [userInfo, setUserInfo] = useState();
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '732352481699-jljje4rpjdkts5n38bk9okrtgnu934r3.apps.googleusercontent.com',
        androidClientId: '732352481699-0ubmgd56228e9nv4qg31pt0dc7j0gv23.apps.googleusercontent.com',
    });

    useEffect(() => {
        if(response?.type === 'success'){
            const {id_token} = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    // const [showLogin, setShowLogin] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowLogin(true);
    //     }, 2500);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <View style={styles.container}>
            {/* {showLogin ? <LoginScreen /> : <SplashScreen />} */}
            {/* <SplashScreen /> */}
            <LoginScreen promptAsync={promptAsync}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
