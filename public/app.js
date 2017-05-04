const app = angular.module("Orchart", ["ngRoute"]);

//go through each route one b one to make the proper controller
// and factory for each.  Also figure out how to do
// the resolve/authcheck properly
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "",
    controller: "",
    resolve:
  }).when("/login", {
    templateUrl: "",
    controller: "",
    resolve:
  }).when("/profile", {
    templateUrl: "",
    controller: "",
    resolve:
  }).when("/fields", {
    templateUrl: "",
    controller: "",
    resolve:
  }).when("/plants", {
    templateUrl: "",
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
