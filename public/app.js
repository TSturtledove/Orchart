
const app = angular.module("Orchart", ["ngRoute"]);



// const gatecheck = {
//   // gatecheck ($rootscope, authFactory) {
//   //   authFactory.gatecheck()
//   //   .then( (user) => {
//   //     console.log("gatecheck in app")
//   //     console.log("gatecheck returned", user)
//   //     if(user == true) {
//   //       redirectTo: "/profile"
//   //     } else {
//   //       redirectTo: "/"
//   //     }
//   //   })
//   //   console.log("end of gatecheck")
//   // }
//
//
//   gatecheck() {
//     // return new Promise((resolve, reject) => {
//     //   $http.get(`http://localhost:3000/api/v1/gatecheck`)
//     //   .then((data)=> {
//     //     console.log("returned gatecheck from backend to authFactory")
//     //     console.log("data", data)
//     //     console.log("data.data", data.data)
//     //     resolve(data.data)
//     //   }).catch( (err) => {
//     //     reject(err)
//     //   })
//     // })
//     console.log("user", req.user.name)
//     console.log("user")
//
//   }
//
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
    controller: "profileCon",
    // resolve:
  }).when("/fields/:fieldId", {
    templateUrl: "angularPartials/fields.html",
    controller: "fieldsCon"
    // resolve:
}).when("/plants/:fieldId", {
    templateUrl: "angularPartials/plants.html",
    controller: "plantsCon"
    // resolve:
  }).when("/plants/:fieldId/:plantId", {
      templateUrl: "angularPartials/planttreatment.html",
      controller: "plantTreatmentCon"
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
