import { useState } from "react";
import Cards from "../components/Cards/Cards";
import ViewMore from "../components/ViewMoreCard/ViewMore";

const Restaurants = () => {
  const [allData, setAllData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(false);

  const showData = () => {
    setCounter(allData.length - 1);
    setShow(true);
  };

  return (
    <div className="container-fluid places">
      {allData.map((item, i) => {
        if (i === counter - 1 && !show) {
          return <ViewMore onClick={showData} />;
        }
        if (i < counter) return <Cards />;
      })}
    </div>
  );
};

export default Restaurants;
