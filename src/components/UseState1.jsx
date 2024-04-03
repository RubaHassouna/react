import { useEffect, useState } from "react";
import Name from "./useEffectApp.jsx";
function App() {
  const [data, setData] = useState([]);
  const dataShow = data.map((item, index) => <Name name={item} key={index} />);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes.map((item) => item.name)));
  }, []);
  return (
    <div>
      {dataShow}
    </div>
  );
}

export default App;



// function UseState () {
//     const[Ruba,setRuba]=React.useState("yes");
//     function Rubaa(){
// setRuba((v)=> !v);
//     }
//   return (
//     <div style={{fontFamily:"fantasy"}}
//     onClick={Rubaa}>
//       {Ruba ? "yes" : "no"}
//     </div>

//   )
// }

// export default UseState;
