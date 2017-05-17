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
    }



  }
})
