import React, { useState } from "react";
import { useEffect } from "react";
import Search from "./Search";

export default function ListDisp(props) {
  const [data, setData] = useState(props.props);
  const [searchTerm, setsearchTerm] = useState();
  const searchvalue = (value) => {
    setsearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm) {
      setData(
        props.props.filter((e) => {
          return e.name.includes(searchTerm);
        })
      );
    } else {
      setData(props.props);
    }
  }, [searchTerm]);

  return (
    <div>
      <Search searchvalue={searchvalue}></Search>
      {data?.map((e) => {
        return <h2 key={e.id}>{e.name}</h2>;
      })}
    </div>
  );
}
