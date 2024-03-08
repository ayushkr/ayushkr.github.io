
class Firebase {
    constructor() {
        this.auth1 = new Auth();
        this.database1 = new Database();
    }
    database() {
        return this.database1;

    }
    auth() {
        return this.auth1;
    }
}





class Auth {
    constructor() {
        this.GoogleAuthProvider = new GoogleAuthProvider();
    }

}

class GoogleAuthProvider {
    constructor() {
    }

}



let myPromise = new Promise(function (myResolve, myReject) {
// "Producing Code" (May take some time)
    myResolve(); // when successful
    myReject();  // when error
});



class Database {

    constructor() {
        this.refs = new Map();
        this.refs.set("a1", "ayush");
    }

    ref(path) {
        let ref = new Ref(path);
        this.refs.set(path, ref);
        return ref;
    }

}

class Ref {

    constructor(path) {
        this.callbacks = new Map();

    }

    on(a, fun) {
        this.callbacks.set(a, fun);
        console.log(a + "-->" + fun);
    }
}

class Snapshot {
    constructor(value) {
        this.value = value;
    }
    val() {
        return this.value;

    }

}

function firebase_init() {
    return new Firebase();
}

function mock() {
//    alert("mock");
    let snapshot = new Snapshot(4);
    database.refs.get('posts/c/starCount').callbacks.get('value')(snapshot);
}