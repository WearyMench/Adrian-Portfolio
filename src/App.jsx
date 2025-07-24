import { Global } from "./App.styles";
import { ProjectStyles } from "./styles/ProjectStyles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Global />
        <ProjectStyles />
        <NavBar />
        <div className="main-content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
