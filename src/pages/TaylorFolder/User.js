import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "semantic-ui-react";

const User = (props) => {
  let [user, setUser] = useState({});
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let history = useHistory();
  let { id } = useParams();

  const getUser = aysnc () => {
    try {
      let res = await Axios.get(`https://reqres.in/api/users/${id}`);

      setUser(res.data.data);
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
      setError(err.response.status);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
  <Header>User Edit</Header>
  <p>{id}</p>
  </>
    )
};

export default User;
