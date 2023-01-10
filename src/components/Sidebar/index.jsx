import React,{useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../UI/Context/context";
import "./style.scss";
function Sidebar() {
  const {apiValue} = useContext(Context);
  console.log(apiValue)
  const [data,setArray] = useState([]);
  const api = async () => {
    const request = await fetch(`https://api.github.com/users/${apiValue}`);
    const result = await request.json();
    console.log(result);
    setArray(result);
  }

  useEffect(()=> {
    api()
  },[apiValue])

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_block">
        <img className="sidebar_profile" src={data.avatar_url} alt="" />
        <div>
          
        </div>
        <h3 className=" sidebar_profile_h3">{data.login}</h3>
        </div>
        <button className="sidebar_button_none">
        <i class="bi bi-emoji-smile"></i>
        <p>Set Status</p>
        </button>
        <button className="sidebar_button">Edit Profile</button>
       <div className="sidebar_column">
       <span className="sidebar_joined sidebar_none">
          <i className="sidebar_joined_i bi bi-rocket-takeoff-fill"></i>
          <p className="sidebar_joined_p">Joined 2 weeks ago</p>
        </span>
       <div className="sidebar_follow">
          <span className="sidebar_follow_follower">
            <i  className="sidebar_follow_follower_i bi bi-people"></i>
            <b className="sidebar_follow_follower_b">{data.followers}</b>
            <NavLink to="/follower" className="sidebar_follow_follower_p">followers</NavLink>
          </span>
          <span className="sidebar_follow_following">
            <b className="sidebar_follow_following_b">{data.following}</b>
            <NavLink to="/following" className="sidebar_follow_following_p">following</NavLink>
          </span>
        </div>

        <span className="sidebar_joined">
          <i className="sidebar_joined_i bi bi-rocket-takeoff-fill"></i>
          <p className="sidebar_joined_p">Joined 2 weeks ago</p>
        </span>
       </div>
       <ul className="intro_ul intro_sidebar">
          <li className="intro_ul_li">
            <i className=" intro_ul_li_i fa-solid fa-book-open"></i>
            <NavLink to="/" className="intro_ul_li_p">
              Overview
            </NavLink>
          </li>
          <li className="intro_ul_li">
            <i className=" intro_ul_li_i fa-solid fa-book-bookmark"></i>
            <NavLink to="/repositories" className="intro_ul_li_p">
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
          <li className="add like">
            <i className="add_icon yashir">...</i>
          </li>
        </ul>
      </div>
      
    </>
  );
}

export default Sidebar;
