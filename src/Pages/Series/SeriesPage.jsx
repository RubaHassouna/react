import { Data } from "../../components/Series/Data"
import Series from "../../components/Series/Series"

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function SeriesPage(){

const dataShow = Data.map((item) =>
 <Series key={item.title} img={item.img}
 title={item.title} 
 Desc={item.Desc}
 rating={item.rating}
 /> );
    return(
      <div>

     <Header/>
     <div className="d-flex flex-row  justify-content-between" style={{height:""}}>
     <SideBar/>
       
         
          {dataShow}
        </div>
        </div>
    )
}
export default SeriesPage