import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

function DashBoard() {
  return (
    <div>
    <Header/>
    <div className="content-flex">
      <SideBar />
      <div style={{ width: "80%", }}>
        <Outlet />
      </div>
    </div>
    </div>
  );
}

export default DashBoard;
