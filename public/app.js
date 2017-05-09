
//from Stories, use as reference for the security gate for Angular
const checkForAuth = {
  checkForAuth ($location, $rootScope) {
    const authReady = firebase.auth().onAuthStateChanged(function(user){
      authReady()
      if (!user) {
        console.log("there be no one here")
      }
      else {
        $rootScope.uid = firebase.auth().currentUser.uid
        console.log("there be someone signed in")
      }
    })
  }
}

const authCheck = {

}




const app = angular.module("Orchart", ["ngRoute"]);

//go through each route one b one to make the proper controller
// and factory for each.  Also figure out how to do
// the resolve/authcheck properly
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "angularPatials/home.html",
    controller: "",
    resolve:
  }).when("/login", {
    templateUrl: "angularPatials/login.html",
    controller: "",
    resolve:
  }).when("/profile", {
    templateUrl: "angularPatials/profile.html",
    controller: "",
    resolve:
  }).when("/fields", {
    templateUrl: "angularPatials/fields.html",
    controller: "",
    resolve:
  }).when("/plants", {
    templateUrl: "angularPatials/plants.html",
    controller: "",
    resolve:
  }).when("/", {
    templateUrl: "",
    controller: "",
    resolve:
  }).otherwise({
    redirectTo: "/"
  })
}])
