var app = angular.module('app1', ['ngSanitize', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
              .when("/ayush_home", {
                templateUrl: "/index.html"
            })
            .when("/green", {
                templateUrl: "green.htm"
            })



            ;


});

app.controller('ctrl1', function ($scope, $http) {

    $http.get("timetable.json").then(function (response) {
        $scope.timetable = response.data;
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

    $scope.ddmmyyyy = function (s) {
        if (s === undefined)
            return "-ud-";
        let ar = s.split(',');
        if (ar.length > 0) {
            if (ar[0].length > 10) {
                return ar[0].split(' ')[0];
            } else

            if (ar[0].length === 10)
                return ar[0];
            else {
                return "--not--"+s;
            }


//                + "(" + ar[0].length + ")";
        } else
            return "--";
    };
});

app.filter('countmessage', function () {
    return function (input, itemType) {
        console.log(item);
        return input.split(",")[0];
    };
});


