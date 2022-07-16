import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPorfolio,
  htmlPortfolio,
  javascriptPortfolio,
  reactPorfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "html",
      title: "HTML and CSS",
    },
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "react",
      title: "React",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPorfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "react":
        setData(reactPorfolio);
        break;
      default:
        setData(featuredPorfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
