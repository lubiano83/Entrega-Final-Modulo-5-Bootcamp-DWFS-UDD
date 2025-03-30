import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";
import Inicio from "./component/Inicio";

function App() {

  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path="*" element={ <main><h1>¡404 Error, Not Found!</h1></main> } />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App
