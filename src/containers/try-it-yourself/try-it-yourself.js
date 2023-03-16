import React, { useState } from "react";
import './try-it-yourself.scss'
import { Link } from "react-router-dom"


function handleClick() {
  alert("Completed PDFs will be sent to the specified email in about 5 minutes!");
  const answer = prompt("Do you want to automize portal? (y/n)");

  if (answer === "y") {
    // do something if the user answers "yes"
    console.log("User wants to proceed.");
    window.location.href = "/Signin/signedin/sponsorship-parental/portal2";

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



function TryItYourself() {
        return (
            <div class="form">
              
              
              <div class="dropdown">
  <button onClick={Dropdown} class="dropbtn"><i class="fas fa-file-excel"></i> Excel Templates </button>
  <div id="myDropdown" class="dropdown-content">
  <a href={require("./excel-test.xlsx")} download>Client Template</a>
<a href={require("./excel-test.xlsx")} download>Rep. Template</a>
<a href={require("./excel-test.xlsx")} download>Full Case Template</a>
  </div>
</div>



<Link to="/Signin/TryItYourself">
<div class="mydiv"><button onClick="" class="dropbtn"> Skip To Portal <i class="fa fa-arrow-right" aria-hidden="true"></i></button></div>
</Link>
<br></br>
              
                <div class="header">
                    <h1>Sponsorship: Parental</h1>
                </div>

                            
<div align="center">

 
<div class="border">
<div class="words">Required Fields</div>
<input type="text" id="email" onchange= "" placeholder="The case will be sent to...(your email)"/>
<input type="text" id="firstName" onchange= "" placeholder="CICC Username"/>
<input type="password" id="lastName" onchange= "" placeholder="CICC Password"/>  
</div>
<div class="border">
<div class="words">Upload Client Template Below</div>
<input type="file" class="file" id="myFile" accept=".xlsx" name="filename"/>
<div class="words">Upload Rep. Template Below</div>
<input type="file" class="file" id="myFile" accept=".xlsx" name="filename"/>
</div>
<div class="word"><u>OR</u></div>
<div class="border">
<div class="words">Upload "Full Case" Form Below</div>
<input type="file" class="file" id="myFile" accept=".xlsx" name="filename"/>
</div>

</div>
<button onClick="" id="sbmt" class="button">Submit</button><br></br>






</div>
        )
    }


export default TryItYourself;