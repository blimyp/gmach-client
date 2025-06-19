import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import AxisOrder from './pages/axisOrder';
import NavButtons from './components/navButtons/navButtons';
import routes from './constants/routes';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <div className='scroll-div'>
        <NavButtons />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.axisOrder} element={<AxisOrder />} />
          <Route path={routes.gallery} element={<Gallery />} />
          <Route path={routes.orders} element={<AxisOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
