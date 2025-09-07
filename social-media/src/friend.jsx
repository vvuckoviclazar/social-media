function Friend({ friend }) {
  return (
    <li className="search-friend-card">
      <img
        src={`/${friend.picture}`}
        alt={friend.name}
        className="search-friend-img"
      />
      <h3 className="search-friend-name">{friend.name}</h3>
    </li>
  );
}

export default Friend;
