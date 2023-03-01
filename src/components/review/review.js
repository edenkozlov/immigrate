import React from "react";
import './review.scss'


function Review() {
    return(
        <div class="myclass">
            <h1>Enter your review below</h1>
  
  

  <div>

    <label for="rating">Rating:</label>
    <div class="rating">
      
      <label for="star5" title="5 stars">5 stars</label>
      <input type="radio" id="star5" name="rating" value="5"/>

      <label for="star4" title="4 stars">4 stars</label>
      <input type="radio" id="star4" name="rating" value="4"/>
      
      <label for="star3" title="3 stars">3 stars</label>
      <input type="radio" id="star3" name="rating" value="3"/>
      
      <label for="star2" title="2 stars">2 stars</label>
      <input type="radio" id="star2" name="rating" value="2"/>

      <label for="star1" title="1 star">1 star</label>
      <input type="radio" id="star1" name="rating" value="1"/>
      
    </div>

    <input class="input" type="text" id="comment" placeholder="Comment"/>
  <h6>Please note that your review may be publicly shared</h6>

    <input type="submit" value="Submit"/>
  </div>



        </div>



    )
}

export default Review;

