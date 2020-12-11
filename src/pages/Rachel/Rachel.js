import Axios from "axios";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";


const Rachel =() => {
  const [breeds, setbreeds] =useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);


const getBreeds = () =>{
  Axios.get(`https://api.thecatapi.com/v1/images/search`)
  .then((res) => {
    setBreeds(res.data);
    setLoading(false);

  })

.catch((err) => {
  setLoading(false);
  setError(true);
});
}

useEffect(()=> {
  getBreeds()
},[]);

const renderBreeds =() =>{
return breeds.map((b) => (
  <>
  <link to={`/Rachel/${b}`}>
  <h1 key= {b} breeds= {b}>{b}</h1>}
  </link>
</>
  ))
}
if (loading) {
  return (
    <div>
    <h1>loading</h1>
    </div>
  );
}

return(
  <>
  <Header>Pick a Cat!!!</Header>
  {renderBreeds()}
  </>
);



export default Rachel