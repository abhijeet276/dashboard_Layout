import React from "react";
import styles from "./Header.module.scss";
import SearchIcon from "../../assets/images/searchIcon.svg";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div></div>
      <div className={styles.headerOptions}>
        <div>Home</div>
        <div>Contact</div>
        <div>Profile</div>
      </div>
      <div>
        <img src={SearchIcon} />
      </div>
    </div>
  );
}

export default Header;
