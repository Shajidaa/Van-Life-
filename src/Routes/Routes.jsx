import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Vans from "../Pages/Vans";
import VanDetails from "../Pages/VanDetalis/VanDetails";
import Host from "../Pages/Host/Host";
import HostIncome from "../Pages/Host/HostIncome";
import HostReviews from "../Pages/Host/HostReviews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/vans",
        Component: Vans,
        loader: () => fetch("/vans.json"),
      },
      {
        path: "/vanDetails/:id",
        Component: VanDetails,
        loader: () => fetch("/vans.json"),
      },
      {
        path: "/host",
        Component: Host,
        children: [
          {
            path: "income",
            Component: HostIncome,
          },
          {
            path: "reviews",
            Component: HostReviews,
          },
        ],
      },
    ],
  },
]);

export default router;
