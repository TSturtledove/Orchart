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
    console.log("You're trying to make a new field")
    profileFactory.add($scope.newtreatment)
    .then((field) => {
      popPage()
      console.log("You made a field", field)
      $scope.msg="You made a new field"
      $scope.$apply()
    }).catch( (err) => {
      console.log("There was an error making field", err)
      $scope.msg="There was an error in making the field, please try again"
      $scope.$apply()
    })
    $scope.newfield = {}
  }



})
