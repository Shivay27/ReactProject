import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMAGE, Menu_API } from "../../utils/constants";
const RestaurantMenu = () =>

{
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(()=> { 
        fetchMenu();
    } ,[]);


const fetchMenu = async () =>
{
const data = await fetch (Menu_API + resId); // useparams gives us id from resId
const json = await data.json();
console.log(json);
setResInfo(json.data);
};
if (resInfo === null) return ( <Shimmer />);

console.log(resInfo?.cards[0]?.card?.card?.info,"info");
  const { name ,cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards);


return (
        <div className="menu">
            <h1>{name}</h1>
             <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
             
            <ul>
                {itemCards?.map((item) => (
                    
                    <div className="inside_card_container-wrapper">
                     <div key={item.card.info.id} className='inside_card_container'>
                     <div>
                      <div className='inside_card_name'>{item.card.info.name}</div>
                      <div class='price'>{item?.card?.info?.price/100}</div>
                      <div>{item?.card?.info?.description}</div>
                     </div>
                     <div>
                     <img className="logo"src= {`${MENU_IMAGE}${item?.card?.info?.imageId}`}></img>
                     </div>
                 </div>
                 </div>
                // <li key={item.card.info.id}>
                //     {item.card.info.name} - {" "}

                // {item.card.info.price/100} - {" "}
                // <img className="logo"src= {`${MENU_IMAGE}${item.card.info.imageId}`}></img>
            
                // </li>
                ))}
                
                <li>Choco Lava Cake</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;