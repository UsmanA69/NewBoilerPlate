import "../Css/login-signup.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  database,
  // ref,
  // onChildAdded,
  // onValue,
} from "../config/Firebase/Firebase";

const NewLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleSubmition = (e) => {
    e.preventDefault();

    let dataObj = {
      email,
      password,
    };

    signInWithEmailAndPassword(auth, dataObj.email, dataObj.password)
      .then((userCredential) => {
        // Signed in
        const userUid = userCredential.user.uid;

        // onValue(ref(database, "users/" + userUid), (snapshot) => {
        //   const data = snapshot.val();
        // });

        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="main-container">
          <div className="form-container">
            <div>
              <h1 style={{ fontWeight: "700" }}>Login</h1>
              <form method="POST" onSubmit={handleSubmition}>
                <div className="form-div">
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Email</p>
                    <div className="inp-div">
                      <PersonOutlineIcon
                        sx={{ color: "gray", opacity: "0.5" }}
                      />
                      <input
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Password</p>
                    <div className="inp-div">
                      <LockIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="forgot-pass-div">
                    <p className="forgot-pass-txt">Forgot password?</p>
                  </div>
                  <div className="login-div">
                    <button className="login-button" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <div className="outside-form-div">
                <div className="other-methods-div">
                  <p>Or Login With</p>
                  <div className="methods-div">
                    <div className="methods">
                      <p>A</p>
                    </div>
                    <div className="methods">
                      <p>B</p>
                    </div>
                    <div className="methods">
                      <p>C</p>
                    </div>
                  </div>
                </div>
                <div className="signup-div">
                  <p>Or Sign Up with</p>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <div className="signup">
                      <p>Sign Up</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewLogin;
