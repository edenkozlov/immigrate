import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/signup/sign-up";
import Signin from "./website-sections-En/signin-En/Signin-En";
import Signedin from "./website-sections-En/rep-signedin-En/rep-Signedin-En";
import Fr from "./containers/fr/Fr";
import SigninFr from "./components/signin-fr/Signin-fr";
import BlogsFr from "./components/signedin-fr/Signedin-fr";
import Review from "./components/review/review";
import TryItYourself from "./containers/try-it-yourself/try-it-yourself";
import MyClients from "./website-sections-En/rep-myClients-En/rep-myClients-En";
import RefCode from "./components/refCode/refCode";
import Client from "./components/client/client";
import WorkAlone from "./components/workAlone/workAlone";
import RepSignIn from "./website-sections-En/repSignIn-En/repSignIn-En";
import NewPage from "./website-sections-En/Cases-En/Cases-En";
import SponsorshipSpousal from "./website-sections-En/sponsorship-spousal-En/sponsorship-spousal-En";
import SponsorshipParental from "./website-sections-En/sponsorship-parental-En/sponsorship-parental-En";
import SponsorshipChild from "./components/sponsorship-child/sponsorship-child";

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
          <Route path="/signin/signedIn" element={<Signedin />}/>
          <Route path="/signin/signedIn/sponsorshipSpousal" element={<SponsorshipSpousal/>}/>
          <Route path="/signin/signedIn/sponsorshipParental" element={<SponsorshipParental/>}/>
          <Route path="/signin/signedIn/sponsorshipChild" element={<SponsorshipChild/>}/>
          <Route path="/Signin/RefCode" element={<RefCode />}/>
          <Route path="/Signin/workAlone" element={<WorkAlone />}/>
          <Route path="/Signin/RefCode/Client" element={<Client />}/>
          <Route path="/signin/TryItYourself" element={<TryItYourself />}/>
          <Route path="/signin/repSignIn" element={<RepSignIn />}/>
          <Route path="/signin/signedin/myClients" element={<MyClients />}/>
          <Route path="/signin/signedin/review" element={<Review />}/>
          <Route path="/Signin/RefCode/new-page/:referralCode" element={<NewPage />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;





    