import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children
    }
  return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;