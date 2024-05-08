import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Fsd from "./components/Fsd";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/fsd",
        element: <Fsd />,
      },
      {
        path: "/data-science",
        element: <DataScience />,
      },
      {
        path: "/cyber-security",
        element: <CyberSecurity />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>
  );
};

export default App;
