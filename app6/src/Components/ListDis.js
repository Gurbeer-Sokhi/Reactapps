import React, { useState } from "react";
import Newtask from "./Newtask";

export default function ListDis(props) {
  const [data, setData] = useState(props.props);

  const Addtask = (value) => {
    setData([...data, value]);
  };
  return (
    <div>
      <Newtask Addtask={Addtask}></Newtask>
      {data &&
        data.map((e) => {
          return <h2>{e}</h2>;
        })}
    </div>
  );
}
