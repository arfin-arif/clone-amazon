import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Oders from './components/Oders/Oders';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Oders></Oders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }
        ,
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    }
  ]);
  return (
    <div >
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
