import React from "react";

function componentName({ data, limt, lastPage, active, paginate }) {

  const point = [];
  for (let i = 0; i < Math.ceil(data.length / limt); i++) {
    point.push(i + 1);
  }

  return (
    <>
      <div className="repo_wrapper">
        {data.length > 0 ? (
          lastPage.map((el, index) => (
            <div key={index} className="repo border-top border-bottom pb-3 pt-3">
              <div className="repo_left">
                <span className="repo_left_one">
                  <div className="repo_left_one_span">
                    <a href="#" className="repo_left_one_span_h3">
                      {el.name}
                    </a>
                    <p className="repo_left_one_span_p">{el.visibility}</p>
                  </div>
                  <p className="repo_left_one_p2">html css</p>
                  <span className="repo_left_span">
                    <i className="repo_left_span_i bi bi-circle-fill"></i>
                    <p className="repo_left_span_p">{el.language}</p>
                    <p className="repo_left_span_p2">Updated 2 days ago</p>
                  </span>
                </span>
              </div>
              <div className="repo_right">
                <button className="repo_right_button">
                  <i class="repo_right_button_i bi bi-star"></i>
                  Star
                </button>
                <button className="repo_right_buttons">
                  <i class="bi bi-caret-down-fill"></i>
                </button>
                <hr className="repo_right_hr" />
              </div>
            </div>
          ))
        ) : (
          <h1>loading</h1>
        )}

        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center gap-2 mt-4">
              {point.map((item,id) => {
                return (
                  <li
                  key={id}
                    className={`page-item ${active === item ? "active" : ""}`}
                    onClick={() => paginate(item)}
                  >
                    <a className="page-link" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        
      </div>
    </>
  );
}

export default componentName;
