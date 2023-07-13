import React from "react";
import CardDetail from "./CardDetail";

const Cards = (props) => {
  const { name,imgUrl, description, address} = props;
  return (
    <div className="card col">
      <div className="card-body">
        <img src={imgUrl} alt="restaurant image"/>
        <h5 className="card-title">{name}</h5>
        <CardDetail text={"Description: "} value={description}/>
        <CardDetail text={"Address: "} value={address}/>
        
      </div>
    </div>
  );
};

export default Cards;
