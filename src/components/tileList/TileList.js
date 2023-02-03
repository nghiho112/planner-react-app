import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({ tileList }) => {
  return (
    <div>
      {tileList.map((obj, idx) => (<Tile key={idx} tile={obj} />) )}
    </div>
  );
};
