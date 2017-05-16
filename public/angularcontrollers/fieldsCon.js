app.controller("fieldsCon", function($scope, $routeParams, authFactory, fieldFactory){
  // $scope.user ={username:"", password:""}
const fieldId = $routeParams.fieldId

const popPage = () => {
  fieldFactory.getField($routeParams.fieldId)
    .then((field) => {
      console.log("got data back to the frontend controller", field)
      $scope.field = field
      $scope.$apply()
    })
}

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



})
