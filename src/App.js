import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import Home from "./components/Home";
import "./css/App.css";
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
            <Route path="/article/:article_id">
              <SingleArticle />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Header />
        </Router>
      </header>
    </div>
  );
}

export default App;
