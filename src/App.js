import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Board from "./board/index";
import Footer from "./component/Footer";
import Join from "./component/join";
import Navbar from "./component/Navbar";
import MainPage from "./main/index";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
