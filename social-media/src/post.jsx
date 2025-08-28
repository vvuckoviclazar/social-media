import { BiSolidLike } from "react-icons/bi";
import { CgComment } from "react-icons/cg";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Btn from "./btn.jsx";
import { userAccount } from "./data";
import { useState } from "react";
import Comments from "./comments.jsx";

function Post({ post }) {
  const [openOptions, setOpenOptions] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [postLikes, setPostLikes] = useState(post.likes);

  const isLiked = postLikes.some((l) => l.name === userAccount.owner);

  const likePost = () => {
    setPostLikes((prev) =>
      isLiked
        ? prev.filter((l) => l.name !== userAccount.owner)
        : [{ name: userAccount.owner }, ...prev]
    );
  };

  return (
    <li className="post-item">
      <div className="userName-div">
        <div className="left-mini-div">
          <img className="post-img" src={`/${post.picture}`} alt="" />
          <div className="date-name-div">
            <h1 className="post-h1">{post.profile}</h1>
            <p className="date-p">{post.date}</p>
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
              <Btn variation="edit-btn">
                Edit <FaRegEdit />
              </Btn>
              <Btn variation="delete-btn">
                Delete <MdDelete />
              </Btn>
            </div>
          )}
        </div>
      </div>
      <h2 className="post-text">{post.text}</h2>
      <div className="like-comment-div">
        <p className="liked-by-text">
          {postLikes.length > 0
            ? postLikes.map((l) => l.name).join(", ") + " liked this post."
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
        <Btn onClick={() => likePost()} variation="like">
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
            <Comments key={index} comment={comment} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Post;
