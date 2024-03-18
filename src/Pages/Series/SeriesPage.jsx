import { Data } from "../../components/Series/Data"
import Series from "../../components/Series/Series"


function SeriesPage(){

const dataShow = Data.map((item) =>
 <Series key={item.title} img={item.img}
 title={item.title} 
 Desc={item.Desc}
 rating={item.rating}
 /> );
    return(
        <div className="d-flex flex-row  justify-content-between" style={{height:""}}>
          {dataShow}
        </div>
    )
}
export default SeriesPage