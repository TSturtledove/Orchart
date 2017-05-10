app.controller("addfarmers", function($scope, authFactory){
  // $scope.user ={username:"", password:""}

  $scope.RegisterUser = () => {
    console.log("you hit this")
    console.log($scope.newuser)
    authFactory.add($scope.newuser)
    .then((user) => {
      console.log("made a thing", user)
    }).catch( (err)=> {
      console.log("had an error in making profile", err)
      $scope.msg="Error in creating user, please try again"
      $scope.$apply()
    })
    $scope.newuser = {}
    // })
  },
  $scope.loginUser = () => {
    console.log("checking this")
    authFactory.getFarmer($scope.user)
    .then((user) => {
      console.log("all the way", user)
    }).catch((err)=> {
      console.log("errored out user", err)
      $scope.msg="User not found"
      $scope.$apply()
    })
  }
})
