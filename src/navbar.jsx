import "./css/navbar.css";
import calco from "./assets/calco.png";
// import menu from "./assets/menu.svg";
const Nav = () => {
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
      <button id="buymecoffee">Buy Me A Coffee</button>
    </div>
  );
};
export default Nav;
