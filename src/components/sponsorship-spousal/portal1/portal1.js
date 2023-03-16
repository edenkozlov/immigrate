import React, { useState } from "react";
import './portal1.scss'
import { Link } from "react-router-dom"
import axios from 'axios';




function Test() {
  axios.post('https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/addRequest', {
    documentName: 'SponsorshipSpousal',
    firstName: document.getElementById("input1").value,
    lastName: document.getElementById("input2").value,
    portal: 'true'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  alert("Completed PDFs will be sent to the specified email in about 3 minutes!");
  const answer = prompt("Do you want to automize portal? (y/n)");

  if (answer === "y") {
    // do something if the user answers "yes"
    console.log("User wants to proceed.");
    window.location.href = "/Signin/signedin/sponsorship-spousal/portal1";

  } else if (answer === "n") {
         
    console.log("User does not want to proceed.");
    window.location.href = "/signin/signedin"; 
  } else {
    // handle unexpected user input
    console.log("Please answer with either 'yes' or 'no'.");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function Portal1() {
        return (
            <div class="form">
              
              
              <div class="dropdown">
  <button onClick={Dropdown} class="dropbtn"><i class="fa fa-users" aria-hidden="true"></i> Saved Clients </button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Client 1</a>
    <a href="#">Client 2</a>
    <a href="#">Client 3</a>
    <a href="#">Client 4</a>
    <a href="#">Client 5</a>
    <a href="#">Client 6</a>
    <a href="#">Client 7</a>
    <a href="#">Client 8</a>
    <a href="#">Client 9</a>
    <a href="#">Client 10</a>
    <a href="#">Client 11</a>
    <a href="#">Client 12</a>
    <a href="#">Client 13</a>
    <a href="#">Client 14</a>
    <a href="#">Client 15</a>
  </div>
</div>

<Link to="/Signin/signedin/sponsorship-spousal">
<div class="mydiv"><button onClick="" class="dropbtn"> Go Back To Local <i class="fa fa-arrow-left" aria-hidden="true"></i></button></div>
</Link>
<br></br>
              
                <div class="header">
                    <h1>Sponsorship: Spousal (Portal)</h1>
                </div>
                
<h6>Please type today's date below</h6>
  <input type="date" value="<script>document.write(new Date().toISOString().slice(0, 10))</script>" placeholder="date" id="input 1" onclick="this.value = new Date().toISOString().slice(0,10)" onkeydown="if(event.keyCode === 13) this.blur()"/>
  <input type="password" id="email" placeholder="password"/>

  <input type="text" id="input1" onchange= {Test} placeholder="First Name (Client)"/>
  
  <input type="text" id="input2" onchange= {Test} placeholder="last Name (Client)"/>
  <input type="text" id="input3" onchange= {Test} placeholder="DOB (Client): YYYY-MM-DD"/>
  <input type="text" id="input5" onchange= {Test} placeholder="Input 5"/>
  <input type="text" id="input6" onchange= {Test} placeholder="Input 6"/>
  <input type="text" id="input7" placeholder="Input 7"/>
  <input type="text" id="input8" placeholder="Input 8"/>
  <input type="text" id="input9" placeholder="Input 9"/>
  <input type="text" id="input10" placeholder="Input 10"/>
  <input type="text" id="input11" placeholder="Input 11"/>
  <input type="text" id="input12" placeholder="Input 12"/>
  <input type="text" id="input13" placeholder="Input 13"/>
  <input type="text" id="input14" placeholder="Input 14"/>
  <input type="text" id="input15" placeholder="Input 15"/>
  <input type="text" id="input16" placeholder="Input 16"/>
  <input type="text" id="input17" placeholder="Input 17"/>
  <input type="text" id="input18" placeholder="Input 18"/>
  <input type="text" id="input19" placeholder="Input 19"/>
  <input type="text" id="input20" placeholder="Input 20"/>
  <input type="text" id="input21" placeholder="Input 21"/>
  <input type="text" id="input22" placeholder="Input 22"/>
  <input type="text" id="input23" placeholder="Input 23"/>
  <input type="text" id="input24" placeholder="Input 24"/>
  <input type="text" id="input25" placeholder="Input 25"/>
  <input type="text" id="input26" placeholder="Input 26"/>
  <input type="text" id="input27" placeholder="Input 27"/>
  <input type="text" id="input28" placeholder="Input 28"/>
  <input type="text" id="input29" placeholder="Input 29"/>
  <input type="text" id="input30" placeholder="Input 30"/>
  <h6>Please make sure to double check your work, empty fields will be displayed blank on completed PDFs</h6>


  <button onClick={Test} id="sbmt" class="button">Submit</button><br></br>



</div>
        )
    }

console.log(Test);
    

export default Portal1;