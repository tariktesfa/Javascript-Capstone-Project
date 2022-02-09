import getMovieComment from './commentApi.js';

const commentPopup = document.querySelector('.comment-popup');
const getTotalComments = async (movieId) => {
  const result = await getMovieComment(movieId)
    .then((comment) => (!comment.error ? comment.length : 0))
    .catch(() => 0);
  return result;
};

const updateCommentCounter = (movieId) => {
  getTotalComments(movieId).then((totalComment) => {
    commentPopup.querySelector('.total-comments').innerHTML = totalComment;
  });
};
export const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

export default updateCommentCounter;