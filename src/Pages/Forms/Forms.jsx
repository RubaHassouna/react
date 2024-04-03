import { useState } from "react";
function form() {
  const [firstName, setirstName] = useState();
  const [lastName, setlastName] = useState();
  const [Email, setEmail] = useState();
  console.log(firstName);
  console.log(lastName);
  console.log(Email);
  return (
    <div>
      <form action="">
        <label htmlFor="1">First Name</label>
        <input
          type="text"
          id="1"
          placeholder="first name"
          required
          value={firstName}
          onChange={(e)=> setirstName(e.target.value)}
        />
        <label htmlFor="2">Last Name</label>
        <input
          type={"text"}
          id="2"
          placeholder="Last name"
          required
          value={lastName}
          onChange={(e)=>setlastName(e.target.value)}
        />
        <label htmlFor="3">Email</label>
        <input
          type="email"
          id="3"
          placeholder="emaile"
          required
          value={Email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default form;


// function Forms() {
//   return (
//     <div>Forms</div>
//   )
// }

// export default Forms