app.controller("addfarmers", function($scope, authFactory){

  $scope.RegisterUser = () => {
    authFactory.add($scope.newuser)
    .then( ()=> {
      $scope.newuser = {}
    })
  }
})
