import axios from "axios";
import { useEffect, useState } from "react";


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
    return (
      <tr key={index}>
        <td>{data.logo}</td>
        <td>{data.desc}</td>
        <td>{data.title}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>project</h1>
      <table>
        <thead>
          <tr>
            <th>logo</th>
            <th>desc</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{arr}</tbody>
      </table>
    </div>
  );
}
export default Get;