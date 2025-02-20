


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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

import HomePage from "./components/HomePage";
//import ErrorPage from "./components/404Page";
import ContactUs from "./components/ContactUs";
import FaqPage from "./components/FaqPage";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn/SignIn.jsx";
import Signup from "./components/SignUp/SignUp.jsx";
// import ForgotPassPage from "./components/ForgotPassPage";  
import ErrPage from "./components/404Page";
import Service from "./components/ServiceList";
//import BlogPage from "./components/BlogPage";
//import Booking from "./components/Booking/index.jsx";
import HubSpotChat from "./components/HubSpotChat";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import { Toaster } from 'sonner';
import Dashboard from "./components/Dashoard/index.jsx";
import BookingPage from "./components/Dashoard/BookingPage/index.jsx";
import ContactPag from "./components/Dashoard/ContactPage/ContactPage.jsx";
//import TermsOfUse  from "./components/TermsOfUse/index.jsx";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Router>
        <HubSpotChat />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-process" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* <Route path="/terms-of-use" element={<TermsOfUse />} /> */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          {/* <Route path="/forgot-password" element={<ForgotPassPage />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Service />} />
          {/* <Route path="/blogs" element={<BlogPage />} /> */}
          {/* <Route path="/booking" element={<Booking />} /> */}
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
