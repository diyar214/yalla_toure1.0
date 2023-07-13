import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/PlaceCard";

const Places = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7041/Location/GetAllLocations");
      setAllData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className="container-fluid places">
      {allData.map((item) => {
        const {id, name, imgUrl,description, address, type, oTime, cTime, enteranceFee, rules }= item;
          return (
          <Cards
            key={id}
            name={name}
            imgUrl={imgUrl}
            description={description}
            address={address}
            type={type}
            oTime={oTime}
            cTime={cTime}
            entranceFee={enteranceFee}
            rules={rules}
          />
          )
        
      })}

    </div>
  );
};

export default Places;