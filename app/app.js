/**
 * Created by trungnguyen on 11/28/16.
 */

var app = angular.module('app',[
    // 'ngRoute'
     'ui.router'
    ,'ngResource'
    ,'ngAnimate'
    ,'ngSanitize'
    ,'ui.bootstrap'
    ,'ui.bootstrap.datetimepicker'
    ,'base64'
]);

app.config([
    '$httpProvider','$logProvider', function ($httpProvider,$logProvider) {
        $logProvider.debugEnabled(false);
        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Enables Request.IsAjaxRequest() in ASP.NET MVC
        // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // Disable IE ajax request caching
        // $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }
]);


// app.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.
//        when('/', {
//        templateUrl  : 'app/home/patientList.html',
//        controller   : 'homeController',
//    }).
//     when('/patientList', {
//        templateUrl  : 'app/home/patientList.html',
//        controller   : 'homeController'
//    }).
//    when('/patientDetail/:uuid', {
//        templateUrl  : 'app/patient/patientDetail.html',
//        controller   : 'patientController'
//    }).
//    when('/tasks', {
//        templateUrl  : 'app/tasks/tasks.html',
//        controller   : 'tasksController'
//    }).
//    when('/reports', {
//        templateUrl  : 'app/reports/reports.html',
//        controller   : 'reportsController'
//    }).
//     otherwise({
//     redirecTo: '/'
//     });
// }]);
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'app/home/patientList.html',
                controller:'homeController'
            })
            .state('patientList',{
                url : '/patientList',
                templateUrl  : 'app/home/patientList.html',
                controller   : 'homeController'
            })
            .state('tasks',{
                url : '/tasks',
                templateUrl  : 'app/tasks/tasks.html',
                controller   : 'tasksController'
            })
            .state('reports', {
                url : '/reports',
                templateUrl  : 'app/reports/reports.html',
                controller   : 'reportsController'
            })
            .state('patientDetail', {
                url:'/patientDetail/:uuid',
                views : {
                   '' :  {
                       templateUrl  : 'app/patient/patientDetail.html',
                       controller   : 'patientController'
                   },
                  'diagnoses@patientDetail' : {
                      templateUrl : 'app/patient/diagnoses.html',
                      controller  : 'diagnosesCtrl'
                  },
                  'appointments@patientDetail' : {
                      templateUrl : 'app/patient/appointments.html',
                      controller    : 'appointmentsCtrl'
                  },
                  'flowsheets@patientDetail' : {
                        templateUrl : 'app/patient/flowsheets.html',
                        controller    : 'flowsheetsCtrl'
                    },
                    'allergies@patientDetail' : {
                        templateUrl : 'app/patient/allergies.html',
                        controller    : 'allergiesCtrl'
                    },
                    'notes@patientDetail' : {
                        templateUrl : 'app/patient/notes.html',
                        controller    : 'notesCtrl'
                    },
                    'contacts@patientDetail' : {
                        templateUrl : 'app/patient/contacts.html',
                        controller    : 'contactsCtrl'
                    },
                    'medications@patientDetail' : {
                        templateUrl : 'app/patient/medications.html',
                        controller    : 'medicationsCtrl'
                    }
                }

            })

    }]);