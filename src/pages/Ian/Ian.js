import Axios from "axios";
import { useState, useEffect } from "react"; //es6 way
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const Ian = () => {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get('https://api.chucknorris.io/jokes/categories')
    .then((res) => {
      setJokes(res.data);
      setLoading(false);
      debugger;
    })
    .catch((err) => {
      setLoading(false);
      setError(true);
    });
}, []);

const renderCategories = () => {
  return jokes.map((j) => (
  <h1>{j}</h1>
  ))
}

if (loading) {
  return (
    <div>
      <h1>loading</h1>
    </div>
  );
}

return (
  <>
    <Header>Chuck Norris Joke Categories</Header>
    {renderCategories()}
  </>
);
}

export default Ian
