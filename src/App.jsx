import { Global } from "./App.styles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
