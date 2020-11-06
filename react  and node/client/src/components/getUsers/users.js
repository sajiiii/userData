const axios = require('axios');
let users={
  getUsers(data){

    return new Promise(function (resolve, reject) {
      axios
        .get('/getUsers')
        .then(res => {
          resolve(res.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  updateUser(data){
    return new Promise(function (resolve, reject) {
      axios
        .post('/updateUser',data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteUser(data){
    return new Promise(function (resolve, reject) {
      axios
        .post('/deleteUser',data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
module.exports=users;