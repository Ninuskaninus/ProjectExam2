import Layout from "./components/layout";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Venue from "./pages/venue";
import Login from "./pages/login";
import CreateAccount from "./pages/createaccount";
import AddVenue from "./pages/addVenue";

function App({ children }) {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue/:id" element={<Venue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/addvenue" element={<AddVenue />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
