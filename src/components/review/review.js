import React, { useState } from 'react';
import './review.scss';

function LeaveReview() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit review to server
    setName('');
    setEmail('');
    setRating('');
    setReview('');
    setSubmitted(true);
  }

  const handleReturn = () => {
    // TODO: Navigate to previous page
  }

  return (
    <div>
      <header class="cen">
        <h1>Leave a Review</h1>
        <p>Share your experience with us!</p>
      </header>
      <main>
        {submitted ? (
          <div className="message">
            Thank you for leaving a review!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select id="rating" name="rating" value={rating} onChange={(event) => setRating(event.target.value)} required>
                <option value="">Select a rating</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="review">Review:</label>
              <textarea id="review" name="review" rows="5" value={review} onChange={(event) => setReview(event.target.value)} required></textarea>
            </div>
            <div className="button-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

export default LeaveReview;
