import React from "react";
import axios from 'axios';

function DeleteBtn(props) {

  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;