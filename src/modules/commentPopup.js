const showCommentPopup = (commentPopup, image, name, id) => {
  commentPopup.innerHTML = `<div class="popup">
    <i class="fa fa-times" id="close" aria-hidden="true"></i>
    <div class="display">
        <div class="movie-img">
            <img src=${image} alt="Movie image">
        </div>
        <div class="display-comment">
            <div class="description">
                <h3 class="mov-title">${name}</h3>
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
                    <button id=${id} type="submit" class="submit-btn">Comment</button>
                </form>
            </div>
        </div>
    </div>
  </div>`;
};

export default showCommentPopup;
