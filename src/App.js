import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Taylor from "./pages/Taylor";
import User from "./pages/TaylorFolder/User";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/nate" component={Nate} /> */}
          {/* <Route exact path="/ian" component={Ian} /> */}
          {/* <Route exact path="/rachel" component={Rachel} /> */}
          <Route exact path="/taylor" component={Taylor} />
          <Route exact path="/taylor/:id" component={User} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Container>
    </>
  );
}

export default App;
