import React from "react";
import ReactDOM from "react-dom/client";

import './Style/dashboard.css'
import App from "./App/App.jsx";
import "./App/App.css"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./Pages/Movie/movie.jsx";
import "./Pages/Movie/movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropsPage from "./Pages/PropsPage/props.jsx";
import "./Pages/PropsPage/props.css";
import SeriesPage from "./Pages/Series/SeriesPage.jsx";
import "./components/Series/series.css";
import FlipCard from "./Pages/FlipCard/FlipCard.jsx"
import "./Pages/FlipCard/FlipCard.css"
// import UseState from "./components/UseState.jsx";
import UseState1 from "./components/UseState1.jsx"
import Forms from "./Pages/Forms/Forms.jsx"
import Statee from "./Pages/Hooks/Statee.jsx";
import Effect from "./Pages/Hooks/Effect.jsx"
import Context from "./Pages/Hooks/Context/Context.jsx"
import Ref from "./Pages/Hooks/Ref/Ref.jsx"
import Reducer from "./Pages/Hooks/Reducer.jsx"
import Callback from "./Pages/Hooks/Callback.jsx"
import Memo from "./Pages/Hooks/Memo.jsx"
import DashBoard from "./Pages/DashBoard.jsx";


//import ExpenseItem from "./Pages/ExpenseItem/ExpenseItem.jsx"

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/DashBoard/Movie",
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
  // {
  //   path: "/UseState",
  //   element: <UseState />,
  // },
  {
    path: "/UseState1",
    element: <UseState1 />,
  },
  {
    path: "/Statee",
    element: <Statee />,
  },
  {
    path: "/Effect",
    element: <Effect />,
  },
  {
    path: "/Forms",
    element: <Forms />,
  },
  {
    path: "/Context",
    element: <Context />,
  },
  {
    path: "/Ref",
    element: <Ref />,
  },
  {
    path: "/Reducer",
    element: <Reducer />,
  },
  {
    path: "/Callback",
    element: <Callback />,
  },
  {
    path: "/Memo",
    element: <Memo />,
  },
  {
    path: "/DashBoard",
    element: <DashBoard />,
  },
  // {
  //   path: "/ExpenseItem",
  //   element: <ExpenseItem />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <div>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
