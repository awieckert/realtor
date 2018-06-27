import axios from 'axios';
import constants from '../constants.js';

const getRequest = () => {
  return new Promise ((resolve, reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/listings.json`).then((data) => {
      const listingsArray = [];
      if (data.data !== null) {
        Object.keys(data.data).forEach((key) => {
          data.data[key].id = key;
          listingsArray.push(data.data[key]);
        });
      }
      resolve(listingsArray);
    }).catch((err) => {
      reject(err);
    });
  });
};

export default {getRequest};
