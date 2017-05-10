app.factory("authFactory", function($http) {
  return {
    add: function(newuser) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck/new`, newuser)
        .then((data)=> {
          resovle(data.data)
        })
      })
    },
    getFarmer: function(user) {
      console.log("user", user)
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck`, user)
        .then((data)=> {
          resolve(data.data)
        })
      })
    },
    logoutFarmer: function() {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:300/api/v1/authcheck/logout`)
        .then((data)=> {
          resolve(data.data)
        })
      })
    }


  }
})
