import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import NavButtons from './components/navButtons/navButtons';
import routes from './constants/routes';
import Gallery from './pages/gallery';
import LoginForm from './pages/login';
import Orders from './pages/orders';
import NewOrder from './pages/newOrder/newOrder';
import Article from './pages/article';

function App() {
  return (
    <Router>
      <div className='scroll-div'>
        <NavButtons />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.article} element={<Article />} />
          <Route path={routes.gallery} element={<Gallery />} />
          <Route path={routes.orders} element={<Orders />} />
          <Route path={routes.login} element={<LoginForm />} />
          <Route path={routes.newOrder} element={<NewOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
