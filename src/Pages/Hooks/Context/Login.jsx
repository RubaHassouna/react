import { useContext } from "react";
import { AppContext } from "./Context";
function login() {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
}

export default login;
