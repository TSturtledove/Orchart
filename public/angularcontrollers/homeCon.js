app.controller("homeCon", function($scope, $route, authFactory) {
  $scope.thing = "Home"
  // $scope.pop = "ninja"

const setbutton = () => {
  console.log("fired button change")
  authFactory.gatecheck()
  .then( (e) => {
    if (e == "nouser") {
      $scope.pop = "ninja"
      $scope.$apply()
    }else{
      $scope.thing = " "
      $scope.$apply()

    }
  })
}

setbutton()


//okay, so this is probably not supposed to be here but in the app.js
// or somewhere else where it can be called by the "resolve" thing.
  $scope.Profile = () => {
    console.log("you hit the profile button")
  //   authFactory.gatecheck()
  //   .then( () => {
  //     $scope.$apply(function() { $route.path("/profile") })
  //     console.log("got back from gatecheck")
  //   }).catch( (err)=> {
  //     console.log("got an error at gatecheck", err)
  //   })
  }

  $scope.Logout = () => {
    console.log("you hit the logout")
    authFactory.logoutFarmer()
    console.log("got back to logout frontend")
    $scope.msg="You have logged out"
  }


})
