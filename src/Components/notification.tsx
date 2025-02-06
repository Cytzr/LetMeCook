import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCI-pXkkkstXznpUu-Z4AKLWf2yc7asc64",
    authDomain: "golang-first-7c19e.firebaseapp.com",
    projectId: "golang-first-7c19e",
    storageBucket: "golang-first-7c19e.firebasestorage.app",
    messagingSenderId: "157649926525",
    appId: "1:157649926525:web:de94f99dba633d13d83414",
    measurementId: "G-BBQNVGR4Y7"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// Request Notification Permission
export const requestNotificationPermission = async () => {
    try {
        const permission = await window.Notification.requestPermission();
        if (permission === "granted") {
            console.log("✅ Notification permission granted.");
            await getFCMToken();
        } else {
            console.log("Notification permission denied.");
        }
    } catch (error) {
        console.error("⚠Error requesting notification permission:", error);
    }
};

// Get the FCM Token
const getFCMToken = async () => {
    try {
        const token = await getToken(messaging, { vapidKey: "BHTNhJMcSLwHUyOoyzHDKHlYIcKBJ0SIU1UoeCifZf_jWn9vTmYTWwynnfnCKDM1keQGZhpAgCVgtor2DT-3uck" });
        if (token) {
            console.log("📌 FCM Device Token:", token);
        } else {
            console.log("⚠️ No registration token available.");
        }
    } catch (error) {
        console.error("⚠️ Error getting FCM token:", error);
    }
};

// Listen for Incoming Messages
onMessage(messaging, (payload) => {
    console.log("📩 Foreground message received:", payload);
});

const Notification = () => {
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    return <div>🔔 Push Notifications Enabled</div>;
};

export default Notification;
