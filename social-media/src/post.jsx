import { BiSolidLike } from "react-icons/bi";
import { CgComment } from "react-icons/cg";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Btn from "./btn.jsx";
import { userAccount } from "./data";
import { useEffect, useState } from "react";
import Comments from "./comments.jsx";
import { format, formatDistanceToNow } from "date-fns";

function Post({
  post,
  onUpdateText,
  deletePost,
  likePost,
  unlikePost,
  isLiked,
}) {
  const [openOptions, setOpenOptions] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <li className="post-item">
      <div className="userName-div">
        <div className="left-mini-div">
          <img className="post-img" src={`/${post.picture}`} alt="" />
          <div className="date-name-div">
            <h1 className="post-h1">{post.owner}</h1>
            <p className="date-p">
              {post.fixed
                ? format(new Date(post.date), "MMM d, yyyy")
                : formatDistanceToNow(new Date(post.date), { addSuffix: true })}
            </p>
          </div>
        </div>
        <div className="right-mini-div">
          <Btn
            onClick={() => setOpenOptions(!openOptions)}
            variation="options-btn"
          >
            <HiOutlineAdjustmentsHorizontal className="options-icon" />
          </Btn>
          {openOptions && (
            <div className="options-div">
              {isEditing ? (
                <Btn
                  onClick={() =>
                    setIsEditing(!isEditing) || setOpenOptions(!openOptions)
                  }
                  variation="edit-btn"
                >
                  Finish
                  <FaRegEdit />
                </Btn>
              ) : (
                <Btn
                  onClick={() => setIsEditing(!isEditing)}
                  variation="edit-btn"
                >
                  Edit <FaRegEdit />
                </Btn>
              )}
              <Btn onClick={() => deletePost(post.id)} variation="delete-btn">
                Delete <MdDelete />
              </Btn>
            </div>
          )}
        </div>
      </div>
      {isEditing ? (
        <input
          className="editing-input"
          type="text"
          value={post.text}
          onChange={(e) => onUpdateText(post.id, e.target.value)}
        />
      ) : (
        <h2 className="post-text">{post.text}</h2>
      )}
      <div className="like-comment-div">
        <p className="liked-by-text">
          {post.likes.length > 0
            ? post.likes.map((l) => l.name).join(", ") + " liked this post."
            : ""}
        </p>

        <p
          onClick={() => setOpenComments(!openComments)}
          className="comment-count"
        >
          {post.comments.length} comments
        </p>
      </div>

      <div className="post-buttons-div">
        <Btn
          onClick={() => (isLiked ? unlikePost(post.id) : likePost(post.id))}
          variation="like"
        >
          Like
          <BiSolidLike
            className="post-like"
            color={isLiked ? "skyblue" : undefined}
          />
        </Btn>
        <Btn variation="comment">
          <CgComment className="post-comment" />
          Comment
        </Btn>
      </div>

      <div className="comment-section">
        <img className="post-img" src={`/${userAccount.picture}`} alt="" />
        <input
          type="text"
          className="comment-input"
          placeholder="Write a comment"
        />
        <button className="add-comment-btn">Add comment</button>
      </div>

      {openComments && (
        <ul className="comment-list">
          {post.comments.map((comment, index) => (
            <Comments key={index} comment={comment} postId={post.id} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Post;
