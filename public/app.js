
const app = angular.module("Orchart", ["ngRoute"]);

// const gatecheck = {
//   gatecheck ($rootscope, authFactory) {
//     authFactory.gatecheck()
//     .then( (user) => {
//       if(!user) {
//         redirectTo: "/"
//       }
//     })
//   }
// }

// $scope.Profile = () => {
//   console.log("you hit the profile button")
//   authFactory.gatecheck()
//   .then( (user) => {
//     if(user) {
//       redirectTo()
//     }
//   })
// }


//go through each route one b one to make the proper controller
// and factory for each.  Also figure out how to do
// the resolve/authcheck properly
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "angularPartials/home.html",
    controller: "homeCon"
    // resolve:
  }).when("/login", {
    templateUrl: "angularPartials/login.html",
    controller: "addfarmers"
    // resolve:
  }).when("/profile", {
    templateUrl: "angularPartials/profile.html",
    controller: "profileCon"
    // resolve: gatecheck
  // }).when("/fields", {
  //   templateUrl: "angularPartials/fields.html",
  //   controller: ""
  //   // resolve:
  // }).when("/plants", {
  //   templateUrl: "angularPartials/plants.html",
  //   controller: ""
    // resolve:
  // }).when("/", {
  //   templateUrl: "",
  //   controller: "",
    // resolve:
  }).otherwise({
    redirectTo: "/"
  })
}])







//from Stories, use as reference for the security gate for Angular
// const checkForAuth = {
//   checkForAuth ($location, $rootScope) {
//     const authReady = firebase.auth().onAuthStateChanged(function(user){
//       authReady()
//       if (!user) {
//         console.log("there be no one here")
//       }
//       else {
//         $rootScope.uid = firebase.auth().currentUser.uid
//         console.log("there be someone signed in")
//       }
//     })
//   }
// }
//
// const authCheck = {
//
// }
