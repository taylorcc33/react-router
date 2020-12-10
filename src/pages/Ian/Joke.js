import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Header } from "semantic-ui-react";

const Joke = (props) => {
  let [joke, setJoke] = useState("");
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let { category } = useParams();

  const getJoke = async () => {
    try {
      let res = await Axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      // code pauses here and awaits for axios code to finish
      setJoke(res.data.value);
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
      setError(err.response.status);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <Header>{props.category} Joke:</Header>
      <p>{joke}</p>
    </>
  );
}

export default Joke
