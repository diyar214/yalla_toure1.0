import React from "react";
import "./style.css";

function ViewMore(props) {
  return (
    <div className="view-more">
      {console.log(props)}
      <button {...props}>View More</button>
    </div>
  );
}

export default ViewMore;
