import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Link to="/signup"> 회원가입 </Link>
            <Link to="/login"> 로그인 </Link>
        </div>
    )
}

export default Main;