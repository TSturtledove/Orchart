app.factory("profileFactory", function($http) {
  return {
    add: function(newfield) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/field/new`, newfield)
        .then((field)=> {
          console.log("got field back to factory", field)
          resolve(field)
        }).catch( (err)=> {
          console.log("fired error catch", err)
          reject(err)
        })
      })
    },
    // getFarmer: function(user) {
    //   console.log("user", user)
    //   return new Promise((resolve, reject) => {
    //     $http.post(`http://localhost:3000/api/v1/authcheck`, user)
    //     .then((user)=> {
    //       console.log("factory user", user)
    //       resolve(user)
    //     }).catch( (err)=> {
    //       reject(err)
    //     })
    //   })
    // },
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

    getFields: function() {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/fields`)
        .then((data) => {
          console.log("got data from back end", data)
          resolve(data.data)
        })
      })
    }



  }
})