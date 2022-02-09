const Render = async (data) => {
    data.forEach(e => {
        const list = document.getElementById('cards');
        // console.log(e.like);
        list.innerHTML += ` <div class="card" >
        <img src="${e.image.original}" alt="">
        <div class="span-items">
            <h4>${e.name}</h4>
            <i class="far fa-heart likes" id="love-icon"></i>
            <span id="${e.id}"></span>
        </div>
        <button>Watch me</button>
        </div>`  
    });
}

export default Render;