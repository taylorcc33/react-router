import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import Nate from './pages/Nate/Nate';
import { Home, NoMatch } from './components/Navbar';
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/nate" component={Nate} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Container>
    </>
  );
}

export default App;
