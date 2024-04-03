import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../Pages/DashBoard.jsx";
import Movie from "../Pages/Movie/movie.jsx";
import FlipCard from "../Pages/FlipCard/FlipCard.jsx";
import Forms from "../Pages/Forms/Forms.jsx";
import SeriesPage from "../Pages/Series/SeriesPage.jsx";

function App() {
  // const nav = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route path="Movie" element={<Movie />} />
        </Route>
        <Route path="/Forms" element={<Forms />} />
        <Route path="/FlipCard" element={<FlipCard />} />
        <Route path="/SeriesPage" element={<SeriesPage />} />
      </Routes>
      {/* <Outlet />
      <DashBoard />
      <SideBar /> */}
    </div>
  );
}

//   return(
//  <React.Fragment>
//   <section>
//   <div className="bg-danger h-20 w-full flex items-center pl-10 space-x-4">
//  <div>
//     <h1 className="text-white text-3xl">
//     Training Projects
//     </h1>
//   </div>
//   </div>
//  </section>
//  <section>
//   <div className=" grid grid-cols-12">
//    <div className=" col-span-3 bg-black h-screen pl-2">ff</div>
//    <div className=" col-span-9 bg-green-500 h-screen pl-2"></div>

//   </div>
//  </section>

//  </React.Fragment>

// <React.Fragment>
// <MainPage/>
// </React.Fragment>

//   {/* <div className="App-Page">
//   <button onClick={() => nav("/Movie")} className="bn632-hover bn27">Movies</button>
//   <button onClick={() => nav("/FlipCard")} className="bn632-hover bn27">Flip Card</button>
//   <button  onClick={() => nav("/SeriesPage")}className="bn632-hover bn27">Movies Cards</button>
//   <button  onClick={() => nav("/useState1")}className="bn632-hover bn27">Memes API</button>
//   <button onClick={() => nav("/Forms")} className="bn632-hover bn27">Forms</button>
//   <button onClick={() => nav("/ExpenseItem")} className="bn632-hover bn27">ExpenseItem</button>
//   <button onClick={() => nav("/Statee")} className="bn632-hover bn27">hooks useState</button>
//   <button onClick={() => nav("/Effect")} className="bn632-hover bn27">hooks useEffect</button>
//   <button onClick={() => nav("/Context")} className="bn632-hover bn27">hooks useContext</button>
//   <button onClick={() => nav("/Ref")} className="bn632-hover bn27">hooks useRef</button>
//   <button onClick={() => nav("/Reducer")} className="bn632-hover bn27">hooks Reducer</button>
//   <button onClick={() => nav("/Callback")} className="bn632-hover bn27">hooks Callback</button>
//   <button onClick={() => nav("/Memo")} className="bn632-hover bn27">hooks Memo</button>

//       </div>
//       </div>

export default App;
