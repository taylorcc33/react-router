import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nate" component={Nate} />
          <Route exact path="/ian" component={Ian} />
          <Route exact path="/rachel" component={Rachel} />
          <Route exact path="/taylor" component={Taylor} />
          <Route component={NoMatch} />
        </Switch> */}
      </Container>
    </>
  );
}

export default App;
