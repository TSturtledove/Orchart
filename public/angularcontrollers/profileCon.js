app.controller("profileCon", function($scope, authFactory, profileFactory){
  // $scope.user ={username:"", password:""}
const popPage = () => {
  profileFactory.getFields()
    .then((fields) => {
      console.log("got data back to the frontend controller", fields)
      $scope.fields = fields
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

  $scope.fieldMaker = () => {
    console.log("You're trying to make a new field")
    profileFactory.add($scope.newfield)
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


  $scope.remove = (id) => {
    console.log("id", id)
    profileFactory.remove(id)
    .then(() => {
      popPage()
    })
  }

  $scope.save = (id, editfield) => {
    // console.log("save", id)
    // console.log("save", editfield)
    let name = editfield.name
    let date = editfield.date
    let field = {id, name, date}
    console.log("field info", field)
    profileFactory.update(field)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      popPage()
    })
    $scope.editfield = {}
  }


})
