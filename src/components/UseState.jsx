import React from 'react'

function UseState () {
    const[Ruba,setRuba]=React.useState("rubjjja");
    console.log(Ruba);
    function lolo(){
        setRuba("kfjfjfj")
    }
  return (
    <div style={{fontFamily:"fantasy"}} 
    onClick={lolo}>hi {Ruba}</div>
    
  )
}

export default UseState;
