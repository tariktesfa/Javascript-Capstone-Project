import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';

const starter = async () => {
    const data = await moviesCall();

    let films = data.slice(0, 20).map((item) => {
        return item 
    });
    
    await Render(films);
}

starter();