import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Nav from "./Scetion/Nav";

function App() {
  return (
      <>
        <Nav />
        <Main />
        <Footer />
      </>
  );
}

export default App;
