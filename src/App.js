import React, { useState } from 'react';
import './App.css';

function App() {

  const [ colorRed, setColorRed ] = useState("");
  const [ colorYellow, setColorYellow ] = useState("");
  const [ colorGreen, setColorGreen ] = useState("");
  
  return (
    <div className="trafficLight">
      <div className="post"></div>
      <div className="body">
        <div className={"red" + colorRed } onClick={() => (
          setColorRed(" selected"),
          setColorYellow(""),
          setColorGreen("")
          )}
        ></div>
        <div className={"yellow" + colorYellow} onClick={() => (
          setColorRed(""),
          setColorYellow(" selected"),
          setColorGreen("")
          )}
        ></div>
        <div className={"green"+ colorGreen} onClick={() => (
          setColorRed(""),
          setColorYellow(""),
          setColorGreen(" selected")
          )}
        ></div>
      </div>
    </div>
  );
}

export default App;
