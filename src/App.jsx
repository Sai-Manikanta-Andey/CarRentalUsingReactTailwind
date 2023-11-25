import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import store from './app/store.js'
import Loading from "./components/Loading.jsx";

 const Bookings = lazy(()=> import('./pages/Bookings.jsx'))
 const CarPage = lazy(() => import("./pages/CarPage.jsx"));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookings",
        element: (
          <Suspense fallback={<Loading />}>
            <Bookings />
          </Suspense>
        ),
      },
      {
        path: "/carpage/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <CarPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
