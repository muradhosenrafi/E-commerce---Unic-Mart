import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
// import ShopNow from "./pages/ShopNow"

const router = createBrowserRouter(
  createRoutesFromElements(
<>
    <Route
      path="/"
      element={<Home/>}
    />
    {/* <Route
      path="/shop"
      element={<ShopNow/>}
    /> */}
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