import React from "react";

function Card(props) {
  return (
    <div className="grid lg:grid-cols-12 md:me-3">
      {/* <div className='lg:col-span-1 '></div> */}
      <div className="col-span-12">{props.children}</div>
    </div>
  );
}

export default Card;
