var app = angular.module('app1', ['ngSanitize', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "main.htm"
            })
            .when("/ayush_home", {
                templateUrl: "/index.html"
            })
            .when("/green", {
                templateUrl: "green.htm"
            })

            .when("/firebase_test", {
                templateUrl: "firebase_test.htm"
            })

            .when("/flex", {
                templateUrl: "examples/flex1.htm"
            })

            .when("/qp_test", {
                templateUrl: "qp_test.htm"
            })

            .when("/qp_list", {
                templateUrl: "QP/list.html"
            })

            .when("/blue", {
                templateUrl: "blue.htm"
            });


});

app.controller('ctrl1', function ($scope, $http) {

    $http.get("QP/list.json").then(function (response) {
        $scope.qp_list = response.data;
    });


//    $http.get("QP/068_21/o.json").then(function (response) {
//        $scope.qp = response.data;
//    });



    $scope.loadFile = function (element_id, path) {
        $http.get(path).then(function (response) {
            console.log(response);
            document.getElementById(element_id).innerHTML = response.data;

        });
    };

    $scope.loadQp = function (path) {
        $http.get(path).then(
                (response) =>
        {
//            alert("success " + data);
            $scope.qp = response.data;
        },
                (error) =>
        {
            alert(error.data + " " + error.config.url);
            console.log(error);
        }
        );

//                .then(function (response) {
//                    console.log(response);
//                    if (response.status === 200) {
//                        $scope.qp = response.data;
//                    } else {
//                        alert("Error " + response.statusText);
//                    }
//
//                });
    };


    $scope.answer = function (qnum, ans_user, ans_correct) {
//        alert("You entered "+ans_user+" correct="+ans_correct);
        document.getElementById("qn" + qnum);

        if (ans_user === ans_correct) {
            alert("Correct");

        } else {
            alert("Sorry ans is " + ans_correct);

        }

    };

    $scope.jobnames = {
        "soil": {"name": "SOIL", codes: ["1", "2"]},
        "fitter": {"name": "FITTER" , codes: ["1", "2"]},
        "ayurveda": {"name": "AYURVEDA" , codes: ["1", "2"]}
    };
    
    $scope.user=user;

});


