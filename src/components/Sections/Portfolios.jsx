import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "E-commerce",
  },
  {
    id: 3,
    name: "Business Site",
  },
  {
    id: 4,
    name: "Landing Page",
  },
  {
    id: 5,
    name: "Blog",
  },
];

const allData = [
  {
    id: 1,
    name: "Business Site",
    link: "https://sitedomedico.com/",
    category: ["business site"],
    image: "images/portfolio/1.png",
  },
  {
    id: 2,
    name: "E-commerce",
    link: "https://us.mototalk.com/",
    category: ["e-commerce"],
    image: "images/portfolio/4.png",
  },
  {
    id: 3,
    name: "E-commerce",
    link: "https://greenmainframe.com/",
    category: ["e-commerce"],
    image: "images/portfolio/22.png",
  },
  {
    id: 4,
    name: "Business Site",
    link: "https://webera.com/",
    category: ["business site"],
    image: "images/portfolio/2.png",
  },
  {
    id: 5,
    name: "Business Site",
    link: "https://sibimpact.com/",
    category: ["business site"],
    image: "images/portfolio/5.png",
  },
  {
    id: 6,
    name: "Business Site",
    link: "https://lukasdomingos.vercel.app/",
    category: ["business site"],
    image: "images/portfolio/3.png",
  },
  {
    id: 7,
    name: "E-commerce",
    link: "https://robodaloto.com.br/",
    category: ["e-commerce"],
    image: "images/portfolio/20.jpeg",
  },
  {
    id: 8,
    name: "Business Site",
    link: "https://webera.jorlans.com/",
    category: ["business site"],
    image: "images/portfolio/6.png",
  },
  {
    id: 9,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/landing1/",
    category: ["landing page"],
    image: "images/portfolio/8.png",
  },
  {
    id: 10,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/portfolio",
    category: ["landing page"],
    image: "images/portfolio/12.png",
  },
  {
    id: 11,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/webera/",
    category: ["landing page"],
    image: "images/portfolio/9.png",
  },
  {
    id: 12,
    name: "Blog",
    link: "https://blog.greenmainframe.com/",
    category: ["blog"],
    image: "images/portfolio/10.png",
  },
  {
    id: 13,
    name: "E-commerce",
    link: "https://shop.jorlans.com/",
    category: ["e-commerce"],
    image: "images/portfolio/7.png",
  },
  {
    id: 14,
    name: "Business Site",
    link: "https://imovel.jorlans.com/",
    category: ["business site"],
    image: "images/portfolio/24.png",
  },
  {
    id: 15,
    name: "E-commerce",
    link: "https://projetos.jorlans.com/",
    category: ["e-commerce"],
    image: "images/portfolio/21.png",
  },
  {
    id: 16,
    name: "Business Site",
    link: "https://beerwiththeboss.com/",
    category: ["business site"],
    image: "images/portfolio/23.png",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return data.category.includes(targetFilter) && data.id;
      });
    }
    setVisibleItems(tempData);
    if (targetFilter !== "all projects") {
      setNoMorePost(true);
    } else {
      setNoMorePost(false);
    }
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length + 3) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  useEffect(() => {
    let tempCount = dataVisibleCount + dataIncrement;
    if (tempCount > getAllItems.length + 3) {
      setNoMorePost(true);
    }
  }, [dataVisibleCount, getAllItems, dataIncrement]);

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
