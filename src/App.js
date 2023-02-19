import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/signup/sign-up";
import Signin from "./components/signin/Signin";
import Signedin from "./components/signedin/Signedin";
import SponsorshipSpousal from "./components/sponsorship-spousal/sponsorship-spousal";
import SponsorshipParental from "./components/sponsorship-parental/sponsorship-parental";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signin/signedin" element={<Signedin />}/>
          <Route path="/Signin/signedin/sponsorship-spousal" element={<SponsorshipSpousal />}/>
          <Route path="/Signin/signedin/sponsorship-parental" element={<SponsorshipParental />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;


/*



class App extends React.Component {
   
    render() {
      return (
          <Routes>
              <Route path="/" element={<Main />} />
          </Routes>
      );
  }
}
export {App};


    

*/