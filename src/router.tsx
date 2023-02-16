import Layout from "components/Layout";
import FineTune from "pages/dashboard/fineTune";
import FineTuneCreate from "pages/dashboard/fineTune/create";
import FineTuneDetails from "pages/dashboard/fineTune/details";
import FineTuneTable from "pages/dashboard/fineTune/table";
import Home from "pages/dashboard/home";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <>Signup</>,
  },

  //DASHBOARD LAYOUT ROUTES
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "fine-tune",
        element: <FineTune />,
        children: [
          {
            path: "",
            element: <FineTuneTable />,
          },
          {
            path: "table",
            element: <FineTuneTable />,
          },
          {
            path: "details",
            element: <FineTuneDetails />,
          },
          {
            path: "create",
            element: <FineTuneCreate />,
          },
        ],
      },
    ],
  },
]);
