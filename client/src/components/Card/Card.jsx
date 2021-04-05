import React from "react";

import "./CardStyle.css";

const Card = (props) => {
  let data = props.data;
  console.log(data);
  return (
    <div className="card-container">
      <img src={data.links.mission_patch_small} style={{ width: "10rem",height:"10rem"}} alt="logo" />
      <div className="info">
        <div className="main-title">
      <h5 style={{ color: "cornflowerblue" }}>
        {data.mission_name} #{data.flight_number}
      </h5>
      </div>
      <div className="info-title">
        <h5>Mission Ids:</h5>
        <span>{data.mission_id[0]}</span>
      </div>
      <div className="info-title">
        <h5>Launch Year:</h5>
        <span>{data.launch_year}</span>
      </div>
      <div className="info-title">
        <h5>Launch Successful:</h5>
        <span>{data.launch_success || "false" }</span>
      </div>
      <div className="info-title">
        <h5>Successful Landing:</h5>
        <span>{data.rocket.first_stage.cores[0].land_success || "false"}</span>
      </div>
    </div>
    </div>
  );
};

export default Card;