var firebase;
var database;
var user;



function  firebase_add_listeners() {

    firebase = firebase_init();
// Get a reference to the database service
    database = firebase.database();

    var postId = "c";
// update the variable when the starCount is changed in the database
    var starCountRef = database.ref('posts/' + postId + '/starCount');

    starCountRef.on('value', function (snapshot) {
//        console.log(snapshot);
        var postElement = document.getElementById("post");
        updateStarCount(postElement, snapshot.val());
    });

    database.ref("users/").on('value', s => {
        console.log(s.val());
    });

    console.log("added listener on firebase");

}



// update the UI
function updateStarCount(el, val) {
//    console.log("val=" + val);
//    console.log(el);
    vue.updates = val;
//    el.innerText = `${val} Stars!`;
}


function  signInGoogle() {
    const auth = firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();
//                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                setUser(result.user);

                // ...
            }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
        // ...
    });

}

function signOutGoogle() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("sign out done");
//        alert("sign out done");
        document.getElementById('user').innerText = "out";
    }).catch((error) => {
        // An error happened.
    });
}
function setUser(u) {
    user = u;
    // IdP data available in result.additionalUserInfo.profile.
    getUser();

}

function getUser() {
    document.getElementById('user').innerText = user.displayName;
//    if (user !== undefined) {
//        alert("user=" + user.displayName);
//    } else {
//        alert("user is null=" + user);
//    }
}

function postMessage() {
//    database.ref(user.uid+'/'+'messages').setValue(5);
//    database.ref('users').set({
//    username: 'name',
//    email: 'e',
//    profile_picture : 'img'
//  });
    database.ref("users/" + user.uid + "/message").set({a: 1});
}
