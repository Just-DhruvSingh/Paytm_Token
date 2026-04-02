import { Route, Routes } from "react-router-dom";
import CreateToken from "./pages/CreateToken";
<<<<<<< HEAD
import Home from "./pages/Home";
import ManageTokens from "./pages/ManageTokens";
import TokenDashboard from "./pages/TokenDashboard";
import TokenHistory from "./pages/TokenHistory";
=======
import TokenSuccess from "./pages/TokenSuccess";
import TokenFailure from "./pages/TokenFailed";
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<TokenSuccess />} />
    <Route path="/failure" element={<TokenFailure />} />
      <Route path="/token" element={<TokenDashboard />} />
      <Route path="/token/manage" element={<ManageTokens />} />
      <Route path="/token/history" element={<TokenHistory />} />
      <Route path="/create" element={<CreateToken />} />
    </Routes>
  );
}

export default App;
