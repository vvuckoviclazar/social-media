import { use, useState } from "react";
import "./index.css";
import { IoIosSearch } from "react-icons/io";
import Btn from "./btn.jsx";
import Post from "./post.jsx";
import { userAccount } from "./data";

function App() {
  const [posts, setPosts] = useState(userAccount.posts);
  const [inputTextValue, setInputTextValue] = useState("");

  const generateId = () => crypto.randomUUID();

  const addComment = (id, text) => {
    if (!text.trim()) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                {
                  id: generateId(),
                  name: userAccount.owner,
                  text,
                  image: userAccount.picture,
                  commentLikes: [],
                },
                ...p.comments,
              ],
            }
          : p
      )
    );
  };

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, likes: [{ name: userAccount.owner }, ...p.likes] }
          : p
      )
    );
  };

  const likeComment = (postId, commentId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id !== postId
          ? p
          : {
              ...p,
              comments: p.comments.map((c) =>
                c.id !== commentId
                  ? c
                  : {
                      ...c,
                      commentLikes: [
                        { name: userAccount.owner },
                        ...c.commentLikes,
                      ],
                    }
              ),
            }
      )
    );
  };

  const unlikeComment = (postId, commentId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id !== postId
          ? p
          : {
              ...p,
              comments: p.comments.map((c) =>
                c.id !== commentId
                  ? c
                  : {
                      ...c,
                      commentLikes: c.commentLikes.filter(
                        (l) => l.name !== userAccount.owner
                      ),
                    }
              ),
            }
      )
    );
  };

  const isCommentLiked = (comment) => {
    return comment.commentLikes.some((l) => l.name === userAccount.owner);
  };

  const unlikePost = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, likes: p.likes.filter((l) => l.name !== userAccount.owner) }
          : p
      )
    );
  };

  const updatePostText = (id, text) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, text } : p)));
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const addPost = (e) => {
    e.preventDefault();

    if (!inputTextValue.trim()) return;

    const newObject = {
      owner: userAccount.owner,
      picture: userAccount.picture,
      id: generateId(),
      date: new Date().toISOString(),
      text: inputTextValue,
      likes: [],
      comments: [],
    };

    setPosts((prev) => [newObject, ...prev]);

    setInputTextValue("");
  };

  const updateComment = (postId, commentId, newText) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id !== postId
          ? p
          : {
              ...p,
              comments: p.comments.map((c) =>
                c.id !== commentId ? c : { ...c, text: newText }
              ),
            }
      )
    );
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

      <form onSubmit={addPost} className="write-form">
        <input
          type="text"
          value={inputTextValue}
          onChange={(e) => setInputTextValue(e.target.value)}
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
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onUpdateText={updatePostText}
              deletePost={deletePost}
              likePost={likePost}
              unlikePost={unlikePost}
              isLiked={post.likes.some((l) => l.name === userAccount.owner)}
              addComment={addComment}
              likeComment={likeComment}
              unlikeComment={unlikeComment}
              isCommentLiked={isCommentLiked}
              updateComment={updateComment}
              ownerName={userAccount.owner}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
