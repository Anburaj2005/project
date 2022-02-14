import axios from "axios";
import { useEffect, useState } from "react";
import "./card.css";

function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://krds-assignment.github.io/aoc/api-assets/data.json")
      .then((res) => {
        console.log(res.data);
        setData(res.data.features);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return (
      <div style={{ backgroundColor: bgColor }} className="cards" key={index}>
        <img className="logo" src={data.logo} />
        <img className="product-icon " src={data.image} />
        <div className="title">{data.title}</div>
        <hr className="new1"></hr>
        <div className="desc">{data.desc}</div>
      </div>
    );
  });

  return <div className="wrapper">{arr}</div>;
}
export default Get;