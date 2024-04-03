import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div>
     
<div className='side-bar'>
<nav>
<Link to="/FlipCard" className='item-link'>Flip Card</Link><br></br>
    <Link to="/DashBoard/Movie" className='item-link'>Movie</Link><br></br>
    <Link to="/SeriesPage" className='item-link'>Series Page</Link><br></br>
    {/* <Link to="/Forms" className='item-link'>Forms</Link><br></br>
    <Link to="/useState1" className='item-link' >useState1</Link><br></br> */}

</nav>
    <Outlet />
</div>
   <Outlet />
    </div>
  )
}

export default SideBar