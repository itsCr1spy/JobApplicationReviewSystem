import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import CustNavbar from "./components/CustNavbar";
import Home from "./views/homePage";
import Register from "./views/registerPage";
import Login from "./views/loginPage";
import ProtectedPage from "./views/ProtectedPage";
import AddCandidate from "./views/AddCandidate";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <CustNavbar />
          <Routes>
            <Route
              exact
              path="/protected/*"
              element={<PrivateRoute element={<ProtectedPage />} />}
            />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Home />} path="/" />
						<Route element={<AddCandidate/>} path="/addCandidate" />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
