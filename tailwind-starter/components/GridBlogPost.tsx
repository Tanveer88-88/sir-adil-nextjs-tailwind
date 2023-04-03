import Image from "next/image";
import Link from "next/link";
import React from "react";
import Image1 from "@/shared/Images/blog1.jpg";
import Image2 from "@/shared/Images/blog2.jpg";
import Image3 from "@/shared/Images/blog3.jpg";
import Image4 from "@/shared/Images/blog4.jpg";
import Image5 from "@/shared/Images/blog5.jpg";
import Image6 from "@/shared/Images/blog6.jpg";

const GridBlogPost = () => {
  return (
    <div className="container">
      <div className="item">
        <Image src={Image1} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
      <div className="item">
        <Image src={Image2} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
      <div className="item">
        <Image src={Image3} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
      <div className="item">
        <Image src={Image4} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 4</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
      <div className="item">
        <Image src={Image5} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 5</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
      <div className="item">
        <Image src={Image6} alt="blogpost" className="img"></Image>
        <div>
          <h2>Blog title 6</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <Link href={"#"} className="link">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default GridBlogPost;
