import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

const User = (props) => {
  let [user, setUser] = useState({});
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let history = useHistory();
  let { id } = useParams();

  const getUser = async () => {
    try {
      let res = await Axios.get(`https://reqres.in/api/users/${id}`);
      // code pauses here and awaits for axios code to finish
      setUser(res.data.data);
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
      setError(err.response.status);
    }
  };

  const updateUser = async (user) => {
    console.log("updateUser called");
    try {
      let res = await Axios.put(`https://reqres.in/api/users/${id}`, user);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Segment>
        <Header as="h1">User Edit</Header>
        <p>{id}</p>
      </Segment>
    </>
  );
};

export default User;
