/**
 * Created by trungnguyen on 12/5/16.
 */
app.factory('authentication', function($location,$http,$rootScope,$base64) {
    var url = $location.$$absUrl;
    var rootUrl = url.split('owa')[0];
    var authenticationServices = {

        getCurrentSession: function() {
            var service = 'ws/rest/v1/session';
            var urlResource = rootUrl+service;
            var promise = $http.get(urlResource).then(function (response) {
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        } ,
        //  //   $http.defaults.headers.common.Authorization = 'Basic ' + base64.encode(CurrentUser.username + ':' + CurrentUser.password);
        //     session.then(function(response){
        //         $rootScope.session = response;
        //         console.log($rootScope);
        //     });
        // }
    }
    return authenticationServices;
})