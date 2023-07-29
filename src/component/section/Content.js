import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="image_para">
        <img src="../ContentPic/content.png" alt="image1" />
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
          <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
          <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          <br /> SHOES.
        </p>
        <div className="double_btn">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <img
          className="first_img"
          src="./ContentPic/contentlabel.png"
          alt="image2"
        />
        <br />
        <img
          className="second_img"
          src="../ContentPic/shops.png"
          alt="image3"
        />
      </div>
    </div>
  );
};

export default Content;
