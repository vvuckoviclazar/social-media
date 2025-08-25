import { useState } from "react";
import "./index.css";
import { userAccount } from "./data";
import { BiSolidLike } from "react-icons/bi";
import { CgComment } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import Btn from "./btn.jsx";

function App() {
  const [posts, setPosts] = useState(userAccount.posts);
  const [inputValue, setInputValue] = useState("");

  const generateId = () => crypto.randomUUID();

  const toggleIsOpened = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isOpened: !p.isOpened } : p))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = {
      id: generateId(),
      date: "one minute ago",
      text: inputValue,
      likes: [],
      isOpened: false,
      comments: [],
    };

    setPosts((prev) => [newObject, ...prev]);

    setInputValue("");
  };

  return (
    <>
      <header>
        <div className="search-bar">
          <IoIosSearch className="search-loop" />

          <input
            type="text"
            placeholder="Find friends"
            className="find-friends"
          />
        </div>

        <div className="picture-div">
          <img src={`/${userAccount.picture}`} className="img" alt="" />
        </div>
        <div className="search-suggestions" hidden></div>
      </header>

      <div className="introduce-div">
        <div className="background-picture-div">
          <img
            className="background-image"
            src="/background-image.jpg"
            alt=""
          />
        </div>
        <div className="name-div">
          <h1>{userAccount.owner}</h1>
          <p>{userAccount.place}</p>
        </div>
        <img className="img2" src={`/${userAccount.picture}`} alt="" />
      </div>

      <form onSubmit={handleSubmit} className="write-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a post"
          className="write-post"
        />
        <Btn variation="add-post" type="submit">
          Add post
        </Btn>
      </form>

      <div className="friends-and-posts">
        <div className="friends-div">
          <div className="width-div">
            <h1 className="friends-h1">Friends</h1>
            <p>{userAccount.friends.length} friends</p>
            <ul className="friends-list">
              {userAccount.friends.map((friend, index) => (
                <li key={index} className="friend-card">
                  <img
                    src={`/${friend.picture}`}
                    alt={friend.name}
                    className="friend-img"
                  />
                  <h3 className="friend-name">{friend.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="post-list">
          {posts.map((post, index) => (
            <li key={post.id} className="post-item">
              <div className="userName-div">
                <div className="left-mini-div">
                  <img
                    className="post-img"
                    src={`/${userAccount.picture}`}
                    alt=""
                  />
                  <div className="date-name-div">
                    <h1 className="post-h1">{userAccount.owner}</h1>
                    <p className="date-p">{post.date}</p>
                  </div>
                </div>
              </div>
              <h2 className="post-text">{post.text}</h2>
              <div className="like-comment-div">
                <p className="liked-by-text">
                  {post.likes.map((l) => l.name).join(", ")} liked this post.
                </p>
                <p
                  onClick={() => toggleIsOpened(post.id)}
                  className="comment-count"
                >
                  {post.comments.length} comments
                </p>
              </div>

              <div className="post-buttons-div">
                <Btn variation="like">
                  Like
                  <BiSolidLike className="post-like" />
                </Btn>
                <Btn variation="comment">
                  <CgComment className="post-comment" />
                  Comment
                </Btn>
              </div>

              <div className="comment-section">
                <img
                  className="post-img"
                  src={`/${userAccount.picture}`}
                  alt=""
                />
                <input
                  type="text"
                  className="comment-input"
                  placeholder="Write a comment"
                />
                <button className="add-comment-btn">Add comment</button>
              </div>

              {post.isOpened && (
                <ul className="comment-list">
                  {post.comments.map((comment, j) => (
                    <li className="comment-li" key={j}>
                      <div className="comment-user">
                        <img
                          className="post-img"
                          src={`/${comment.image}`}
                          alt={comment.profile}
                        />
                        <div className="comment-style">
                          <span className="comment-name">
                            {comment.profile}
                          </span>
                          <span className="comment-text">{comment.text}</span>

                          <div className="like-delete-comment">
                            <div className="like-com-div">
                              <Btn variation="like-comment">I like it.</Btn>
                              <span className="likes-number">
                                <BiSolidLike className="comment-like" /> 0
                              </span>
                            </div>
                            <Btn variation="delete-comment">
                              Delete comment.
                            </Btn>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
