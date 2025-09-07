import Btn from "./btn.jsx";
import { BiSolidLike } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

function Comment({
  comment,
  postId,
  likeComment,
  unlikeComment,
  isCommentLiked,
  ownerName,
  updateComment,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="comment-li">
      <div className="comment-user">
        <img className="post-img" src={`/${comment.image}`} alt={""} />
        <div className="comment-style">
          <div className="name-edit-div">
            <span className="comment-name">{comment.name}</span>
            {comment.name === ownerName && (
              <Btn
                onClick={() => setIsEditing(!isEditing)}
                variation={isEditing ? "edit-comment-active" : "edit-comment"}
              >
                <FaRegEdit />
              </Btn>
            )}
          </div>

          <span className="comment-text">
            {isEditing ? (
              <input
                type="text"
                className="comment-edit-input"
                value={comment.text}
                onChange={(e) =>
                  updateComment(postId, comment.id, e.target.value)
                }
              />
            ) : (
              comment.text
            )}
          </span>

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

export default Comment;
