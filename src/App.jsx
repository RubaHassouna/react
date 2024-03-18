import { Navbar } from "react-bootstrap";
import { Navigate, Router, useNavigate } from "react-router-dom";
function App() {

    const nav=useNavigate()



  return (
    <div className="App-Page">
      <button onClick={() => nav("/Movie")} className="bn632-hover bn27">
        Movies
      </button>
      <button onClick={() => nav("/FlipCard")} className="bn632-hover bn27">Flip Card</button>
      <button  onClick={() => nav("/SeriesPage")}className="bn632-hover bn27">Movies Cards</button>
    </div>
  );
}

export default App;
