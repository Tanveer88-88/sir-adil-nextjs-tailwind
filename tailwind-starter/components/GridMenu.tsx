import Image from "next/image";
import Link from "next/link";
import React from "react";

const GridMenu = () => {
  return (
    <div className="container grid grid-cols-[1fr,auto]">
      <div className="item">
        <h3>Veg Burger</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque
          hic eligendi
        </p>
      </div>
      <span className="icon">🍔</span>
      <div className="item">
        <h3>Tacos</h3>
        <p>
          Quos sunt non labore ab dicta ea sequi error, sapiente asperiores
          quas.
        </p>
      </div>
      <span className="icon">🌮</span>
      <div className="item">
        <h3>Classic Waffles</h3>
        <p>
          Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa,
          laudantium.
        </p>
      </div>
      <span className="icon"> 🧇 </span>
    </div>
  );
};

export default GridMenu;
