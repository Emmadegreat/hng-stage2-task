import './components/style/index.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from './components/pages/footer';
import Home from './components/pages/home';
import MovieDetailPage from './components/pages/moviedetailpage';

function App() {
  return (
    <>
      <Router>

        <div className="App">
          <Routes>

            <Route path="/" element={< Home />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes><br />
          <hr style={{color:"#1d3344"}}/>
          <Footer
            copyright="&copy; 2021 MovieBox by Adriana Eka Prayudha"
        />
        </div>

      </Router>

      </>
  );
}

export default App;
