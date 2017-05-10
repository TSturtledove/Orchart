app.factory("authFactory", function($http) {
  return {
    add: function(newuser) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck/new`, newuser)
        .then((user)=> {
          resovle(user)
        }).catch( (err)=> {
          reject(err)
        })
      })
    },
    getFarmer: function(user) {
      console.log("user", user)
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck`, user)
        .then((user)=> {
          console.log("factory user", user)
          resolve(user)
        }).catch( (err)=> {
          reject(err)
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
