import './style.css';
import Render from './modules/render.js';
import moviesCall from './modules/movieCall.js';
import showCommentPopup from './modules/commentPopup';

const starter = async () => {
  const movie = await moviesCall();
  const films = movie.slice(0, 20).map((item) => item);
  await Render(films);
};


starter()

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    console.log('working');
    showCommentPopup(e.target.id)
    // const comment = await getMovieComment(e.target.id);
    // const commentNumber = commentCounter(comment);
    
    // document.querySelector('.total-comments').textContent = commentNumber || 0;
    // await getMovieComment(e.target.id);
  }
});

