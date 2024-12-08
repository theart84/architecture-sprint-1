// Core
import {Navigate, Outlet} from 'react-router-dom';
import {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";


// компонент для защищенных маршрутов
export const ProtectedRoute = () => {
    const currentUser = useContext(CurrentUserContext);
    return currentUser?.name ? <Outlet/> : <Navigate to="/signin" replace/>;
};
