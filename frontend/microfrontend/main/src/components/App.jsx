// External dependencies
import {useState} from "react";
import {Route, Routes} from "react-router-dom";

// Components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import {ProtectedRoute} from "./ProtectedRoute.jsx";

// Remote components
// Auth
import Login from 'auth/Login'
import Register from 'auth/Register'
import InfoTooltip from 'auth/InfoTooltip'
// Profile
import Profile from 'profile/Profile'
import EditProfilePopup from 'profile/EditProfilePopup'
import EditAvatarPopup from 'profile/EditAvatarPopup'
// Content
import Content from 'content/Content'
// Social
import Like from 'like/Like'

const App = () => {
    const [isEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen] = useState(false);
    const [tooltipStatus] = useState('');
    const [, setIsLoggedIn] = useState(false);
    const [email] = useState("");

    function onSignOut() {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        history.push("/signin");
    }

    const handleUpdateUser = () => {
    }
    const handleUpdateAvatar = () => {
    }
    const closeAllPopups = () => {
    }
    const isInfoToolTipOpen = () => {
    }

    return (
        <div className="page__content">
            <Header email={email} onSignOut={onSignOut}/>
            <Routes>
                <Route path="/" element={<ProtectedRoute/>}>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/" element={<Content likeElement={<Like/>}/>}/>
                </Route>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/signin" element={<Login/>}/>
            </Routes>
            <Footer/>
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onUpdateUser={handleUpdateUser}
                onClose={closeAllPopups}
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleUpdateAvatar}
                onClose={closeAllPopups}
            />
            <InfoTooltip
                isOpen={isInfoToolTipOpen}
                onClose={closeAllPopups}
                status={tooltipStatus}
            />
        </div>
    )
}

export default App;
