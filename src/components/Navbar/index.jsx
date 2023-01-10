import {useState,useContext} from "react";
import "./style.scss";
import { Context } from "../../UI/Context/context";
import Profile from "../../assets/images/profile.jpg";
function Navbar() {
  const [value,setValue] = useState(localStorage.getItem("key") || "kamolxon-web-dev");
  const {setApiValue,falsy,setFalsy} = useContext(Context);
  const objectValues = {
    value: value.trim().length === 0
  }
  const Clicked = (e) => {
    e.preventDefault();
    if(!objectValues.value) return setApiValue(value);
  }

  const Clickeds = () => {
    setFalsy(falsy => !falsy);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header_nav">
            <div className="header_nav_hamburger">
            <i className="header_nav_hamburger_i fa-sharp fa-solid fa-bars" onClick={()=> Clickeds()}></i>
            </div>
            <ul className="header_nav_ul">
              <li className="header_nav_ul_li">
                <i className="header_nav_ul_li_fa-github fa-brands fa-github"></i>
              </li>
              <li className=" header_nav_ul_li hide">
                
              <form action="#" onSubmit={(e)=> Clicked(e)}>
              <input
                  className="header_nav_ul_li_input "
                  type="text"
                  value={value}
                  onChange={(e)=> {
                    setValue(e.target.value);
                    localStorage.setItem("key",e.target.value);
                  }}
                  placeholder="Search or jump to..."
                />
                <button className="header_nav_button_hide" type="submit">/</button>
              </form>
                
              </li>
              <li className="header_nav_ul_li hide">
                <a className="header_nav_ul_li_link" href="#">
                  Pulls
                </a>
              </li>
              <li className="header_nav_ul_li hide">
                <a className="header_nav_ul_li_link" href="#">
                  Issues
                </a>
              </li>
              <li className="header_nav_ul_li hide">
                <a className="header_nav_ul_li_link" href="#">
                  Codespaces
                </a>
              </li>
              <li className="header_nav_ul_li hide">
                <a className="header_nav_ul_li_link" href="#">
                  Marketplace
                </a>
              </li>
              <li className="header_nav_ul_li hide">
                <a className="header_nav_ul_li_link" href="#">
                  Explore
                </a>
              </li>
            </ul>
            <ul className="header_nav_ul_right">
              <li className="header_nav_ul_right_li">
                <i className="fa-regular fa-bell"></i>
              </li>
              <div className="salom hide">
              <li className="header_nav_ul_right_li ">
                <p className="header_nav_ul_right_li_p">+</p>
                <i className="header_nav_ul_right_li_i fa-solid fa-caret-down"></i>
              </li>
              </div>
              <li className="header_nav_ul_right_li hide">
                <img
                  className="header_nav_ul_right_li_img"
                  src={Profile}
                  alt=""
                />
                <i className=" header_nav_ul_right_li_i fa-solid  fa-caret-down"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
