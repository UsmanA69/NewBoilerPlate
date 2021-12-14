import "../Css/login-signup.css";
import CircularProgress from "@mui/material/CircularProgress";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BadgeIcon from "@mui/icons-material/Badge";
import FlagIcon from "@mui/icons-material/Flag";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  database,
  ref,
  set,
} from "../config/Firebase/Firebase";

const NewSignUp = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [cnic, setCnic] = useState();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleSubmition = (e) => {
    e.preventDefault();

    let dataObj = {
      userName,
      phoneNumber,
      cnic,
      country,
      email,
      password,
    };

    createUserWithEmailAndPassword(auth, dataObj.email, dataObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userUid = userCredential.user.uid;

        set(ref(database, "users/" + userUid), dataObj);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        // ..
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setLoading(false);
        // User is signed out
        // ...
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
              <h1 style={{ fontWeight: "700", paddingTop: "50px" }}>Sign up</h1>
              <form
                autoComplete="off"
                method="POST"
                onSubmit={(e) => handleSubmition(e)}
              >
                <div className="form-div">
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Username</p>
                    <div className="inp-div">
                      <AccountBoxIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        autoComplete="false"
                        onChange={(e) => setUserName(e.target.value)}
                        type="name"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Email</p>
                    <div className="inp-div">
                      <PersonOutlineIcon
                        sx={{ color: "gray", opacity: "0.5" }}
                      />
                      <input
                        required
                        autoComplete="false"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Phone Number</p>
                    <div className="inp-div">
                      <LocalPhoneIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        autoComplete="false"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="numer"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">CNIC</p>
                    <div className="inp-div">
                      <BadgeIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        autoComplete="false"
                        onChange={(e) => setCnic(e.target.value)}
                        type="numer"
                        placeholder="CNIC"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Country</p>
                    <div className="inp-div">
                      <FlagIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        autoComplete="false"
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div className="main-inp-div">
                    <p className="inp-label-txt">Password</p>
                    <div className="inp-div">
                      <LockIcon sx={{ color: "gray", opacity: "0.5" }} />
                      <input
                        required
                        autoComplete="false"
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
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <br />
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewSignUp;
