import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { FormProvider } from "./context/FormProvider";


function App() {
  return (
    <div className="App">
    <FormProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Formulario />} />
      </Routes>
    </FormProvider>
    </div>
    
  );
}

export default App;
