import { Navigate } from "react-router-dom";
import CMDBLayout from "./layouts/cmdbLayout";
import ServersAndPCsPage from "./components/page/serversAndPCsPage";

const routes = () => [
  {
    path: "cmdb",
    element: <CMDBLayout />,
    children: [
      {
        path: "srvpcs",
        element: <ServersAndPCsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/cmdb/srvpcs" />,
  },
];

export default routes;
