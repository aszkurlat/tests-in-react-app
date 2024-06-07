import React from "react";
import { useState } from "react";
import Output from "./Output";

function Greetings() {
  const [changedText, setChangedText] = useState(false);

  const changeText = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>How are you</Output>}
      {changedText && <Output>Text changed</Output>}

      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default Greetings;
