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
  } else if (variation === "options-btn") {
    modifierClass = "options-btn";
  } else if (variation === "edit-btn") {
    modifierClass = "edit-btn";
  } else if (variation === "delete-btn") {
    modifierClass = "delete-btn";
  } else if (variation === "add-comment-btn") {
    modifierClass = "add-comment-btn";
  } else if (variation === "like-comment-liked") {
    modifierClass = "like-comment-liked";
  }

  const finalClass = `${baseClass} ${modifierClass}`;

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
