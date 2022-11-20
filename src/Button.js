import React, { useState } from "react";

export default function Button() {
  function toggleScores() {
    // const [order, setOrder] = useState([]);
    return (
      <div>
        <button onClick={toggleScores}>Click Me</button>
      </div>
    );
  }
  
}
