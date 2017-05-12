app.controller("profileCon", function($scope, authFactory, profileFactory){
  // $scope.user ={username:"", password:""}
  $scope.Logout = () => {
    console.log("you hit the logout")
    authFactory.logoutFarmer()
    console.log("got back to logout frontend")
    $scope.msg="You have logged out"
  },
  $scope.fieldMaker = () => {
    console.log("You're trying to make a new field")
    profileFactory.add($scope.newfield)
    .then((field) => {
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
