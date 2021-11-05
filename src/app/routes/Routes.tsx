import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
