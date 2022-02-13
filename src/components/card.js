import axios from "axios";
import { useEffect, useState } from "react"

//const baseURL = "https://krds-assignment.github.io/aoc/api-assets/data.json";
// const baseURL ="https://jsonplaceholder.typicode.com/users/1";
function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://krds-assignment.github.io/aoc/api-assets/data.json')
      .then(res => {
        console.log( res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))

  }, []);


  const arr =data.map((data,index)=>{
  return(
  <tr>
      <td>{data.logo}</td>
      <td>{data.desc}</td>
      <td>{data.title}</td>   
    </tr>

  )
  })

  return (
    <div className="App">
      <h1>project</h1>
      <table>
        <tr >
          <th>logo</th>
          <th>desc</th>
          <th>title</th>
        </tr>
{arr}
      </table>

    </div>
  );
}
export default Get;
