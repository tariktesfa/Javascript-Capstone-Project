const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`).catch((err) => err);
  return response.json();
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    await getMovieComment(e.target.id);
    // commentNumber += 1;
    document.querySelector('.total-comments').textContent = commentNumber || 0;
  }
});

export default getMovieComment;