app.factory("authFactory", function($http) {
  return {
    add: function() {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/authcheck/new`)
        .then((data)=> {
          resovle(data.data)
        })
      })
    }


  }
})
