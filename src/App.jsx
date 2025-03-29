import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";
import Inicio from "./component/Inicio";

function App() {

  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Inicio /> } />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App
