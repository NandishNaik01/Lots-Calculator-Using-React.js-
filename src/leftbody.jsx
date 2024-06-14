import { useState } from "react";
import "./css/leftbody.css";

const LeftBody = () => {
  const [Rpd, setRpd] = useState(0);
  const [lots, setLots] = useState(0);
  // const setRpd = () => {};
  return (
    <div>
      <div className="whole">
        <div id="inpContainer">
          <div className="inputFields">
            <input type="number" placeholder="Enter Your Capital :" />
          </div>

          <div className="inputFields">
            <input type="number" placeholder="Enter Your Risk Per Day :" />
          </div>
          <div className="inputFields">
            <input type="number" placeholder="Enter Your Trades Per Day :" />
          </div>
          <div className="inputFields">
            <input type="number" placeholder="Enter Option Price :" />
          </div>
          <h1 className="tag">Your Risk Per day is : {Rpd}</h1>
        </div>
        <button id="calculatebtn" onClick={setRpd}>
          Calculate
        </button>
        <div id="outputContainer">
          <h1 className="tag">You Can Buy Upto :</h1>
          <div className="output">
            <h1 id="lots">{lots} Lots</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBody;
