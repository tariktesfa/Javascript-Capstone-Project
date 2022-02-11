import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';
import showCommentPopup from './modules/commentPopup.js';

const starter = async () => {
  const movie = await moviesCall();
  const films = movie.slice(0, 20).map((item) => item);
  await Render(films);
};

starter();

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(e.target.id);
  }
});
