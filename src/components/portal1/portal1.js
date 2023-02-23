import React from "react";
import './portal1.scss'




function Portal1() {

    function handleClick() {
        const answer = alert("Case completed! Check out your pr rep portal.");
      }


    
        return (
            <div class="form">
                <div class="header">
                    <h1>Sponsorship: Spousal (CICC)</h1>
                </div>
                <div class="small-margin">
                <button class="mybtn">Saved Clients</button>
                
                </div>
  <input type="text" id="email" placeholder="Enter CICC Usernme"/>
  <input type="text" id="input1" placeholder="Enter CICC Password"/>
  <input type="text" id="input2" placeholder="input"/>
  <input type="text" id="input3" placeholder="input"/>
  <input type="text" id="input5" placeholder="Input 5"/>
  <input type="text" id="input6" placeholder="Input 6"/>
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


  <button onClick={handleClick} class="mybtn">Submit</button><br></br>
</div>
        )
    }


export default Portal1;

