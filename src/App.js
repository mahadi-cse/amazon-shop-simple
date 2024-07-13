import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/Shop/NotFound';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/manage',
    element: <Inventory />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails/>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
