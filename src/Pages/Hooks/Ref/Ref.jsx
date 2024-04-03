import { useEffect, useRef, useState } from "react";

function Ref() {
  const [click, setClick] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        value={click}
        onChange={(e) => setClick(e.target.value)}
        placeholder="write"
         
      />
      <p>count: {count.current}</p>
    </div>
  );
}

export default Ref;
