
window.onload = init;
var vue;


function init() {
    console.log('init');
    firebase_start();
//        firebase_add_listeners();
    loadPage('page_0');
}


function loadPage(pageName) {
    w3.includeHTML2(pageName + ".html", () => {
        w3.getHttpObject(pageName + ".json", (o) => {
//                w3.displayObject("main", o);

            vue = new Vue({
                el: '#main',

                data: {
                    items: [{message: 'Foo'}, {message: 'Bar'}],
                    userName: "--",
                    uid: '',
                    updates: 0
                },
                a: 1
            });
            firebase_add_listeners();
            if (user !== undefined) {
                vue.userName = user.displayName;
            }
        });
    });

}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
