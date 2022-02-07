import showData from './showData.js';
import itemCounter from './itemCounter.js';

export const addLike = (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then((response) => response.text())
    .then((json) => json);
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes');
  return response.json();
};

const showUI = async (data, iContain, itemCount) => {
  const likes = await getLikes();
  const storage = [];
  data.forEach((item) => {
    storage.push({
      ...(likes.find((innerItem) => innerItem.item_id.toString() === item.id.toString())),
      ...item,

    });
  });
  const itemContain = iContain;
  const iCount = itemCount;
  itemCounter(storage.length, iCount);
  showData(itemContain, storage);
};

export const getApiData = (iContain, itemCount) => {
  fetch('http://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      showUI(data, iContain, itemCount);
    });
};