import React from "react";
import "./index.scss";
function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer_ul_git">
          <li className="footer_ul_git_li">
            <i className="footer_git-hub fa-brands fa-github"></i>
            <p className="footer_ul_git_li_p">© 2023 GitHub, Inc.</p>
          </li>
        </ul>
        <ul className="footer_ul">
          <li className="footer_ul_li">
            <a href="">Terms</a>
          </li>
          <li className="footer_ul_li">
            <a href="">Privacy</a>
          </li>
          <li className="footer_ul_li">
            <a href="">Security</a>
          </li>
          <li className="footer_ul_li">
            <a href="">Status</a>
          </li>
          <li className="footer_ul_li"> 
            <a href="">Docs</a>
          </li>
          
          <li className="footer_ul_li">
            <a href="#">Contact</a>
          </li>
          <li className="footer_ul_li">
            <a href="#">GitHub</a>{" "}
          </li>
          <li className="footer_ul_li">
            <a href="#">Pricing</a>
          </li>
          <li className="footer_ul_li">
            <a href="#"> API </a>
          </li>
          <li className="footer_ul_li">
            <a href="#">Training</a>
          </li>
          <li className="footer_ul_li">
            <a href="#">Blog</a>
          </li>
          <li className="footer_ul_li">
            <a href="#">About</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
