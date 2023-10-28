import React, { useState } from "react";

export default function ListDis(props) {
  const [data, setData] = useState(props.props);

  return (
    data &&
    data.map((e) => {
      console.log(e);
      return <h2 key={e.id}>{e.name}</h2>;
    })
  );
}
