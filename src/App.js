import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/signup/sign-up";
import Signin from "./components/signin/Signin";
import Signedin from "./components/signedin/Signedin";
import SponsorshipSpousal from "./components/sponsorship-spousal/sponsorship-spousal";
import Portal1 from "./components/sponsorship-spousal/portal1/portal1";
import SponsorshipParental from "./components/sponsorship-parental/sponsorship-parental";
import Fr from "./containers/fr/Fr";
import SigninFr from "./components/signin-fr/Signin-fr";
import BlogsFr from "./components/signedin-fr/Signedin-fr";
import SponsorshipChild from "./components/sponsorship-child/sponsorship-child";
import WorkPermitInside from "./components/work-permit-inside/work-permit-inside";
import WorkPermitOutside from "./components/work-permit-outside/work-permit-outside";
import StudyPermit from "./components/study-permit/study-permit";
import Review from "./components/review/review";
import Portal2 from "./components/sponsorship-parental/portal2/portal2";
import TryItYourself from "./containers/try-it-yourself/try-it-yourself";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Fr" element={<Fr />}/>
          <Route path="/Fr/s'identifier" element={<SigninFr />}/>
          <Route path="/Fr/s'identifier/connecté" element={<BlogsFr />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signin/TryItYourself" element={<TryItYourself />}/>
          <Route path="/signin/signedin" element={<Signedin />}/>
          <Route path="/signin/signedin/review" element={<Review />}/>
          <Route path="/Signin/signedin/sponsorship-spousal" element={<SponsorshipSpousal />}/>
          <Route path="/Signin/signedin/sponsorship-spousal/portal1" element={<Portal1 />}/>
          <Route path="/Signin/signedin/sponsorship-parental" element={<SponsorshipParental />}/>
          <Route path="/Signin/signedin/sponsorship-parental/portal2" element={<Portal2 />}/>
          <Route path="/Signin/signedin/sponsorship-child" element={<SponsorshipChild />}/>
          <Route path="/Signin/signedin/work-permit-inside" element={<WorkPermitInside />}/>
          <Route path="/Signin/signedin/work-permit-outside" element={<WorkPermitOutside />}/>
          <Route path="/Signin/signedin/study-permit" element={<StudyPermit />}/>

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