app.controller("addfarmers", function($scope, authFactory){
  // $scope.user ={username:"", password:""}

  $scope.RegisterUser = () => {
    console.log("you hit this")
    console.log($scope.newuser)
    authFactory.add($scope.newuser)
    .then((data) => {})
    $scope.newuser = {}
    // })
  },
  $scope.loginUser = () => {
    console.log("checking this")
    authFactory.getFarmer($scope.user)
    .then((data) => {})
  }
})
