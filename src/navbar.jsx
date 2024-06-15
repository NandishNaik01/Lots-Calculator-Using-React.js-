import "./css/navbar.css";
import calco from "./assets/calco.png";
// import react from "./assets/react.svg";
const Nav = () => {
  const PaymentPopup = () => {
    // console.log("Hello World");
    window.open(
      "https://github.com/NandishNaik01/Personal-Portofolio/assets/147323163/fe147e5b-f51b-4a95-be42-ecb22edec4db",
      "_blank",
      "width=500,height=500"
    );
  };
  return (
    <div>
      <div className="NavContainer">
        {/* <img src="./assets/calco.png" /> */}
        {/* <img src={require("./assets/calco.png")} /> */}
        <img src={calco} alt="Logo" />
        {/* <img src={menu} alt="Logo" className="MenuImage" /> */}

        {/* <li>OPTIONS</li>
        <li>INDEX</li>
        <li>CRYPTO</li> */}
      </div>
      <button id="buymecoffee" onClick={PaymentPopup}>
        Buy Me A Coffee
      </button>
    </div>
  );
};
export default Nav;
