import React from "react";
import { getUser, removeUserSession } from "./Utility/Common";

const HomePage = (props) => {

    const user = getUser();

    const handleLogout = () =>{
        removeUserSession();
        props.history.push('/login');


    }
    return(
        <div>
            <p>Welcome {user}</p><br />
            <input type="button" value="Logout"
            onClick={handleLogout} />
        </div>
    )
}

export default HomePage;