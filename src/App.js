import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/views/about/about";
import Main from "./components/views/main/main";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
