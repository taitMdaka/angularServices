/// <reference path="angular.min.js" />
var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
           
            })
          
            //new route
            .when("/students/:id", {
                templateUrl: "Templates/StudentDetails.html",
                controller: "studentDetailsController"
            })


        .otherwise({
            redirectTo: "/home"
        })

        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
        console.log('list mhome ');
        $scope.message = "Home Page";

    })

    .controller("coursesController", function ($scope) {
        console.log('list my student ');
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })


    .controller("studentsController", function ($scope, $http) {
        //calling a web service 
        console.log('list my student ');
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {

                $scope.students = response.data;
            })

    })
