import React from "react";

import "./CardListStyle.css";
import Card from "../Card/Card";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.data.map((data, i) => (
        <Card key={i} data={data} />
      ))}
    </div>
  );
};