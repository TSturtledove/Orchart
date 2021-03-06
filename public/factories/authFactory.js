app.factory("authFactory", function($http) {
  return {
    add: function(newuser) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck/new`, newuser)
        .then((user)=> {
          resolve(user)
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
        $http.post(`http://localhost:3000/api/v1/authcheck/logout`)
        .then((data)=> {
          resolve()
        }).catch( (err)=> {
          reject(err)
        })
      })
    },
    gatecheck: function() {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/gatecheck`)
        .then((data)=> {
          console.log("returned gatecheck from backend to authFactory")
          console.log("data", data)
          console.log("data.data", data.data)
          resolve(data.data)
        }).catch( (err) => {
          reject(err)
        })
      })
    }


  }
})
