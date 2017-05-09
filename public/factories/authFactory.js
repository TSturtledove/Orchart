app.factory("authFactory", function($http) {
  return {
    authcheck: function() {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/authcheck`)
        .then((data)=> {
          resovle(data.data)
        })
      })
    }

    
  }
})
