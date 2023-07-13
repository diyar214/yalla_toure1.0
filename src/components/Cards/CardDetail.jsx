import React from "react";

const CardDetail = (props) => {
  const { text,value } = props;
  return (
        <p className="card-text">
          <strong>{text}</strong> {value}
        </p>
  );
};

export default CardDetail;
