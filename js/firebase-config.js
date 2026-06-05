const firebaseConfig = {
    apiKey: "AIzaSyAVBwD0Yq0tid4X5dJC8n38GdnlwfztKXM",
    authDomain: "stocksmart-hub.firebaseapp.com",
    projectId: "stocksmart-hub",
    storageBucket: "stocksmart-hub.firebasestorage.app",
    messagingSenderId: "835699642030",
    appId: "1:835699642030:web:f734e027d93de4f269e73f",
    measurementId: "G-9SCE9B1EQM"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence().catch((err) => {
    if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open');
    }
});