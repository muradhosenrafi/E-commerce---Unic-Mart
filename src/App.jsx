import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import SingUp from './pages/SingUp';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Product from "./pages/Product";






const router = createBrowserRouter(
  createRoutesFromElements(
<>
<Route path="/" element={<RootLayout/>}>
<Route path="/" element={<Home/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/singup" element={<SingUp/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/shop" element={<Product/>}></Route>
<Route path="/*" element={<Error/>}></Route>

</Route>

</>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;