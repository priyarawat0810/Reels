import { Redirect } from "react-router-dom";
import { signInWithGoogle } from "./firebase";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

let Login = () => {
  let value = useContext(AuthContext);

  return (
    <div>
      {value ? <Redirect to="/home" /> : ""}
      <button
        type="submit"
        className="btn btn-primary m-4"
        onClick={signInWithGoogle}
      >
        Login in with Google
      </button>
    </div>
  );
};

export default Login;
