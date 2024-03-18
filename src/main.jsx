import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App.jsx";
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./Pages/Movie/movie.jsx";
import "./Pages/Movie/movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Props from "./components/props.jsx";
import PropsPage from "./Pages/PropsPage/props.jsx";
import "./Pages/PropsPage/props.css";
import Series from "./components/Series/Series.jsx";
import SeriesPage from "./Pages/Series/SeriesPage.jsx";
import "./components/Series/series.css";
import FlipCard from "./Pages/FlipCard/FlipCard.jsx"
import "./Pages/FlipCard/FlipCard.css"
import UseState from "./components/UseState.jsx";
const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Movie",
    element: <Movie />,
  },

  {
    path: "/PropsPage",
    element: <PropsPage />,
  },
  
  {
    path: "/SeriesPage",
    element: <SeriesPage />,
  },
 
  {
    path: "/FlipCard",
    element: <FlipCard />,
  },
  {
    path: "/UseState",
    element: <UseState />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
