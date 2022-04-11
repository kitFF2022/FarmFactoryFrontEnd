const axios = require('axios');

function getUserAccount() {
    return axios.get('/user/12345');
  }
  
  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }
  
  Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
      const acct = results[0];
      const perm = results[1];
    });