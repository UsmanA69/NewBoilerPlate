import "../Css/home.css";
import ItemCard from "../Components/itemCard";
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../config/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
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
        <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:"center"}}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <br />
          <ItemCard />
        </>
      )}
    </>
  );
};

export default Home;
