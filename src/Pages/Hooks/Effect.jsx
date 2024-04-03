import { useEffect,useState } from "react";
import axios from "axios";
// function Timer() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     });
  
//     return (
//         <>
//     <h1> i have rendered {count} times!</h1>
//     </>
//     )
//   }



// function Timer() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     }, []); // <- add empty brackets here
  
//     return <h1>ive rendered {count} times!</h1>;
//   }
  
//   export default Timer;



// function Effect() {
//   const[posts,setPosts]=useState([])
//   useEffect(()=>{
//     axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//       console.log(res)
//       setPosts(res.data)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   },[])
//   return (
//     <div>
// <ul>
//   {
//     posts.map(post => <li key={post.id}>{post.title}</li>)
//   }
// </ul>
//     </div>
//   )
// }

// export default Effect


// function Effect() {
//   const[posts,setPosts]=useState({})
//   const [id,setId]=useState(1)
//   useEffect(()=>{
//     axios
//     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res => {
//       console.log(res)
//       setPosts(res.data)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   },[id])
//   return (
//     <div>
//       <input type="text" value={id} onChange={
//         e => setId(e.target.value)
//       }/>
// {/* <ul>
//   {
//     posts.map(post => <li key={post.id}>{post.title}</li>)
//   }
// </ul> */}
//     </div>
//   )
// }

// export default Effect

function Effect() {
  const[posts,setPosts]=useState({})
  const [id,setId]=useState(1)
  const [idFormButtonClick,setIdFormButtonClick]=useState(1)
  const handleClick=()=>{
    setIdFormButtonClick(id)
  }
  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`)
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[idFormButtonClick])
  return (
    <div>
      <input type="text" value={id} onChange={
        e => setId(e.target.value)
      }/>
      <button type="text" onClick={handleClick}>Fetch Post</button>
{/* <ul>
  {
    posts.map(post => <li key={post.id}>{post.title}</li>)
  }
</ul> */}
    </div>
  )
}

export default Effect