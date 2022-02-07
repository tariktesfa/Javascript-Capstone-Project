import {
  getApiData,
  addLike,
} from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');

window.addEventListener('load', async () => {
  await getApiData(itemContainer, itemCounter);
});

itemContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    addLike(event.target.id);
    const likesContainer = event.target.parentNode.querySelector('.total-likes');
    const newVal = +likesContainer.innerHTML + 1;
    likesContainer.innerHTML = newVal;
  }
});

// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
// const id = 'IRmcCRWo9KSYZTxv7MqM'

// const registerNewApp = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'Foodeez',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const data = await response.text();
//   return data;
// };

// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes'

// const createApp = async () => {
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       name: 'Foodeez'
//     })
//   })
//     .then((response) => response.text())
//     .then((json) =>json);
// };

// let a = 'RtogD48rFUxgVZ4q9xII';
