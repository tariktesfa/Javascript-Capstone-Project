import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';
import { postLikes, getLikes } from './modules/getLikes.js'

const starter = async () => {
    const data = await moviesCall();

    let films = data.slice(0, 20).map((item) => {
        postLikes(item.id)
        return item 
    });
    await Render(films);
    await getLikes();
}

starter();