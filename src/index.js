import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';
import displayComment from './modules/commentPopup.js';

const starter = async () => {
  const movie = await moviesCall();
  const films = movie.slice(0, 20).map((item) => item);
  await Render(films);
};

starter().then(() => {
  displayComment();
});
