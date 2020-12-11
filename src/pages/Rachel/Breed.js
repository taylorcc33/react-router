import Axios from "axios";
import { useState, useEffect } from "react"; //es6 way
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const Breed = (props) => {
  let [breed, setBreed] = useState({});
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let history = useHistory();
  let { id } = useParams();

  const getBreed = async ()=> {
    try {
      let res = await Axios.get(`https://api.thecatapi.com/v1/images/search`);

      setBreed(res.data.data);
      setLoading(false);
      console.log(res);
      catch (err) {
        setLoading(false);
      }
    }
  }