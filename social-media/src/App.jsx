import { useState } from "react";
import "./index.css";
import { userAccount } from "./data";

function App() {
  const [posts, setPosts] = useState(userAccount.posts);

  return (
    <>
      <header>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="search-loop"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>

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

      <form className="write-form">
        <input type="text" placeholder="Write a post" className="write-post" />
        <button className="add-post" type="submit">
          Add post
        </button>
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
            <li key={index} className="post-item">
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

                <div className="open-div">
                  <button className="dot-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  </button>

                  <div className="right-mini-div">
                    <button className="edit-post-btn">edit</button>
                    <button className="delete-post-btn">delete</button>
                  </div>
                </div>
              </div>

              <h2 className="post-text">{post.text}</h2>

              <div className="like-comment-div">
                <p className="liked-by-text">
                  {post.likes.map((l) => l.name).join(", ")} liked this post.
                </p>
                <p className="comment-count">{post.comments.length} comments</p>
              </div>

              <div className="post-buttons-div">
                <button className="like like-btn">
                  Like
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                </button>
                <button className="comment comment-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  Comment
                </button>
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

              <ul className="comment-list">
                {post.comments.map((comment, j) => (
                  <li key={j}>
                    <div className="comment-user">
                      <img
                        className="post-img"
                        src={`/${comment.image}`}
                        alt={comment.profile}
                      />
                      <div className="comment-style">
                        <span className="comment-name">{comment.profile}</span>
                        <span className="comment-text">{comment.text}</span>

                        <div className="like-delete-comment">
                          <div className="like-com-div">
                            <button className="like-comment">I like it.</button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                              />
                            </svg>
                            <span className="likes-number">0</span>
                          </div>
                          <button className="delete-comment">
                            Delete comment.
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
