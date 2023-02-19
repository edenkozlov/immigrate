import React from "react";
import { Link } from "react-router-dom"

function SigninFr() {
    return (
        <div>
            <div>
                <p>
                
                Connectez-vous ci-dessous
                </p>
            </div>
            <div>
            <Link to="/Fr/s'identifier/connecté">
                <button>
                    
                    Clique Moi
                </button>
            </Link>    
            </div>
        </div>
    )
}

export default SigninFr;