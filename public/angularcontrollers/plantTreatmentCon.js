app.controller("plantTreatmentCon", function($scope, $routeParams, authFactory, fieldFactory, plantsFactory){
  // $scope.user ={username:"", password:""}
  // const fieldId = $routeParams.fieldId

const popPage = ()=> {
  fieldFactory.getField($routeParams.fieldId)
    .then((field) => {
      console.log("got data back to the frontend controller for fields", field)
      $scope.field = field
      $scope.$apply()

    })
    .then( () => {
    plantsFactory.getPlant($routeParams.plantId)
      .then((plant) => {
      console.log("got data back to the frontend controller for plant", plant)
      $scope.plant = plant
      $scope.$apply()

      })
    })
    .then( () => {
    fieldFactory.getTreatments($routeParams.fieldId)
      .then((treatments) => {
      console.log("got the treatments back to the frontend controller for treatments")
      $scope.treatment_fields = treatments
      $scope.$apply()
      })
    })
    .then( () => {
    plantsFactory.getPlantTreatments($routeParams.plantId)
      .then((planttreatments) => {
      console.log("got the plant treatments back to the frontend controller for plant treatments", planttreatments)
      $scope.treatment_plants = planttreatments
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

  $scope.makeTreatment = () => {
    let id = $routeParams.plantId
    let name = $scope.newtreatment.name
    let date = $scope.newtreatment.date
    console.log("You're trying to make a new treatment")
    plantsFactory.makePlantTreatment({name, id, date})
    .then((treatment) => {
      popPage()
      console.log("You made a plant treatment", treatment)
      $scope.msg="You made a new plant treatment"
      $scope.$apply()
    }).catch( (err) => {
      console.log("There was an error making the plant treatment", err)
      $scope.msg="There was an error in making the plant treatment, please try again"
      $scope.$apply()
    })
    $scope.newtreatment = {}
  }



})
