import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }

    if (counter > 5) {
      setMessage("You passed 5!");
    } else {
      setMessage("");
    }

    console.log("Counter updated:", counter);

  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="not-home-container">
      <h1>Not Home Page</h1>

      <div className="counter-container">
        <div className="counter-value">Counter: {counter}</div>

        {message && <div className="counter-message">{message}</div>}

        <div className="counter-buttons">
          <button onClick={incrementCounter}>Increase</button>
          <button onClick={decrementCounter}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default NotHome;