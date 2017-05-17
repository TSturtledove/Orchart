app.factory("plantsFactory", function($http) {
  return {
    add: function(newplant) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/field/newPlant`, newplant)
        .then((plant)=> {
          console.log("got plant back from factory", plant)
          resolve(plant)
        }).catch( (err)=> {
          console.log("fired error catch", err)
          reject(err)
        })
      })
    },

    makePlantTreatment: function(newplanttreatment) {
      return new Promise((resolve, reject) => {
        $http.post(`http://localhost:3000/api/v1/plants/newplanttreatment`, newplanttreatment)
        .then((planttreat)=> {
          console.log("got plant back from factory", planttreat)
          resolve(planttreat)
        }).catch( (err)=> {
          console.log("fired error catch", err)
          reject(err)
        })
      })
    },

    getPlants: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/plants/${id}`)
        .then((data) => {
          console.log("got the data from backend for plants", data)
          resolve(data.data)
        })
      })
    },

    getPlant: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/oneplant/${id}`)
        .then((data) => {
          console.log("got the data from backend for plant", data)
          resolve(data.data)
        })
      })
    },

    getPlantTreatments: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/plants/treatments/${id}`)
        .then((data) => {
          console.log("got the data from backend for plant treatments", data)
          resolve(data.data)
        })
      })
    },

        remove: function(num) {
          return new Promise((resolve,reject) => {
            $http.delete(`http://localhost:3000/api/v1/plantremoval/${num}`)
              .then((data) => {
                resolve()
              })
          })
        },

        update: (updateInfo) => {
          return new Promise((resolve, reject) => {
            $http.patch(`http://localhost:3000/api/v1/plantedit`, updateInfo)
            .then((data) => {
              resolve()
            })
            .catch((err) => console.log("err:", err))
          })
        }

  }
})
