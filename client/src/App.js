import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Auth from "./components/Auth";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./essentials/Navbar";
import LandingPage from "./components/LandingPage";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/auth/signin" element={<Auth />} />
        <Route exact path="/auth/signup" element={<Auth />} />
        <Route exact path="/" element={<Navbar LandingPage />} />
      </Routes>
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
