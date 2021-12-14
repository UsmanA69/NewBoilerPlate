import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "../../Screens/Cart";
import Home from "../../Screens/home";
import Login from "../../Screens/login";
import NewLogin from "../../Screens/NewLogin";
import NewSignUp from "../../Screens/NewSignUp";
import SignUp from "../../Screens/signUp";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NewLogin />} />
        <Route path="/signup" element={<NewSignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
