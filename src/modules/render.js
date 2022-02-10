import { updateLikes } from './getLikes.js';

const Render = async (data) => {
  data.forEach(async (e) => {
    const likes = await updateLikes(e.id);
    const list = document.getElementById('cards');
    list.innerHTML += ` <div class="card" >
        <img src="${e.image.original}" alt="">
        <div class="span-items">
            <h4>${e.name}</h4>
            <i class="far fa-heart likes" id="love-icon"></i>
            <span id="${e.id}">${likes}</span>
        </div>
        <button movie-id="${e.id}" id="${e.id}" class="comment-btn">Comment</button>
        </div>`;
  });
};

export default Render;