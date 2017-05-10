app.factory("authFactory", function($http) {
  return {
    add: function() {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck/new`)
        .then((data)=> {
          resovle(data.data)
        })
      })
    },
    getFarmer: function() {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/authcheck`)
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
