import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { LandingPage } from "./components/Landing/LandingPage";
import { AddNote } from "./components/Note/AddNote";
import { Home } from "./components/Note/Home";
import { Sidebar } from "./components/Note/Sidebar";
import { useAuth } from "./context/AuthProvider";
import "./styles/main.css"

function App() {
  const { login } = useAuth();
  return (
    <>
      <Sidebar login={login} />
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/note" element={< Home />} />
        <Route path="/add-note" element={< AddNote />} />
      </Routes>
    </>
  );
}

export default App;
