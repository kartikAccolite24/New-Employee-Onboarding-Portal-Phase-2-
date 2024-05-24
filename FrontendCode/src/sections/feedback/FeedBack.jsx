import React, { useState } from "react";
import DashboardLayout from "src/layouts/dashboard";
import "./Feedback.css";
import axios from 'axios';
function Feedback() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const empId = localStorage.getItem('empId');
  const jwtToken = localStorage.getItem('jwtToken');
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080", // Your API base URL
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });
    try{
      const response = await axiosInstance.post('/addFeedback', {
        empId,
        rating,
        comment,
        status:true
      });
      console.log(response);
      // navigate('/education',{state:{empId , jwtToken }});
    }
    catch(error){
      alert(error);
    }
  };
  return (
    <div style={{display:'flex'}}>
    <div style={{width:"25%"}}>
      <DashboardLayout/>
    </div>
    <div className="rating-container">
      <h1>Rate us!</h1>
      <p>
        Your input is super important in helping us understand your needs
        better, so we can customize our services to suit you perfectly.
      </p>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our Onboarding?</h2>
        <div className="rating-options">
        {['😠', '😞', '😐', '🙂', '😁'].map((emoji, index) => (
            <button
              type="button"
              key={index}
              className={`rating-button ${
                rating === index + 1 ? "selected" : ""
              }`}
              onClick={() => handleRatingChange(index + 1)}
            >
              {emoji}
            </button>
          ))}
        </div>
        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button type="submit" className="submit-button">
          Send now
        </button>
      </form>
    </div></div>
  );
}
export default Feedback;