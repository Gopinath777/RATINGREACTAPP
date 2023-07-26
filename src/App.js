
import Ratingdiv from './ratingdiv';
import { useState } from 'react';
import Thanksnote from './thanksnote';

function App() {
  const [showThanksNote, setShowThanksNote] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);

  const handleSubmit = (value) => {
    setShowThanksNote(true);
    setRatingValue(value);
  };

  return (
    <div className="App">
      <div className="centerDiv">
        {showThanksNote ? (
          <Thanksnote rating ={ratingValue} />
        ) : (
          <Ratingdiv thanksnotePage={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;