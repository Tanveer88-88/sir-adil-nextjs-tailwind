import Image from "next/image";
import Link from "next/link";
import React from "react";

import bag from "@/shared/Images/bag.webp";
import glass from "@/shared/Images/glassess.webp"

const GridShoppingCart = () => {
  return (
    <div className="container">
      <Image src={bag} alt="bag" className="img"></Image>
      <div className="desc">
        <h3>Stylish Tote Bag</h3>
        <p>Brown Color Women's Tote Bag</p>
        <span>#368798</span>
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" value={1} size={1}/>
      </div>
      <div className="price"> $99.00</div>
      <Image src={glass} alt="bag" className="img"></Image>
      <div className="desc">
        <h3>Sunglasses</h3>
        <p>Glasses with wooden frame</p>
        <span>#756328</span>
      </div>
      <div>
        <label>Quantity:</label>
        <input type="text" value={1} size={1}/>
      </div>
      <div className="price"> $142.00</div>
    </div>
  );
};

export default GridShoppingCart;
