const showData = (itemContainer, storage) => {
  storage.sort((a, b) => a.id - b.id);
  storage.forEach((item) => {
    if (item.likes == null) {
      item.likes = 0;
    }
    if (item.id <= '10') {
      itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.image.medium}>
<div class="mov-detail">
<p class="mov-name">${item.name}</p>
<div class="likes">
<h4 class="total-likes">${item.likes}</h4>
<i id=${item.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" class="comments">Comments</button>
</li>`;
    }
  });
};

export default showData;