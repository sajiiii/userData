
 const axios = require('axios');
const createUser={
  createUser(data){

    return new Promise(function (resolve, reject) {
      axios
        .post('/createUser', data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
    
  },

}
export default createUser;