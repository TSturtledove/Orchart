app.controller("fieldsCon", function($scope, $routeParams, authFactory, fieldFactory){
  // $scope.user ={username:"", password:""}
const fieldId = $routeParams.fieldId

const popPage = ()=> {
  // console.log("field id", $routeParams.fieldId)
fieldFactory.getField($routeParams.fieldId)
  .then((field) => {
    console.log("got data back to the frontend controller", field)
    $scope.field = field
  })
  .then( () => {
    fieldFactory.getTreatments($routeParams.fieldId)
    .then((treatments) => {
      console.log("got the treatments back to the frontend controller", treatments)
      $scope.treatment_fields = treatments
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
    let id = $routeParams.fieldId
    let name = $scope.newtreatment.name
    let date = $scope.newtreatment.date
    console.log("You're trying to make a new treatment")
    fieldFactory.add({name, id, date})
    .then((treatment) => {
      popPage()
      console.log("You made a treatment", treatment)
      $scope.msg="You made a new treatment"
      $scope.$apply()
    }).catch( (err) => {
      console.log("There was an error making the treatment", err)
      $scope.msg="There was an error in making the treatment, please try again"
      $scope.$apply()
    })
    $scope.newtreatment = {}
  }


  $scope.remove = (id) => {
    console.log("id", id)
    fieldFactory.remove(id)
    .then(() => {
      popPage()
    })
  }

  $scope.save = (id, editfieldtreatment) => {
    console.log("save", id)
    console.log("save", editfieldtreatment)
    let treatment = editfieldtreatment.name
    let date = editfieldtreatment.date
    let treatmentinfo = {id, treatment, date}
    console.log("field info", treatmentinfo)
    fieldFactory.update(treatmentinfo)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      popPage()
    })
    $scope.editfieldtreatment = {}
  }



})
