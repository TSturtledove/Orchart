app.controller("plantsCon", function($scope, $routeParams, authFactory, fieldFactory, plantsFactory){
  // $scope.user ={username:"", password:""}
const fieldId = $routeParams.fieldId
// $scope.fieldlink = fieldId
const popPage = ()=> {
fieldFactory.getField($routeParams.fieldId)
  .then((field) => {
    console.log("got data back to the frontend controller", field)
    $scope.field = field
  })
  .then( () => {
    plantsFactory.getPlants($routeParams.fieldId)
    .then((plants) => {
      console.log("got the plants back to the frontend controller", plants)
      $scope.plants = plants
      $scope.$apply()
    })
  })
}

// let p1 = new Promise((resolve, reject) => {
//   fieldFactory.getField($routeParams.fieldId)
//     .then((field) => {
//       console.log("got data back to the frontend controller", field)
//       $scope.field = field
//       $scope.$apply()
//     })
//   })
//
// let p2 = new Promise((resolve, reject) => {
//     fieldFactory.getTreatments($routeParams.fieldId)
//     .then((treatments) => {
//       console.log("got the treatments back to the frontend controller", treatments)
//       $scope.treatment_fields = treatments
//       $scope.$apply()
//     })
//   })

// Promise.all([p1,p2]).then(values => {
//   console.log("here are the values")
// })
popPage()

  $scope.Logout = () => {
    console.log("you hit the logout")
    authFactory.logoutFarmer()
    console.log("got back to logout frontend")
    $scope.msg="You have logged out"
  }

  $scope.makePlant = () => {
    let id = $routeParams.fieldId
    let name = $scope.newplant.name
    let date = $scope.newplant.date
    console.log("You're trying to make a new plant")
    plantsFactory.add({name, id, date})
    .then((plant) => {
      popPage()
      console.log("You made a plant", plant)
      $scope.msg="You made a new plant"
      $scope.$apply()
    }).catch( (err) => {
      console.log("There was an error making the plant", err)
      $scope.msg="There was an error in making the plant, please try again"
      $scope.$apply()
    })
    $scope.newplant = {}
  }

  $scope.remove = (id) => {
    console.log("id", id)
    plantsFactory.remove(id)
    .then(() => {
      popPage()
    })
  }

  $scope.save = (id, editplant) => {
    // console.log("save", id)
    // console.log("save", editplant)
    let name = editplant.name
    let date = editplant.date
    let plant = {id, name, date}
    console.log("field info", plant)
    plantsFactory.update(plant)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      popPage()
    })
    $scope.editplant = {}
  }



//perhaps look at this as if the directive is a factory?
  // angular.module('plantsCon', []).
//     .directive('draggable', function($document) {
//       return function(scope, element, attr) {
//         var startX = 0, startY = 0, x = 0, y = 0;
//         // element.css({
//         //  position: 'relative',
//         //  border: '1px solid red',
//         //  backgroundColor: 'lightgrey',
//         //  cursor: 'pointer'
//         // });
//         element.on('mousedown', function(event) {
//           // Prevent default dragging of selected content
//           event.preventDefault();
//           startX = event.screenX - x;
//           startY = event.screenY - y;
//           $document.on('mousemove', mousemove);
//           $document.on('mouseup', mouseup);
//         });
//
//         function mousemove(event) {
//           y = event.screenY - startY;
//           x = event.screenX - startX;
//           element.css({
//             top: y + 'px',
//             left:  x + 'px'
//           });
//         }
//
//         function mouseup() {
//           $document.unbind('mousemove', mousemove);
//           $document.unbind('mouseup', mouseup);
//         }
//       }
//     });
//
//
//
})
