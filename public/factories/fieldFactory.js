app.factory("fieldFactory", function($http) {
  return {
    add: function(newtreatment) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/field/newtreatment`, newtreatment)
        .then((field)=> {
          console.log("got field back to factory", field)
          resolve(field)
        }).catch( (err)=> {
          console.log("fired error catch", err)
          reject(err)
        })
      })
    },


    getField: function(id) {
      // console.log("passed", id)
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/field/${id}`)
        .then((data) => {
          console.log("got data from back end", data)
          resolve(data.data)
        })
      })
    },

    getTreatments: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/treatments/${id}`)
        .then((data) => {
          console.log("got the data from backend for treatments", data)
          resolve(data.data)
        })
      })
    },

        remove: function(num) {
          return new Promise((resolve,reject) => {
            $http.delete(`http://localhost:3000/api/v1/fieldtreatmentremoval/${num}`)
              .then((data) => {
                resolve()
              })
          })
        },

        update: (updateInfo) => {
          return new Promise((resolve, reject) => {
            $http.patch(`http://localhost:3000/api/v1/fieldtreatmentedit`, updateInfo)
            .then((data) => {
              resolve()
            })
            .catch((err) => console.log("err:", err))
          })
        }

  }
})
