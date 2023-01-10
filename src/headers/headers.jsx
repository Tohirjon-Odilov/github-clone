import { useContext, useState, useEffect } from "react";
import "./headers.scss";
import { Context } from "../UI/Context/context";

const index = () => {
    const {falsy} = useContext(Context);
    document.body.style.overflow = !falsy ? "visible" : "hidden" 
  return (
    <>
      <div className={!falsy ? "navbar" : "navbar hide"}>
        <div className="container-header">
          <form
            className="navbar-form"
            action="#"
          >
            <input
              type="text"
              className="navbar-form__input"
              placeholder="Search or jump to..."
            />
            <button type="submit" className="navbar-form-span">
              /
            </button>
          </form>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Dashboard
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Pull requests
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Issues
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Codespaces
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Marketplace
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Explore
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Sponsors
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item__link navbar-list-item__link--before"
              >
                Settings
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item-link navbar-list-item-link--flex"
              >
                <img
                  className="navbar-list-item-link__img"
                  // src={object.avatar_url}
                  // alt={object.name}
                  // title={object.name}
                />
                <h5 className="navbar-list-item-link__title">
                  {/* {object.login} */}
                </h5>
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                className="navbar-list-item-link navbar-list-item-link--contact"
                href="#"
              >
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                <h5 className="navbar-list-item-link__title m-0">Sign Out</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;