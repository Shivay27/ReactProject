import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../utils/data"
import { useState } from "react";

const Body = () =>
{
  const [res,setRes] = useState(
    restaurants
  );
 
    return (
        <div className ="body">
            <div className = "filter">
              <button className ="filter-btn" onClick={() =>
              {
               const filteredList = res.filter(
                  (rest) => rest.info.avgRating > 4.0
                  );
                 
                  setRes(filteredList);
              }}>Rating 4.0+</button>
            </div>
            <div className="filter1">
              <button className="filter-btn1" onClick={() =>
              {
                const filteredList1 = res.filter(
                  (rest) => rest.info.areaName == "Chowk",
                );
                setRes(filteredList1);
              }}
           >Pricing</button>
            </div>
           <div className="filter2">
            <button className="filter-btn2" onClick={() =>{

            setRes(restaurants)} }
            >clear</button>
           </div>
            
            <div className="res-container">

              {
                res?.map((item)=>{
                 return <RestaurantCard key={item.info.id} resData={item} />
                })
              }
               
            </div>
        </div>
    )
}

export default Body