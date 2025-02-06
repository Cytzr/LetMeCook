import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import {requestNotificationPermission} from "./src/Components/notification.js";

const firebaseConfig = {
    apiKey: "AIzaSyCI-pXkkkstXznpUu-Z4AKLWf2yc7asc64",
    authDomain: "golang-first-7c19e.firebaseapp.com",
    projectId: "golang-first-7c19e",
    storageBucket: "golang-first-7c19e.firebasestorage.app",
    messagingSenderId: "157649926525",
    appId: "1:157649926525:web:de94f99dba633d13d83414",
    measurementId: "G-BBQNVGR4Y7",
};

export const initializeFirebaseMessaging = async () => {
    try {
        firebase.initializeApp(firebaseConfig);
        const messaging = firebase.messaging();

        await requestNotificationPermission();

        messaging.onMessage((payload) => {
            console.log("Message received: ", payload);
            if (Notification.permission === "granted") {
                const notificationTitle = payload.notification.title;
                const notificationOptions = {
                    body: payload.notification.body,
                    icon: "/firebase-logo.png",
                };
                new Notification(notificationTitle, notificationOptions);
            }
        });
    } catch (error) {
        console.error("Firebase Messaging Initialization Error:", error);
    }
};
