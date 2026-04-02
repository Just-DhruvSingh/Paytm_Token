import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TokenDashboard from "./pages/TokenDashboard";
import CreateToken from "./pages/CreateToken";
import TokenSuccess from "./pages/TokenSuccess";
import TokenFailure from "./pages/TokenFailed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<TokenSuccess />} />
    <Route path="/failure" element={<TokenFailure />} />
      <Route path="/token" element={<TokenDashboard />} />
      <Route path="/create" element={<CreateToken />} />
    </Routes>
  );
}

export default App;