import { useState,useEffect } from "react";

// function Statee() {
//   const [color, setColor] = useState("blue");
//   return (
//     <>
//       <h1>my favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("pink")}>
//         pink
//       </button>
//     </>
//   );
// }
// export default Statee;

// function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");
//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   );
// }
// export default Car;

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red",
//   });
//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is aaa {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   );
// }
// export default Car;

// function Car() {
//     const [car, setCar] = useState({
//       brand: "Ford",
//       model: "Mustang",
//       year: "1964",
//       color: "red"
//     });

//     const updateColor = () => {
//       setCar(previousState => {
//         return { ...previousState, color: "blue" }
//       });
//     }

//     return (
//       <>
//         <h1>My {car.brand}</h1>
//         <p>
//           It is a {car.color} {car.model} from {car.year}.
//         </p>
//         <button
//           type="button"
//           onClick={updateColor}
//         >Blue</button>
//       </>
//     )
//   }
//   export default Car;

// function Click() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Click</button>
//       counter value is {count}
//     </>
//   );
// }
// export default Click;

// function Statee() {
//   const initialCount=0
// const[count,setCount]=useState(initialCount)

// const incrementFive=()=> {
//   for(let i=0;i<5;i++){
//     setCount(prevCount => prevCount +1)
//   }
// }
//   return (
//     <div>
// count :{count}
// <button onClick={()=>setCount(initialCount)}>Reset</button>
// <button onClick={()=>setCount(prevCount => prevCount +1)}>increment</button>
// <button onClick={()=>setCount(prevCount => prevCount -1)}>decrement</button>
// <button onClick={incrementFive}>increment 5</button>
//     </div>
//   )
// }

// export default Statee

// function Statee() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name.firstName}
//           onChange={(e) => setName({...name, firstName: e.target.value })}
//         />
//         <input
//           type="text"
//           value={name.lastName}
//           onChange={(e) => setName({ ...name, lastName: e.target.value })}
//         />
//         <h2>your first name is : {name.firstName}</h2>
//         <h2>your last name is : {name.lastName}</h2>
//         <h4>{JSON.stringify(name)}</h4>
//       </form>
//     </div>
//   );
// }
// export default Statee;

// function Statee() {
//   const [items, setItems] = useState([]);

//   const addItem=()=>{
//     setItems([...items,{
//       id: items.length,
//       value:Math.floor(Math.random()*10)+1
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addItem}>add number</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Statee;

// function state(){
//   const [count,setCount]=useState(0)

//   useEffect(() =>{
//     document.title=`you clicked ${count} times`
//   })
//   return(
// <>
// <button onClick={() => setCount(count +1)}>click {count} times</button>
// </>
//   )
// }
// export default state;



function Statee() {
  const[x,setX]=useState(0)
  const[y,setY]=useState(0)

const logMousePosition =e =>{
  console.log('mouse event')
  setX(e.clientX)
  setY(e.clientY)
}
  useEffect( () => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  },[])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default Statee