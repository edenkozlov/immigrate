import React from "react";
import { Link } from "react-router-dom"
import "./Signin.scss"

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
            <div class="cen">
            
              <button class="main-button">I am a client</button>
            
            <Link to="/Signin/signedin">
              <button class="main-button">I am a representative</button>
            </Link>
              </div>
        </div>
    )
}

export default Signin;