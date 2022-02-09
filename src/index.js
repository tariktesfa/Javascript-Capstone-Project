import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';
import displayComment from './modules/commentPopup.js';

const starter = async () => {
  const data = await moviesCall();
  const films = data.slice(0, 20).map((item) => item);
  await Render(films);
};

starter().then(() => {
  displayComment();
});
