import React from "react";
import { Link, useLocation } from "react-router-dom";

import s from "./styles.module.scss";
import {
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";

import { useAppContext } from "../../context";

const Navbar = () => {
  const { handleToggleSearch } = useAppContext();
  const location = useLocation();

  const activeLink = (link) => {
    switch (location.pathname) {
      case link: {
        return "#1976d2";
      }
      default:
        return "#fff";
    }
  };

  const smallTextStyles = {
    fontSize: "12px", // Adjust the font size in pixels as needed
    fontWeight: "bold", // Add this line to make the text bold
  };

  return (
    <div className={s.navbar}>
      <Link to="/" title="Home" className={s.link}>
        <AiOutlineHome color={activeLink("/")} />
        <span className={s.linkText} style={smallTextStyles}>Home</span>
      </Link>
      <button title="Search" className={s.link} onClick={handleToggleSearch}>
        <AiOutlineSearch color={activeLink("/search")} />
        <span className={s.linkText} style={smallTextStyles}>Search</span>
      </button>
      <Link to="/popular" title="Popular" className={s.link}>
        <AiOutlineFire color={activeLink("/popular")} />
        <span className={s.linkText} style={smallTextStyles}>Popular</span>
      </Link>
      <Link to="/top_rated" title="Top rated" className={s.link}>
        <AiOutlineStar color={activeLink("/top_rated")} />
        <span className={s.linkText} style={smallTextStyles}>
          Top rated
        </span>
      </Link>
      <Link to="/favorite" title="Favorite" className={s.link}>
        <AiOutlineHeart color={activeLink("/favorite")} />
        <span className={s.linkText} style={smallTextStyles}>
          Favorite
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
