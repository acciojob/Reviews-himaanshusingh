import React, { useState } from "react";
import reviewsArr from "./reviewsArr";

const Reviews = () => {
  let [index, setIndex] = useState(0);
  let activeRev = reviewsArr[index];

  function handlePrev() {
    if (index > 0) setIndex(--index);
  }
  function handleNext() {
    if (index < 3) setIndex(++index);
  }
  function handleRand() {
    setIndex(Math.floor(Math.random() * reviewsArr.length));
  }

  return (
    <>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <div className="author" id={"author-" + activeRev.id}>{activeRev.name}</div>
        <div className="job">{activeRev.job}</div>
        <div className="info">{activeRev.text}</div>
        <img className="person-img" src={activeRev.image}/>
        <button className="prev-btn" onClick={handlePrev}>Previous</button>
        <button className="next-btn" onClick={handleNext}>Next</button>
        <button className="random-btn" onClick={handleRand}>surprise me</button>
      </div>
    </>
  );
};

export default Reviews;
