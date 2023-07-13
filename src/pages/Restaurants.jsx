import Cards from "../components/Cards/PlaceCard";
import RestaurantCard from "../components/Cards/ResturantCard"

import { useState, useEffect } from "react";
import axios from "axios";

const Places = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7041/Restaurant/GetAllRestaurants");
      setAllData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className="container-fluid places">
      {allData.map((item) => {
        const {id, name, imgUrl,description, address}= item;
          return (
          <RestaurantCard
            key={id}
            name={name}
            imgUrl={imgUrl}
            description={description}
            address={address}
            
          />
        );
      })}
    </div>
  );
};

export default Places;