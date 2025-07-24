import { Global } from "./App.styles";
import { ProjectStyles } from "./styles/ProjectStyles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <ProjectStyles />
      <NavBar />
      <div className="main-content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
