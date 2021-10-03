import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllServices from "./components/AllServices/AllServices";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/all-services">
            <AllServices></AllServices>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
