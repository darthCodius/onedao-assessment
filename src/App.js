import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Otp from "./components/Otp";
import MainDashboard from "./components/MainDashboard";
import Orders from "./components/Orders";
import Rides from "./components/Rides";
import Clients from "./components/Clients";
import Drivers from "./components/Drivers";
import Shift from "./components/Shift";
import LiveMap from "./components/LiveMap";
import CarClasses from "./components/CarClasses";
import Branches from "./components/Branches";
import Moderators from "./components/Moderators";
import Settings from "./components/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <MainDashboard />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "rides",
            element: <Rides />,
          },
          {
            path: "clients",
            element: <Clients />,
          },
          {
            path: "drivers",
            element: <Drivers />,
          },
          {
            path: "shift",
            element: <Shift />,
          },
          {
            path: "livemap",
            element: <LiveMap />,
          },
          {
            path: "carclasses",
            element: <CarClasses />,
          },
          {
            path: "branches",
            element: <Branches />,
          },
          {
            path: "moderators",
            element: <Moderators />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
