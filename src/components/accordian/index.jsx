import { useState } from "react";
import data from "./data";
import { ListGroup } from "react-bootstrap";
import  './styles.css';


function Accordian() {
  const [selected, setSelected] = useState(null);
  const[enableMultiSelection , setEnableMultiSelection ]= useState(false);
  const [multiple,setMultiple]=useState([]);
  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId);
    setSelected(getCurrentId);
  }
  function handleMultiSelection(getCurrentId){
let cpyMultible = [... multiple];
const findIndexofCurrentId = cpyMultible.indexOf(getCurrentId)
console.log(findIndexofCurrentId);
if(findIndexofCurrentId === -1) cpyMultible.push(getCurrentId)
else cpyMultible.splice(findIndexofCurrentId , 1)
setMultiple(cpyMultible);
  }
  console.log(selected, multiple);
  return (
    <div className="wrapper">
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
            Enable multi selection
            </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={data.id} className="item">
              <div
                onClick={enableMultiSelection 
                    ? ()=>handleMultiSelection(dataItem.id)
                    :() => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No dataa found ! </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
