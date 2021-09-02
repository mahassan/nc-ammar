import React from "react";
import "../css/CommentsForm.css";
const CommentsForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="author">Name</label>
        <input type="text" id="author" />
        <label htmlFor="message">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="button" value="Add comment" />
      </form>
    </div>
  );
};

export default CommentsForm;
