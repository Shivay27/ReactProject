import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../utils/data"
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Body = () => {
  const [res, setRes] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const [Filteredresturant, setFilteredResturant] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.898865006805263&lng=80.92828094959259&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonD = await data.json();
    const originalData = jsonD.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRes(originalData)
    setFilteredResturant(originalData)
    // console.log(jsonD.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,"json");
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return ("oops looks like you are offline");


  if (res?.length === 0) {
    return (<div className="shimmer-container">
      <Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer />
    </div>)

  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button onClick={() => {
            console.log(searchText);
            const FilteredResturant = res.filter
              (((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
              );
            setFilteredResturant(FilteredResturant);
          }}
          >Search

          </button>
        </div>
        <div>
        <button className="filter-btn" onClick={() => {
          const filteredList = res.filter(
            (rest) => rest.info.avgRating > 4.0
          );

          setFilteredResturant(filteredList)
        }}>Rating 4.0+</button>
        <button className="filter-btn2" onClick={() => {
           const allCards=res.map(
            (rest) => rest
          );
          setFilteredResturant(allCards)
        }}
        >clear</button>
        </div>
      </div>

      <div className="res-container">

        {
          Filteredresturant?.map((item) => {
            return <Link className="res_card_child" key={item.info.id}
              to={"restaurants/" + item.info.id}>
              <RestaurantCard resData={item} /></Link>
          })
        }

      </div>
    </div>
  )
}

export default Body