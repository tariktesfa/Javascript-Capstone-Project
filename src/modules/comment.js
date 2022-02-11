// eslint-disable-next-line import/no-cycle
import { commentCounter } from './commentCounter.js';
import showCommentPopup from './commentPopup.js'

const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    console.log('working');
    showCommentPopup(e.target.id)
    const comment = getMovieComment(e.target.id);
    const commentNumber = commentCounter(comment);
    
    // document.querySelector('.total-comments').textContent = commentNumber || 0;
    // await getMovieComment(e.target.id);
  }
});

export default getMovieComment;
