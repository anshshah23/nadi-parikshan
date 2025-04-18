import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loaders/loader2/CustomLoader2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./pages/Landing"));
const Chat = React.lazy(() => import("./pages/Chat"));
const Login = React.lazy(() => import("./components/LoginPage"));
const Register = React.lazy(() => import("./components/RegisterPage"));
const DoctorsPage = React.lazy(() => import("./pages/DoctorsPage"));
const PreviousChats = React.lazy(() => import("./pages/Previous"));
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="flex flex-row justify-center min-h-screen w-screen">
        <Suspense
          fallback={
            <div className="min-h-screen w-screen flex items-center justify-center bg-cream">
              <Loader className="h-40" />
            </div>
          }
        >
          <div className="w-full min-h-screen overflow-y-scroll mt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/calendar" element={<PreviousChats />} />
            </Routes>
          </div>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
