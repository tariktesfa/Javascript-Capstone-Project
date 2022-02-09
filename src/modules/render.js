const Render = async (data) => {
  data.forEach((e) => {
    const list = document.getElementById('cards');
    list.innerHTML += ` <div class="card" >
          <img src="${e.image.original}" alt="">
          <div class="span-items">
              <h4>${e.name}</h4>
              <span>14 likes</span>
          </div>
          <button movie-id="" id="${e.id}" class="comment">Comment</button>
          </div>`;
  });
};

export default Render;