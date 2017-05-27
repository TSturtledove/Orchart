app.controller("homeCon", function($scope, authFactory) {
  $scope.thing = "Home"

//okay, so this is probably not supposed to be here but in the app.js
// or somewhere else where it can be called by the "resolve" thing.
  // $scope.Profile = () => {
  //   console.log("you hit the profile button")
  //   authFactory.gatecheck()
  //   .then( (user) => {
  //     if(!user) {
  //       redirectTo:"/"
  //     }
  //   }).catch( (err)=> {
  //     console.log("got an error at gatecheck", err)
  //   })
  // }

  $scope.Logout = () => {
    console.log("you hit the logout")
    authFactory.logoutFarmer()
    console.log("got back to logout frontend")
    $scope.msg="You have logged out"
  }


})
