import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./components/home";
import CreateDronePage from "./components/createDronePage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create/drone" element={<CreateDronePage />} />
              <Route path="/drone/information" element={<CreateDronePage />} />
              <Route path="maintenance" element={<HomePage />} />
              <Route path="maintenance/drone/information" element={<CreateDronePage />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
