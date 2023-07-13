import React from "react";
import CardDetail from "./CardDetail";

const Cards = (props) => {
  const { name,imgUrl, description, address, type, oTime, cTime, enteranceFee, rules } = props;
  // console.log(props);
  return (
    <div className="card">
      <div className="card-body">
        <img src={imgUrl} alt="place image"/>
        <h5 className="card-title">{name}</h5>
        <CardDetail text={"Description: "} value={description}/>
        <CardDetail text={"Address: "} value={address}/>
        <CardDetail text={"Type: "} value={type}/>
        <CardDetail text={"Opening Time: "} value={oTime}/>
        <CardDetail text={"Closing Time: "} value={cTime}/>
        <CardDetail text={"Entrance Fee: "} value={enteranceFee}/>
        <CardDetail text={"Rules: "} value={rules}/>
        
      </div>
    </div>
  );
};

export default Cards;
