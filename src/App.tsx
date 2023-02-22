import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardsCont } from "./components/CardsCont";
import { ErrorPage } from "./components/ErrorPage";
import { CardDetail } from "./components/CardDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<CardsCont />} />
          <Route path="/details/:id" element={<CardDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
