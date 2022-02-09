import getMovieComment from './commentApi.js';

const commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';
const movieApi = 'https://api.tvmaze.com/shows';
const commentPopup = document.querySelector('.comment-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentApiEndpoint, params);
  return response;
};

const getMovieData = async (movieId) => {
  const response = await get(`${movieApi}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  commentPopup.querySelector('.comments').innerHTML = data;
};

const showComments = (movieId) => {
  getMovieComment(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li class="comments-list"> <small> ${comment.creation_date} </small>  <span> | ${comment.username}</span> "${comment.comment}" </li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('There is no comments posted yet for this movie.');
    }
  });
};

const closeCommentPopup = () => {
  document.querySelector('#close').addEventListener('click', () => {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showCommentPopup = (movieId) => {
  getMovieData(movieId).then((data) => {
    commentPopup.innerHTML = `<div class="popup">
    <i class="fa fa-times" id="close" aria-hidden="true"></i>
    <div class="display">
        <div class="movie-img">
            <img src=${data.image} alt="Movie image">
        </div>
        <div class="display-comment">
            <div class="description">
                <h3 class="movie-title">${data.name}</h3>
            </div>
            <div class="comment-counter">
                <h3 class='counter'></h3>
                <ul class="comment-list">
            
                </ul>
            </div>
            <div class="comment">
                <div class="add-comment">
                    <h3>Add Comment</h3>
                </div>
                <form class="form">
                    <input type="text" name="name" id="name" placeholder="Your name">
                    <textarea name="description" id="description" cols="30" rows="10"
                        placeholder="Your insight"></textarea>
                    <button id=${movieId} type="submit" class="submit-btn">Comment</button>
                </form>
            </div>
        </div>
    </div>
  </div>`;
    closeCommentPopup();
    showComments(movieId);

    const form = commentPopup.querySelector('.form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.username.value;
      const msg = form.elements.comment.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: msg,
      }).then(() => {
        showComments(movieId);
        form.reset();
      });
    });
  });
  commentPopup.style.display = 'block';
  closeCommentPopup();
};

const displayComments = () => {
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('id');
      showCommentPopup(movieId);
      document.body.style.overflow = 'hidden';
    });
  });
};

export default displayComments;
