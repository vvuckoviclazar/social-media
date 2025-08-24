function Btn({ children, onClick, variation }) {
  const baseClass = "cv-buttons";
  let modifierClass = "";

  if (variation === "add-post") {
    modifierClass = "add-post";
  } else if (variation === "like") {
    modifierClass = "like";
  } else if (variation === "comment") {
    modifierClass = "comment";
  } else if (variation === "add-comment-btn") {
    modifierClass = "add-comment-btn";
  } else if (variation === "like-comment") {
    modifierClass = "like-comment";
  } else if (variation === "delete-comment") {
    modifierClass = "delete-comment";
  }

  const finalClass = `${baseClass} ${modifierClass}`;

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
