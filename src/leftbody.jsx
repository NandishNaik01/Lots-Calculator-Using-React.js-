import { useState } from "react";
import "./css/leftbody.css";

const LeftBody = () => {
  const [activeButton, setActiveButton] = useState(null);
  // const[ctr,setCtr]=useState("")
  const [ctr, setCtr] = useState(0);
  const [Rpd, setRpd] = useState(0);
  const [lots, setLots] = useState(0);
  const [Capital, setCapital] = useState("");
  const [Riskpd, setRiskPerDay] = useState("");
  const [TradesPerDay, setTradesPerDay] = useState("");
  const [OptionPrice, setOptionPrice] = useState("");
  const [IndividualUnits, setIndividualUnits] = useState(0);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  // const [OptionPrice, setOptionPrice] = useState("");
  function setCounterOne() {
    setCtr(1);
    handleClick("Nifty");
  }
  function setCounterTwo() {
    setCtr(2);
    handleClick("BankNifty");
  }
  function getCapital(val) {
    setCapital(parseInt(val.target.value));
  }

  function getRpd(val) {
    setRiskPerDay(parseInt(val.target.value));
  }
  function getTradesPerDay(val) {
    setTradesPerDay(parseInt(val.target.value));
  }
  function getOptionPrice(val) {
    setOptionPrice(parseInt(val.target.value));
    // console.log(OptionPrice);
  }

  function setTexts() {
    let percentage = Riskpd / 100;
    let TotalCapitalRisk = Math.floor(percentage * Capital);
    let RiskPerTrade = Math.floor(TotalCapitalRisk / TradesPerDay);
    let lotstoSet = Math.floor(RiskPerTrade / OptionPrice);
    setRpd(RiskPerTrade);
    // setLots(lotstoSet);
    // setIndividualUnits(lotstoSet);
    if (ctr == 1) {
      let totallots = Math.floor(lotstoSet / 50);
      setLots(totallots);
      setIndividualUnits(totallots * 50);
    } else if (ctr == 2) {
      let totallots = Math.floor(lotstoSet / 15);
      setLots(totallots);
      setIndividualUnits(totallots * 15);
    } else if (ctr == 0) {
      setLots("..");
      setIndividualUnits("..");
    }
  }

  return (
    <div>
      <div className="whole">
        <div id="inpContainer">
          <div className="inputFields">
            <input
              type="number"
              placeholder="Enter Your Capital : (ex 100000)"
              onChange={getCapital}
              required
            />
          </div>

          <div className="inputFields">
            <input
              type="number"
              placeholder="Enter Your Risk Per Day in Percentage : (ex 5) "
              onChange={getRpd}
              required
            />
          </div>
          <div className="inputFields">
            <input
              type="number"
              placeholder="Enter Your Trades Per Day : (ex 2)"
              onChange={getTradesPerDay}
              required
            />
          </div>
          <div className="inputFields">
            <input
              type="number"
              placeholder="Enter Option Price : (ex 100)"
              onChange={getOptionPrice}
              required
            />
          </div>
          <h1 className="tag">Your Risk Per day is : &#x20b9; {Rpd} Rs</h1>
        </div>
        <div className="button-container">
          <h4>Choose Index : </h4>
          <button
            onClick={setCounterOne}
            className={`Indexes ${activeButton === "Nifty" ? "active" : ""}`}>
            Nifty
          </button>
          <br />
          <button
            onClick={setCounterTwo}
            className={`Indexes ${
              activeButton === "BankNifty" ? "active" : ""
            }`}>
            BankNifty
          </button>
        </div>
        <button id="calculatebtn" onClick={setTexts}>
          Calculate
        </button>
        <div id="outputContainer">
          <h1 className="tag">You Can Buy Upto :</h1>
          <div className="output">
            <h1 id="lots">{lots} Lots</h1>
            <h3>Individual Units : {IndividualUnits}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBody;
