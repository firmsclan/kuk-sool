import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/views/about/about";
import Main from "./components/views/main/main";
import History from "./components/views/history/history";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
