import React, { useEffect, useState ,useContext } from "react";
import { Context } from "../../UI/Context/context";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Profile from "../../assets/images/profile.jpg";
function Intro() {
  const { apiValue } = useContext(Context);
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await fetch(
      `https://api.github.com/users/${apiValue}`
    );
    const result = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <section className="intro  intro_container">
        <ul className="intro_profile_ul">
          <li
            className={
              !(scrollY > 100)
                ? "intro_profile_ul_li z-index"
                : "intro_profile_ul_li see_block "
            }
          >
            <img className="intro_profile_ul_li_img" src={Profile} alt="" />
            <p className="intro_profile_ul_li_p"> kamolxon-web-dev </p>
          </li>
        </ul>
        <ul className="intro_ul">
          <li className="intro_ul_li">
            <i className=" intro_ul_li_i fa-solid fa-book-open"></i>
            <NavLink to="/" className={({isActive})=> isActive ? "intro_ul_li_p actives" : "intro_ul_li_p"}>
              Overview
            </NavLink>
          </li>
          <li className="intro_ul_li">
            <i className=" intro_ul_li_i fa-solid fa-book-bookmark"></i>
            <NavLink to="/repositories" className={({isActive})=> isActive ? "intro_ul_li_p actives " : "intro_ul_li_p"}>
              Repositories
            </NavLink>
            <p className="intro_ul_li_number">{data.public_repos}</p>
          </li>
          <li className="intro_ul_li">
            <i className=" intro_ul_li_i fa-regular fa-folder-open"></i>
            <a href="#" className="intro_ul_li_p">
              
              Projects
            </a>
          </li>
          <li className="intro_ul_li packege_hide">
            <i className=" intro_ul_li_i bi bi-box"></i>
            <a href="#" className="intro_ul_li_p">
             
              Packeges
            </a>
          </li>
          <li className="intro_ul_li hidden">
            <i className=" intro_ul_li_i bi bi-stars"></i>
            <a href="#" className="intro_ul_li_p">
              Stars
            </a>
          </li>
          <li className="add">
            <i className="add_icon yashir">...</i>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Intro;
