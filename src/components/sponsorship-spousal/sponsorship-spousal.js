import React from "react";
import './sponsorship-spousal.scss';
import { Link } from "react-router-dom";
import axios from 'axios';
import fillifybg from '../../assets/images/fillify-bg.png';
import Loading from "../../containers/loading/Loading";

//Axios link

function Sumbit() {
  axios.post('https://us-central1-immigrationpro-6b3b5.cloudfunctions.net/app/addRequest', {
    caseName: 'SponsorshipSpousal',
    date: document.getElementById("date").value,
    email: document.getElementById("email").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    DOB1: document.getElementById("DOB1").value,
    RFN: document.getElementById("RFN").value,
    RN: document.getElementById("RN").value,
    firmName: document.getElementById("firmName").value,
    portal: 'true'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  alert("Completed PDFs will be sent to the specified email in about 5 minutes!");
  prompt("do you wish to save clients info? (y/n)") 
  
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

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

const todayDate = getTodayDate();


function createFields() {
  // check if input fields already exist
  var container = document.getElementById("input-container");
			
			// check if input fields already exist
			if(container.children.length === 0) {
				// create input fields
				var input1 = document.createElement("input");
				input1.setAttribute("type", "text");
				input1.setAttribute("name", "field1");
        input1.setAttribute("placeholder", "Enter name of office");
        input1.setAttribute("onchange", {Sumbit});
				var input2 = document.createElement("input");
				input2.setAttribute("type", "text");
				input2.setAttribute("name", "field2");
        input2.setAttribute("placeholder", "Enter type of application");
        input2.setAttribute("onchange", {Sumbit});
				var input3 = document.createElement("input");
				input3.setAttribute("type", "text");
				input3.setAttribute("name", "field3");
        input3.setAttribute("placeholder", "Enter location of office");
        input3.setAttribute("onchange", {Sumbit});
				
				// append input fields to container
				container.appendChild(input1);
				container.appendChild(input2);
				container.appendChild(input3);
			} else {
				// remove input fields
				container.innerHTML = "";
      }
}

function createFields2() {
  // check if input fields already exist
  var container = document.getElementById("input-container2");
			
			// check if input fields already exist
			if(container.children.length === 0) {
				// create input fields
				var input1 = document.createElement("input");
				input1.setAttribute("type", "text");
				input1.setAttribute("name", "field1");
        input1.setAttribute("placeholder", "Enter street no (Client)");
        input1.setAttribute("onchange", "Submit()");
				var input2 = document.createElement("input");
				input2.setAttribute("type", "text");
				input2.setAttribute("name", "field2");
        input2.setAttribute("placeholder", "Enter street name (client)");
        input2.setAttribute("onchange", "Submit()");
				var input3 = document.createElement("input");
				input3.setAttribute("type", "text");
				input3.setAttribute("name", "field3");
        input3.setAttribute("placeholder", "Enter Apt number (blank for N/A)");
        input3.setAttribute("onchange", "Submit()");
        var input4 = document.createElement("input");
				input4.setAttribute("type", "text");
				input4.setAttribute("name", "field4");
        input4.setAttribute("placeholder", "Enter city (Client)");
        input4.setAttribute("onchange", "Submit()");
				var input5 = document.createElement("input");
				input5.setAttribute("type", "text");
				input5.setAttribute("name", "field5");
        input5.setAttribute("placeholder", "Enter province (Client)");
        input5.setAttribute("onchange", "Submit()");
				var input6 = document.createElement("input");
				input6.setAttribute("type", "text");
				input6.setAttribute("name", "field6");
        input6.setAttribute("placeholder", "Enter country (Client)");
        input6.setAttribute("onchange", "Submit()");
        var input7 = document.createElement("input");
				input7.setAttribute("type", "text");
				input7.setAttribute("name", "field7");
        input7.setAttribute("placeholder", "Enter Postal/Zip (Client)");
        input7.setAttribute("onchange", "Submit()");
				var input8 = document.createElement("input");
				input8.setAttribute("type", "text");
				input8.setAttribute("name", "field8");
        input8.setAttribute("placeholder", "Enter telephone number (Client)");
        input8.setAttribute("onchange", "Submit()");
				var input9 = document.createElement("input");
				input9.setAttribute("type", "text");
				input9.setAttribute("name", "field9");
        input9.setAttribute("placeholder", "second phone number (blank for N/A)");
        input9.setAttribute("onchange", "Submit()");
        var input10 = document.createElement("input");
				input10.setAttribute("type", "text");
				input10.setAttribute("name", "field10");
        input10.setAttribute("placeholder", "Enter Fax number (Client)");
        input10.setAttribute("onchange", "Submit()");
        var input11 = document.createElement("input");
				input11.setAttribute("type", "text");
				input11.setAttribute("name", "field11");
        input11.setAttribute("placeholder", "email address (blank for N/A)");
        input11.setAttribute("onchange", "Submit()");
				
				// append input fields to container
				container.appendChild(input1);
				container.appendChild(input2);
				container.appendChild(input3);
        container.appendChild(input4);
				container.appendChild(input5);
				container.appendChild(input6);
        container.appendChild(input7);
				container.appendChild(input8);
				container.appendChild(input9);
        container.appendChild(input10);
				container.appendChild(input11);
			} else {
				// remove input fields
				container.innerHTML = "";
      }
}



function SponsorshipSpousal() {


  //function for BG image
  const backgroundStyle = {
    backgroundImage: `url(${fillifybg})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
  

        return (
          
            <div class="form">
              <div class="dropdown">
  <button onClick={() => {
  Dropdown();
  //add SUbmit function here if needed during the same client stage
}} class="dropbtn"><i class="fa fa-users" aria-hidden="true"></i> Saved Clients </button>
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



<Link to="/Signin/signedin/sponsorship-spousal/portal1">
<div class="mydiv"><button onClick="" class="dropbtn"> Skip To Portal <i class="fa fa-arrow-right" aria-hidden="true"></i></button></div>
</Link>
<br></br>
              
                <div class="header">
                    <h1>Sponsorship: Spousal</h1>
                </div>
                
<h6>Please type today's date below</h6>
  <input type="text" onchange= {Sumbit} placeholder={"Date: " + todayDate} id="date"/>
  <input type="text" id="email" onchange= {Sumbit} placeholder="The case will be sent to...(your email)"/>
  <input type="text" id="firstName" onchange= {Sumbit} placeholder="First Name (Sponsor)"/>
  <input type="text" id="lastName" onchange= {Sumbit} placeholder="last Name (Sponsor)"/>
  <input type="text" id="DOB1" onchange= {Sumbit} placeholder="DOB (Sponsor): YYYY-MM-DD"/>
  <input type="text" id="RFN" onchange= {Sumbit} placeholder="Rep Family Name"/>
  <input type="text" id="RN" onchange= {Sumbit} placeholder="Rep Given Name"/>
  <input type="text" id="firmName" onchange= {Sumbit} placeholder="Your Firm Name (leave blank if N/A)"/>
  <div class="paddiv">
  <button class="mybtn2" onClick={createFields}>Already Submitted Your Application?</button>
  <div id="input-container"></div>
  </div>
  <input type="text" id="UCI" onchange= {Sumbit} placeholder="UCI Number"/>
  <div class="paddiv">
  <button class="mybtn2" onClick={createFields2}>Appointing a Rep?</button>
  <div id="input-container2"></div>
  </div>
  <input type="text" id="input9" onchange= {Sumbit} placeholder="Input 9"/>
  <input type="text" id="input10" onchange= {Sumbit} placeholder="Input 10"/>
  <input type="text" id="input11" onchange= {Sumbit} placeholder="Input 11"/>
  <input type="text" id="input12" onchange= {Sumbit} placeholder="Input 12"/>
  <input type="text" id="input13" onchange= {Sumbit} placeholder="Input 13"/>
  <input type="text" id="input14" onchange= {Sumbit} placeholder="Input 14"/>
  <input type="text" id="input15" onchange= {Sumbit} placeholder="Input 15"/>
  <input type="text" id="input16" onchange= {Sumbit} placeholder="Input 16"/>
  <input type="text" id="input17" onchange= {Sumbit} placeholder="Input 17"/>
  <input type="text" id="input18" onchange= {Sumbit} placeholder="Input 18"/>
  <input type="text" id="input19" onchange= {Sumbit} placeholder="Input 19"/>
  <input type="text" id="input20" onchange= {Sumbit} placeholder="Input 20"/>
  <input type="text" id="input21" onchange= {Sumbit} placeholder="Input 21"/>
  <input type="text" id="input22" onchange= {Sumbit} placeholder="Input 22"/>
  <input type="text" id="input23" onchange= {Sumbit} placeholder="Input 23"/>
  <input type="text" id="input24" onchange= {Sumbit} placeholder="Input 24"/>
  <input type="text" id="input25" onchange= {Sumbit} placeholder="Input 25"/>
  <input type="text" id="input26" onchange= {Sumbit} placeholder="Input 26"/>
  <input type="text" id="input27" onchange= {Sumbit} placeholder="Input 27"/>
  <input type="text" id="input28" onchange= {Sumbit} placeholder="Input 28"/>
  <input type="text" id="input29" onchange= {Sumbit} placeholder="Input 29"/>
  <input type="text" id="input30" onchange= {Sumbit} placeholder="Input 30"/>
  <h6>Please make sure to double check your work, empty fields will be displayed blank on completed PDFs</h6>


<button onClick={Sumbit} id="sbmt" class="button">Submit</button><br></br>
</div>

        )
    }
export default SponsorshipSpousal;