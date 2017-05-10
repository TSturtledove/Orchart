
const app = angular.module("Orchart", ["ngRoute"]);

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
  // }).when("/profile", {
  //   templateUrl: "angularPartials/profile.html",
  //   controller: ""
  //   // resolve:
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
