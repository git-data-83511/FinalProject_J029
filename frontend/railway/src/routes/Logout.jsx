import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Logged Out Successfully.");

    if (sessionStorage.getItem("role") === "CUSTOMER")
      dispatch({ type: "CUSTOMER", payload: false });
    else if (sessionStorage.getItem("role") === "ADMIN")
      dispatch({ type: "ADMIN", payload: false });
    sessionStorage.clear();
    navigate("/home");
  }, []);

  return (
    <div className="middleElement">
      <h1>You have succesfully logged out.</h1>
    </div>
  );
}

export default Logout;
