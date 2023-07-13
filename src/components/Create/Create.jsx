import React ,{useState}from "react";
import InputField from "./InputField";
const Create = () => {
    const [formType, setFormType]= useState(1);
    function changeForm(){
      setFormType(!formType)

    }

  return (
    <div className="container">
    <button onClick={changeForm} >Change to {formType?"Restaurant":"Place"}</button>
    <form className="form" method="POST" action={formType?"https://localhost:7041/Location/AddLocation":"https://localhost:7041/Restaurant/AddRestaurant"}>
      <InputField type="text" name="imgUrl" id="imgUrl" placeholder="Image URL" />
      <InputField type="text" name="placeName" id="placeName" placeholder="Place Name"/>
      <InputField type="text" name="discription" id="discription" placeholder="Discription"/>
      <InputField type="text"name="address" id="address"  placeholder="Address"/>
      {formType &&<InputField type="text" name="type" placeholder="Type"/>}
      {formType &&<InputField type="text" name="oTime" id="oTime" placeholder="Opening Time" />}
      {formType &&<InputField type="text" name="cTime" id="CTime" placeholder="Closing Time"/>}
      {formType &&<InputField type="number" name="entranceFee" id="entranceFee" placeholder="Entrance Fee"/>}
      {formType &&<InputField type="text" name="rules" id="rules" placeholder="Rules"/>}
      <input type="submit" value="Submit" />
    </form>

    </div>
  );
};

export default Create;
