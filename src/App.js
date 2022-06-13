import Home from "./pages/home/Home";
import Topbar from './componenst/topbar/Topbar';
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write"
import Single from './pages/single/Single'

import {
  BrowserRouter as Router,
  Routes,
  Route, Link

} from "react-router-dom";



function App() {
  const user = true;
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={  user ? <Login /> : <Login />} />

        <Route path="/register" element={  user ? <Register /> : <Register />} />

        <Route path="/write" element={user ? <Write /> : <Login /> } />

        <Route path="/settings" element={ user ? <Settings/> : <Login />} />

        <Route path="/post/:postId" element={<Single />} />
         
      </Routes>
    </Router>

  );
}

export default App;
