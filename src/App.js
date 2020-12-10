import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import {Route, Switch } from "react-router-dom"
import Ian from "./pages/Ian/Ian";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/ian" component={Ian} />

        </Switch>
      </Container>
    </>
  );
}

export default App;
