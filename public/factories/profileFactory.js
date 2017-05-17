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
    },

        remove: function(num) {
          return new Promise((resolve,reject) => {
            $http.delete(`http://localhost:3000/api/v1/fieldremoval/${num}`)
              .then((data) => {
                resolve()
              })
          })
        },

        update: (updateInfo) => {
          return new Promise((resolve, reject) => {
            $http.patch(`http://localhost:3000/api/v1/fieldedit`, updateInfo)
            .then((data) => {
              resolve()
            })
            .catch((err) => console.log("err:", err))
          })
        }

  }
})
