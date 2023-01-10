import React, { useState, useEffect, useContext } from "react";
// import React from "react";
import { Context } from "../../UI/Context/context";
import Profile from "../../assets/images/profile.jpg";
import "./style.scss";
function Follower() {
  const { apiValue } = useContext(Context);
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await fetch(
      `https://api.github.com/users/${apiValue}/followers`
    );
    const result = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <ul className="cards">
        {data.length > 0 ? (
          data.map((el, id) => (
            <li key={id} className="cards_card border-bottom position-relative"  >
              <div className="">
                <div className="card_profile_img_p">
                  <img className="cards_card_img" src={el.avatar_url} alt="" />
                  <div className="cards_card_info">
                    <span className="cards_card_info_one">
                      <a href={el.html_url} target="_blank" className="cards_card_info_one_p">{el.login}</a>
                      {/* <p className="cards_card_info_one_p2">{el.login}</p> */}
                    </span>
                  </div>
                  </div>
                  {/* <p className="cards_card_info_p">I'm Beginner</p> */}
                  <div className="cards_card_local_span">
                    <i
                      className="cards_card_local_span_i"
                      class="bi bi-geo-alt"
                    ></i>
                    <p className="cards_card_local_span_p">Uzbekistan</p>
                  </div>
                
              </div>
              <button className="cards_card_button">Unfollow</button>
            </li>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </ul>
      {/* <li className="cards_card border-bottom position-relative">
          <div className="">
            <img className="cards_card_img" src={Profile} alt="" />
            <div className="cards_card_info">
              <span className="cards_card_info_one">
                <p className="cards_card_info_one_p">Noraliyev Asliddin</p>
                <p className="cards_card_info_one_p2">noraliyev17</p>
              </span>

              <p className="cards_card_info_p">I'm Beginner</p>
              <div className="cards_card_local_span">
                <i
                  className="cards_card_local_span_i"
                  class="bi bi-geo-alt"
                ></i>
                <p className="cards_card_local_span_p">Uzbekistan</p>
              </div>
            </div>
          </div>
          <button className="cards_card_button">Unfollow</button>
        </li> */}
    </>
  );
}

export default Follower;
