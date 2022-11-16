import React from "react";
import { useSelector } from "react-redux";

function Psikologscard() {
  const state = useSelector((state) => state.psikolog);
  console.log(state);

  return (
    <div>
      <h1> tes </h1>
    </div>
  );
}

export default Psikologscard;
