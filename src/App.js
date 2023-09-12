import './components/style/index.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from './components/pages/footer';
import Home from './components/pages/home';
import Singlepage from './components/pages/singlepage';

function App() {
  return (
    <>
      <Router>

        <div className="App">
          <Routes>

            <Route path="/" element={< Home />} />
            <Route path="/movies/:id" element={<Singlepage />} />
          </Routes>
          <Footer
            copyright="&copy; 2021 MovieBox by Adriana Eka Prayudha"
        />
        </div>

      </Router>

      </>
  );
}

export default App;
