var firebase;
var database;

function  firebase_add_listeners() {
    firebase=firebase_init();
// Get a reference to the database service
    database = firebase.database();

    var postId = "c";
// update the variable when the starCount is changed in the database
    var starCountRef = database.ref('posts/' + postId + '/starCount');
    starCountRef.on('value', function (snapshot) {
        var postElement = document.getElementById("post");
        updateStarCount(postElement, snapshot.val());
    });



}

// update the UI
function updateStarCount(el, val) {
//                console.log("val="+val);
//                console.log(el);
    el.innerText = `${val} Stars!`;
}


function  google_signin() {
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
                var user = result.user;
                // IdP data available in result.additionalUserInfo.profile.
                console.log(user);
                // ...
            }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}

function signout_google() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("sign out done");
        alert("sign out done");
    }).catch((error) => {
        // An error happened.
    });
}
