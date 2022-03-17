import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/views/about/about";
import Main from "./components/views/main/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Main />  */}
      <Footer />
    </div>
  );
}

export default App;
