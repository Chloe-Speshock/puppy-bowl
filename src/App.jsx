import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/add-player" element={<newPlayerForm />} />

        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
