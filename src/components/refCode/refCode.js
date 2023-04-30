import React from "react";
import { Link } from "react-router-dom"
import "./refCode.scss"

function RefCode() {
    return (
        <div class="container">
            <h1 > Enter Referral Code</h1>
            <div>
                <h5 >Don't have a referral code? Contact your representative.</h5>
            </div>
            <div >
                <input type="text" id="RefCode" placeholder="Referral Code" maxlength="6" style={{ textTransform: 'uppercase' }}/>
            </div>
            <div >
            <Link to="/Signin/RefCode/Client">
              <button class="main-button1">Submit</button>
            </Link>
            </div>
        </div>
    )
}

export default RefCode;