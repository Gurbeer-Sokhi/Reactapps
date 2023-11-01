import React from "react";
import { useEffect } from "react";

export default function Search(props) {
  const handlechange = (e) => {
    props.searchvalue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        className="search"
        onChange={handlechange}
      ></input>
    </div>
  );
}
