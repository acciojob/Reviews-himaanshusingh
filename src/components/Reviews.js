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
    setIndex(parseInt(Math.random() * 4));
  }

  return (
    <>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <img className="person-img" src={activeRev.image}/>
        <div className="author" id={`author-${activeRev.id}`}>{activeRev.name}</div>
        <div className="job">{activeRev.job}</div>
        <div className="info">{activeRev.text}</div>
        <button className="prev-btn" onClick={handlePrev}>Previous</button>
        <button className="next-btn" onClick={handleNext}>Next</button>
        <button className="random-btn" onClick={handleRand}>surprise me</button>
      </div>

    </>
  ); // prettier-ignore
};

export default Reviews;
