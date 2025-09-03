import Btn from "./btn.jsx";
import { BiSolidLike } from "react-icons/bi";

function Comments({ comment, likeComment, unlikeComment, isCommentLiked }) {
  console.log(comment.name);
  return (
    <li className="comment-li">
      <div className="comment-user">
        <img className="post-img" src={`/${comment.image}`} alt={""} />
        <div className="comment-style">
          <span className="comment-name">{comment.name}</span>
          <span className="comment-text">{comment.text}</span>

          <div className="like-delete-comment">
            <div className="like-com-div">
              <Btn
                onClick={() =>
                  isCommentLiked(comment)
                    ? unlikeComment(comment.id)
                    : likeComment(comment.id)
                }
                variation={
                  isCommentLiked(comment)
                    ? "like-comment-liked"
                    : "like-comment"
                }
              >
                I like it.
              </Btn>
              <span
                className={`likes-number ${
                  isCommentLiked(comment) ? "likedCom" : ""
                }`}
              >
                <BiSolidLike
                  className={`comment-like ${
                    isCommentLiked(comment) ? "likedCom" : ""
                  }`}
                />
                {comment.commentLikes.length}
              </span>
            </div>
            <Btn variation="delete-comment">Delete comment.</Btn>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Comments;
