import { Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";
import AboutViews from "./views/AboutViews";
import TiempoViews from "./views/TiempoViews";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import useDarkMode from "./hook/useDarkMode";
import NotFoundPage from "./views/NotFoundPage";
import { ErrorBoundary } from "./component/ErrorBoundary";

function App() {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const year = new Date().getFullYear();
  const email = "lubiano83@gmail.com";
  const derechos = `© ${year} Todos los derechos reservados`;
  const linkedin = "https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/";

  return (
    
      <ApiProvider>
        <div className={`min-h-screen grid grid-rows-[auto_1fr_auto] ${isDarkMode ? "bg-amber-50" : "bg-green-50"}`}>
          <Navbar linkedin={linkedin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={ <AboutViews isDarkMode={isDarkMode} /> } />
              <Route path="/weather" element={ <ErrorBoundary isDarkMode={isDarkMode} > <TiempoViews isDarkMode={isDarkMode} /> </ErrorBoundary> } />
              <Route path="*" element={ <NotFoundPage isDarkMode={isDarkMode} /> } />
            </Routes>
          <Footer email={email} derechos={derechos} isDarkMode={isDarkMode} />
        </div>
      </ApiProvider>
   
  )
}

export default App;