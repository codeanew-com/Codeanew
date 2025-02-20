import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// importing file styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/jquery.selectBox.css";
import "./assets/css/rangeslider.css";
import "./assets/css/jquery.mCustomScrollbar.css";
import "./assets/fonts/font-awesome/css/font-awesome.min.css";
import "./assets/fonts/flaticon/font/flaticon.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/skins/default.css";
// importing Components...
import SignIn from "./components/SignIn/SignIn.jsx";
import Signup from "./components/SignUp/SignUp.jsx";
import ErrPage from "./components/404Page";
// import HubSpotChat from "./components/HubSpotChat";
import { Toaster } from "sonner";
import Dashboard from "./components/Dashoard/index.jsx";
import BookingPage from "./components/Dashoard/BookingPage/index.jsx";
import ContactPag from "./components/Dashoard/ContactPage/ContactPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersPage from "./components/Dashoard/UsersPage/index.jsx";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Router>
        {/* <HubSpotChat /> */}
        {/* Wrap the app with AuthProvider */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="*" element={<ErrPage />} />
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-user"
              element={
                <ProtectedRoute>
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-bookings"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-contacts"
              element={
                <ProtectedRoute>
                  <ContactPag />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
