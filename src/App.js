import './components/style/index.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from './components/pages/footer';
import Home from './components/pages/home';
import MovieDetailPage from './components/pages/moviedetailpage';
import SeeMore from './components/pages/seemore';

function App() {
  return (
    <>
      <Router>

        <div className="App">
          <Routes>

            <Route path="/" element={< Home />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path='/seemore' element={ <SeeMore/>} />
          </Routes><br />

          <Footer
            copyright="&copy; 2021 MovieBox by Adriana Eka Prayudha"
        />
        </div>

      </Router>

      </>
  );
}

export default App;
