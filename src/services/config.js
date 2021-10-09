import axios from "axios";
import firebase from "firebase/compat";
import "firebase/auth";

export const apiUrl = 'https://api.chucknorris.io/jokes/random';

export const config = {
    baseURL: apiUrl,
}
export const axiosInstance = axios.create(config);


firebase.initializeApp(
    {
        apiKey: "AIzaSyB-BgbWQelXpFBDmmHUnTMrO9WjDaHsrao",
        authDomain: "react-chat-facf9.firebaseapp.com",
        projectId: "react-chat-facf9",
        storageBucket: "react-chat-facf9.appspot.com",
        messagingSenderId: "653803241121",
        appId: "1:653803241121:web:62c8c82d6f539eb8857ae0",
        measurementId: "G-5QZ0WBDLDR"
    }
);
export {firebase};
