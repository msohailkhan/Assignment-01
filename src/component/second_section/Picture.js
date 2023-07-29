import React from "react";

const Picture = (props) => {
  return (
    <div>
      <img src={props.src} alt="pic" />
    </div>
  );
};

export default Picture;
