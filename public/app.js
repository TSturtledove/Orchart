
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

//figure out a way to keep this draggable setup but allow
// people to still edit the text of the plants
app.directive("dirt", ["$document", function($document) {
  // console.log("yothere")
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
        position: 'relative',
        // border: '1px solid red',
        // backgroundColor: 'lightgrey',
        cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault(); //turning this line off lets you edit
        // the text in the edit field, but it also enables
        // the click/drag highlighting of words
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left: x + 'px'
        });
      }

      function mouseup() {
        // console.log("check coordinates");
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
        // console.log("X is now", x);
        // console.log("Y is now", y);
      }
    }
  }
}])


//Use this as reference for making the "draggable" boxes
// angular.module('app', [])
//   .directive('dirt', ['$document', function($document) {
//     return {
//       link: function(scope, element, attr) {
//         var startX = 0, startY = 0, x = 0, y = 0;
//
//         element.css({
//           position: 'reletive',
//           // border: '1px solid red',
//           // backgroundColor: 'lightgrey',
//           // cursor: 'pointer'
//         });
//
//         element.on('mousedown', function(event) {
//           // Prevent default dragging of selected content
//           event.preventDefault();
//           startX = event.pageX - x;
//           startY = event.pageY - y;
//           $document.on('mousemove', mousemove);
//           $document.on('mouseup', mouseup);
//         });
//
//         function mousemove(event) {
//           y = event.pageY - startY;
//           x = event.pageX - startX;
//           element.css({
//             top: y + 'px',
//             left: x + 'px'
//           });
//         }
//
//         function mouseup() {
//           $document.off('mousemove', mousemove);
//           $document.off('mouseup', mouseup);
//         }
//       }
//     };
//   }]);
