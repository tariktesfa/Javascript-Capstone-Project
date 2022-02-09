const list = document.getElementById('cards');
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Uxox2qKR3NUpYCRDwsgp/likes';

export const postLikes = async (id) => {
    const likesObject = {item_id: id};
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(likesObject),
    });
    return response;
}

export const getLikes = async () => {
    const likesData = await fetch(url);
    const allLikes = await likesData.json();
    return allLikes;
}

export const updateLikes = async (id) => {
    console.log(id);
    const likedData = await getLikes();
    let results = 0;
    likedData.forEach(element => {
        if (element.item_id === id) {
            results = element.likes;
        }
    });
    
}

list.addEventListener('click', (e) => {
    if (e.target.className === 'far fa-heart likes') {
        const icons = e.target;
        const likeId = icons.parentNode.querySelector('span').id;
        updateLikes(likeId);
    }
})
