import React from "react";
import { Link } from "react-router-dom"

function Signin() {
    return (
        <div>
            <div>
                <p>
                Sign in below
                </p>
            </div>
            <div>
            <Link to="/Signin/signedin">
                <button>
                    Click Me
                </button>
            </Link>    
            </div>
        </div>
    )
}

export default Signin;