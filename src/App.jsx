import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";
import AboutViews from "./views/AboutViews";
import TiempoViews from "./views/TiempoViews";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import useDarkMode from "./hook/useDarkMode";
import Message from "./component/Message";

function App() {

  const { isDarkMode } = useDarkMode();
  const year = new Date().getFullYear();
  const email = "lubiano83@gmail.com";
  const derechos = `© ${year} Todos los derechos reservados`;
  const linkedin = "https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/";

  return (
    <ApiProvider>
        <BrowserRouter>
          <div className={`min-h-screen grid grid-rows-[auto_1fr_auto] ${isDarkMode ? "bg-amber-50" : "bg-green-50"}`}>
            <Navbar linkedin={linkedin} />
            <Routes>
              <Route path="/" element={ <AboutViews isDarkMode={isDarkMode} /> } />
              <Route path="/weather" element={ <TiempoViews isDarkMode={isDarkMode} /> } />
              <Route path="*" element={ <Message isDarkMode={isDarkMode} >¡Not Found: Error 404!</Message> } />
            </Routes>
            <Footer email={email} derechos={derechos} />
          </div>
        </BrowserRouter>
    </ApiProvider>
  )
}

export default App;
