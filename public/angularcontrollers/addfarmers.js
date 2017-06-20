app.controller("addfarmers", function($scope, authFactory){
  // $scope.user ={username:"", password:""}

  const setbutton = () => {
    console.log("fired button change")
    authFactory.gatecheck()
    .then( (e) => {
      if (e == "nouser") {
        $scope.pop = "ninja"
        // $scope.cap = " "
        // $scope.lin = true
        $scope.usergo = false
        $scope.$apply()
      }else{
        $scope.pop = " "
        // $scope.cap = "ninja"
        // $scope.lin = false
        $scope.usergo = true
        $scope.$apply()

      }
    })
  }

  setbutton()


  $scope.Logout = () => {
    console.log("you hit the logout")
    authFactory.logoutFarmer()
    .then( ()=> {
      console.log("got back to logout frontend")
      $scope.msg="You have logged out"
      setbutton()

    }).catch( (err) => {
      console.log("error in logging out", err)
      $scope.msg="Please login first"
      $scope.$apply()
    })
  },

  $scope.RegisterUser = () => {
    console.log("you hit this")
    console.log($scope.newuser)
    authFactory.add($scope.newuser)
    .then((user) => {
      console.log("made a thing", user)
      $scope.msg="You are now registered, please login"
      $scope.$apply()

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
      $scope.msg="You are now logged in"
      setbutton()
      $scope.$apply()


    }).catch((err)=> {
      console.log("errored out user", err)
      $scope.msg="User not found"
      $scope.$apply()
    })
    $scope.user = {}
  }
})
