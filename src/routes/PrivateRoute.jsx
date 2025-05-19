import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // ইউজার লগইন না থাকলে login পেজে পাঠানো হবে
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
