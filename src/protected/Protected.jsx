import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Protected = () => {
    const { isLoggedIn, userLogged } = useContext(UserContext);
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;

};

export default Protected; 