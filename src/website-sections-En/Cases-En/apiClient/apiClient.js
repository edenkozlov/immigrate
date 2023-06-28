import axios from 'axios';
export function createRep(data) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/createRep`;
  
    return axios.post(url, { data });
  }
  
  export function createUser(repId, data) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/createUser/${repId}`;
  
    return axios.post(url, { data });
  }
  
  export function deleteUser(repId, userId) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/deleteUser/${repId}/${userId}`;
  
    return axios.delete(url);
  }
  
  export function getUserData(userId) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/getUser/${userId}`;
  
    return axios.get(url);
  }
  
  export function getAllUsers(repId) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/getAllUsers/${repId}`;
  
    return axios.get(url);
  }
  
  export function updateUser(userId, data) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/updateUser/${userId}`;
  
    return axios.patch(url, { data });
  }
  
  export function cloneUser(repId, userId) {
    const url = `https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/cloneUser/${repId}/${userId}`;
  
    return axios.post(url);
  }



