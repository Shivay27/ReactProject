import React from 'react'
import { MENU_IMAGE } from '../../utils/constants'

const CardDetails = ({key,item}) => {
  return (
    <div key={key} className='inside_card_container'>
        <div>
         <div className='inside_card_name'>{key}</div>
         <div class='price'>{item?.card?.info?.price/100}</div>
         <div>{item?.card?.info?.description}</div>
        </div>
        <div>
        <img className="logo"src= {`${MENU_IMAGE}${item?.card?.info?.imageId}`}></img>
        </div>
    </div>
  )
}

export default CardDetails