import React from "react";
import "./create.css";

const InputField = (props) => {
    const {id, type,name, placeholder} = props;
  return (
    <div className="form-outline inputField">
        <input className="form-control"  type={type} name={name} id={id} placeholder={placeholder}/>
    </div>
  );
};

export default InputField;
