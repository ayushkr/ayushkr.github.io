


function firebase_init() {
//var firebase;
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
    const firebaseConfig = {
        apiKey: "AIzaSyC-OFpNdpfInnYgUUxmmYMTK_AAYg15e5k",
        authDomain: "psc-github-2024.firebaseapp.com",
        projectId: "psc-github-2024",
        storageBucket: "psc-github-2024.appspot.com",
        messagingSenderId: "357177257933",
        appId: "1:357177257933:web:9e4762fd23c89e03adde84",
        databaseURL: 'https://psc-github-2024-default-rtdb.asia-southeast1.firebasedatabase.app',
        measurementId: "G-RK6VDL6S5G"
    };
    firebase.initializeApp(firebaseConfig);

    return firebase;
}