import Layout from './components/layout';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Venue from './pages/venue';
import Login from './pages/login';
import CreateAccount from './pages/createaccount';
import AddVenue from './pages/addVenue';
import MyVenues from './pages/myVenues';
import AppProvider from './contexts/provider';

function App() {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/venue/:id" element={<Venue />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/addvenue" element={<AddVenue />} />
            <Route path="/myvenues/:id" element={<MyVenues />} />
          </Routes>
        </Layout>
      </AppProvider>
    </Router>
  );
}

export default App;
