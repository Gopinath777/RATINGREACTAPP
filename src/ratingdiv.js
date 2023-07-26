import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

const Ratingdiv = ({ thanksnotePage }) => {
  const [selectedValue, setSelectedValue] = useState(0); // Add the state hooks

  const handleRatingValue = (value) => {
    setSelectedValue(value); // Set the selected value in the state
  };

  const handleSubmit = () => {
    thanksnotePage(selectedValue); // Pass the selected value to the App component
  };

  return (
    <div className="rating-div">
      <div className="ratingDivContents">
      <AiFillStar className='star-logo'/>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className="btn-container">
          <button className="btns" value="1" onClick={() => handleRatingValue(1)}> 1 </button>
          <button className="btns" value="2" onClick={() => handleRatingValue(2)}> 2 </button>
          <button className="btns" value="3" onClick={() => handleRatingValue(3)}> 3 </button>
          <button className="btns" value="4" onClick={() => handleRatingValue(4)}> 4 </button>
          <button className="btns" value="5" onClick={() => handleRatingValue(5)}> 5 </button>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Ratingdiv;
