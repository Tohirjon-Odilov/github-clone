import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../UI/Context/context";
import "./style.scss";
import ItemPost from "./itenPost"
function About() {
  const { apiValue } = useContext(Context);
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const result = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);


  const [limt, setLimt] = useState(6);
  const [point, setPoint] = useState(1);

  const firstPoint = limt * point;
  const lastPoint = firstPoint - limt;

  const lastPage = data.slice(lastPoint, firstPoint);

  const paginate = (pageNumber) => {
    setPoint(pageNumber);
  };


  return (
    <>
      <section className="section">
        <div className="find_mobile">
          <span className="find_new_span mb-3">
            <i class="find_new_span_i fa-solid fa-book-bookmark"></i>
            <p className="find_new_span_p">New</p>
          </span>
          <input
            className="find_input mb-3"
            placeholder="Find a repository ..."
            type=""
          />
          <div className="find_sort_span_wrapper dislike">
            <span className="find_sort_span">
              <p className="find_sort_span_p">Type</p>
              <i class="find_sort_span_i bi bi-caret-down-fill"></i>
            </span>
            <span className="find_sort_span">
              <p className="find_sort_span_p">Language</p>
              <i class="find_sort_span_i bi bi-caret-down-fill"></i>
            </span>
            <span className="find_sort_span">
              <p className="find_sort_span_p">Sort</p>
              <i class="find_sort_span_i bi bi-caret-down-fill"></i>
            </span>
          </div>
        </div>
        <div className="find">
          <input
            className="find_input"
            placeholder="Find a repository ..."
            type=""
          />
          <div className="find_sort">
            <span className="find_new_span like">
              <i class="find_new_span_i fa-solid fa-book-bookmark"></i>
              <p className="find_new_span_p">New</p>
            </span>
            <div className="find_sort_span_wrapper dislike">
              <span className="find_sort_span">
                <p className="find_sort_span_p">Type</p>
                <i class="find_sort_span_i bi bi-caret-down-fill"></i>
              </span>
              <span className="find_sort_span">
                <p className="find_sort_span_p">Language</p>
                <i class="find_sort_span_i bi bi-caret-down-fill"></i>
              </span>
              <span className="find_sort_span">
                <p className="find_sort_span_p">Sort</p>
                <i class="find_sort_span_i bi bi-caret-down-fill"></i>
              </span>
            </div>
          </div>
          <span className="find_new_span dislike">
            <i class="find_new_span_i fa-solid fa-book-bookmark"></i>
            <p className="find_new_span_p">New</p>
          </span>
        </div>
        <div className="find_sort_span_wrapper like">
          <span className="find_sort_span">
            <p className="find_sort_span_p">Type</p>
            <i class="find_sort_span_i bi bi-caret-down-fill"></i>
          </span>
          <span className="find_sort_span">
            <p className="find_sort_span_p">Language</p>
            <i class="find_sort_span_i bi bi-caret-down-fill"></i>
          </span>
          <span className="find_sort_span">
            <p className="find_sort_span_p">Sort</p>
            <i class="find_sort_span_i bi bi-caret-down-fill"></i>
          </span>
        </div>
        {/* repositories stardet */}
       

        <ItemPost
          data={data}
          limt={limt}
          lastPage={lastPage}
          active={point}
          paginate={paginate}
        />

        {/* <div className="repo border-top border-bottom pb-3 pt-3">
            
            <div className="repo_left">
              <span className="repo_left_one">
                <div className="repo_left_one_span">
                  <h3 className="repo_left_one_span_h3">Test-File</h3>
                  <p className="repo_left_one_span_p">public</p>
                </div>
                <p className="repo_left_one_p2">html css</p>
                <span className="repo_left_span">
                  <i className="repo_left_span_i bi bi-circle-fill"></i>
                  <p className="repo_left_span_p">HTML</p>
                  <p className="repo_left_span_p2">Updated 2 days ago</p>
                </span>
              </span>
            </div>
            <div className="repo_right">
              <button className="repo_right_button">
                <i class="bi bi-star"></i>
                Star
              </button>
              <button className="repo_right_buttons">
                <i class="bi bi-caret-down-fill"></i>
              </button>
              <hr className="repo_right_hr" />
            </div>
          </div> */}
      </section>
    </>
  );
}

export default About;
