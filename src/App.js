import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AEN</h1>
        <Router>
          <Switch>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Header />
      </header>
    </div>
  );
}

export default App;
