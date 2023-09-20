import { Lobby } from "./components/Lobby";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
