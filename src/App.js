import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import {Route, Switch } from "react-router-dom"
import Ian from "./pages/Ian/Ian";
import Joke from "./pages/Ian/Joke";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/ian" component={Ian} />
          <Route exact path="/Ian/:category" component={Joke} />

        </Switch>
      </Container>
    </>
  );
}

export default App;
