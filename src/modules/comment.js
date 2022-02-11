/* eslint-disable  import/no-cycle */

import { commentCounter } from './commentCounter.js';
import showCommentPopup from './commentPopup.js';

const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(e.target.id);
    const comment = getMovieComment(e.target.id);
    commentCounter(comment);
  }
});

export default getMovieComment;
