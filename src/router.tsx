import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

