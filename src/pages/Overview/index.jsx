import { useContext, useState, useEffect } from "react";
import "./style.scss";
import { Context } from "../../UI/Context/context";
function Home() {
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


  return (
    <>
      <section className="over">
        <div className="over_title">
          <h3 className="over_title_h3">Popular repositories</h3>
          <p className="over_title_p">customize your pin</p>
        </div>
        <ul className="over_cards">
          { data.length > 0 ? 
            data.slice(0,8).map((el ,i) => (
              <li key={i} className="over_cards_card">
                <div className="over_cards_card_line">
                  <a href={el.html_url} target="_blank" className="over_cards_card_line_a" >
                    {el.name}
                  </a>
                  <p className="over_cards_card_line_p">{el.visibility}</p>
                </div>
                <p className="over_cards_card_p">{el.description}</p>
                <span className="over_cards_card_span">
                  <i className="over_cards_card_span_i bi bi-circle-fill"></i>
                  <p className="over_cards_card_span_p">{el.language}</p>
                </span>
              </li>
            ))  :<h1>loading</h1>
          
           
            }
          {/* <li className="over_cards_card">
            <div className="over_cards_card_line">
              <a className="over_cards_card_line_a" href="">
                test-file
              </a>
              <p className="over_cards_card_line_p">Public</p>
            </div>
            <p className="over_cards_card_p">hmtl css</p>
            <span className="over_cards_card_span">
              <i className="bi bi-circle-fill"></i>
              <p className="over_cards_card_span_p">HTML</p>
            </span>
          </li> */}
        </ul>
      </section>
    </>
  );
}

export default Home;
