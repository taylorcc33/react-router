import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import Rachel from "./pages/Rachel/Rachel";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Container>
       <Switch>
      <Route exact path="/rachel/:breed" component={Rachel} />
         
        </Switch> 
      </Container>
    </>
  );
}

export default App;
