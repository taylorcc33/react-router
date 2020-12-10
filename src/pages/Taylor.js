import Axios from "axios";
import { useState, useEffect } from "react";
import {
  Dimmer,
  Header,
  Image,
  Loader,
  Segment,
  Card,
  Icon,
} from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

const Taylor = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const renderUsers = () => {
    return users.map((u) => (
      <Card key={u.id}>
        <Card.Content>
          <Image src={`${u.avatar}`} floated="right" size="mini" />
          <Card.Header>
            {u.first_name} {u.last_name}{" "}
          </Card.Header>
          <Card.Meta>
            <span className="date">{u.email}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href={`/taylor/${u.id}`}>
            <Icon name="edit" />
            Edit Info
          </a>
        </Card.Content>
      </Card>
    ));
  };

  if (loading) {
    return (
      <div>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error Occurred</h1>
      </div>
    );
  }

  return (
    <>
      <Segment>
        <Header as="h1">Users</Header>
        <Card.Group>{renderUsers()}</Card.Group>
      </Segment>
    </>
  );
};

export default Taylor;
