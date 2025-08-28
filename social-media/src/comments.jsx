import Btn from "./btn.jsx";
import { BiSolidLike } from "react-icons/bi";

function Comments({ comment }) {
  return (
    <li className="comment-li">
      <div className="comment-user">
        <img
          className="post-img"
          src={`/${comment.image}`}
          alt={comment.profile}
        />
        <div className="comment-style">
          <span className="comment-name">{comment.name}</span>
          <span className="comment-text">{comment.text}</span>

          <div className="like-delete-comment">
            <div className="like-com-div">
              <Btn variation="like-comment">I like it.</Btn>
              <span className="likes-number">
                <BiSolidLike className="comment-like" /> 0
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
