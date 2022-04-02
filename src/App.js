import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import "./styles/main.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
