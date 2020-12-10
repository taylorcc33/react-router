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
    })
    .catch((err) => {
      setLoading(false);
      setError(true);
    });
}, []);

const renderCategories = () => {
  return jokes.map((j) => (
    <Link to={`/Ian/${j}`}>
      <h1 key={j} category={j}>{j}</h1>
    </Link>
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
