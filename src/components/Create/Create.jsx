import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import "./create.css";

const Create = () => {
  const [formType, setFormType] = useState(false);
  const [formLink, setFormLink] = useState(
    "https://localhost:7041/Location/AddLocation"
  );

  const [locData, setLocData] = useState({
    id: 1,
    name: "",
    imgUrl: null,
    description: "",
    address: "",
    type: "",
    oTime: "",
    cTime: "",
    entranceFee: 0,
    rules: "",
    restaurantId: 1,
    tourGuideId: 1,
  });

  const [resData, setResData] = useState({
    name: "",
    imgUrl: "",
    address: "",
    description: "",
  });

  const changeForm = () => {
    setFormType(!formType);
  };

  const submit = (e) => {
    e.preventDefault();

    const locationConfig = {
      method: "post",
      url: "/Location/AddLocation",
      data: {
        name: locData.name,
        imgUrl: locData.imgUrl,
        description: locData.description,
        address: locData.address,
        type: locData.type,
        oTime: locData.oTime,
        cTime: locData.cTime,
        entranceFee: locData.entranceFee,
        rules: locData.rules,
        restaurantId: locData.restaurantId,
        tourGuideId: locData.tourGuideId,
      },
    };

    const RestaurantConfig = {
      method: "post",
      url: "/Restaurant/AddRestaurant",
      data: {
        name: resData.name,
        imgUrl: resData.imgUrl,
        address: resData.address,
        description: resData.description,
      },
    };

    if (formType) {
      axios(locationConfig)
        .then((res) => {
          console.log(res.status);

          setLocData({
            id: 1,
            name: "",
            imgUrl: null,
            description: "",
            address: "",
            type: "",
            oTime: "",
            cTime: "",
            entranceFee: 0,
            rules: "",
            restaurantId: 0,
            tourGuideId: 0,
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios(RestaurantConfig)
        .then((res) => {
          console.log(res.status);

          setResData({
            name: "",
            imgUrl: "",
            address: "",
            description: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container Create">
        <button onClick={changeForm}>
          Change to {formType ? "Restaurant" : "Place"}
        </button>
        <form className="form" method="POST" action={formLink}>
          <InputField
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={resData.imgUrl}
            onChange={(e) => {
              setResData({ ...resData, imgUrl: e.target.value });
              setLocData({ ...locData, imgUrl: e.target.value });
            }}
          />
          <InputField
            type="text"
            name="placeName"
            value={resData.name}
            placeholder="Place Name"
            onChange={(e) => {
              setResData({ ...resData, name: e.target.value });
              setLocData({ ...locData, name: e.target.value });
            }}
          />
          <InputField
            type="text"
            name="description"
            placeholder="Description"
            value={resData.description}
            onChange={(e) => {
              setResData({ ...resData, description: e.target.value });
              setLocData({ ...locData, description: e.target.value });
            }}
          />
          <InputField
            type="text"
            name="address"
            placeholder="Address"
            value={resData.address}
            onChange={(e) => {
              setResData({ ...resData, address: e.target.value });
              setLocData({ ...locData, address: e.target.value });
            }}
          />
          {formType && (
            <InputField
              type="text"
              name="type"
              value={locData.type}
              placeholder="Type"
              onChange={(e) => {
                setLocData({ ...resData, type: e.target.value });
              }}
            />
          )}
          {formType && (
            <InputField
              type="text"
              name="oTime"
              value={locData.oTime}
              placeholder="Opening Time"
              onChange={(e) => {
                setLocData({ ...resData, oTime: e.target.value });
              }}
            />
          )}
          {formType && (
            <InputField
              type="text"
              name="cTime"
              value={locData.cTime}
              placeholder="Closing Time"
              onChange={(e) => {
                setLocData({ ...resData, cTime: e.target.value });
              }}
            />
          )}
          {formType && (
            <InputField
              type="number"
              name="entranceFee"
              value={locData.entranceFee}
              placeholder="Entrance Fee"
              onChange={(e) => {
                setLocData({ ...resData, entranceFee: e.target.value });
              }}
            />
          )}
          {formType && (
            <InputField
              type="text"
              name="rules"
              value={locData.rules}
              placeholder="Rules"
              onChange={(e) => {
                setLocData({ ...resData, rules: e.target.value });
              }}
            />
          )}
          <button type="submit" onClick={submit}>
            Create
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
