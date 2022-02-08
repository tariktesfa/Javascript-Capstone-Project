import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';

const starter = async () => {
    const data = await moviesCall();
    await Render(data);
}

starter();