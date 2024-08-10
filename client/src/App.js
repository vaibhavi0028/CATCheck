import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Auth from "./components/Auth";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./essentials/Navbar";
import Footer from "./essentials/Footer";
import LandingPage from "./components/LandingPage";

function AppContent() {
  const location = useLocation();
  const isAuthPath = location.pathname.includes("/auth");

  return (
    <>
      <ScrollToTop />
      {!isAuthPath && <Navbar />}
      <Routes>
        <Route exact path="/auth/signin" element={<Auth />} />
        <Route exact path="/auth/signup" element={<Auth />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      {!isAuthPath && <Footer />}
    </>
  );
}

function App() {
  // document.addEventListener("keydown", function (event) {
  //   if (event.ctrlKey) {
  //     event.preventDefault();
  //   }
  //   if (event.keyCode === 123) {
  //     event.preventDefault();
  //   }
  // });
  // document.addEventListener("contextmenu", (event) => event.preventDefault());

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
