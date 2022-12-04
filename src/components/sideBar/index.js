import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../assets/images/dashboardIcon.svg";
import KeySquare from "../../assets/images/key-square.svg";
import ThreedSquare from "../../assets/images/3d-square.svg";
import RightArrow from "../../assets/images/right-arrow.svg";
import PercentageIcon from "../../assets/images/percentageIcon.svg";
import WalletMoney from "../../assets/images/walletmoney.svg";
import UserSquare from "../../assets/images/user-square.svg";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const route = useLocation();
  let sidebarOptions = [
    {
      imgUrl: KeySquare,
      text: "Maintenance",
      hasMoreOpt: false,
      url: "/maintenance",
      isSelected: route.pathname === "/maintenance" ? true : false,
    },
    {
      imgUrl: ThreedSquare,
      text: "Book Drone Service",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: PercentageIcon,
      text: "My Bookings",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: WalletMoney,
      text: "Service Reports",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: UserSquare,
      text: "Profile",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: PercentageIcon,
      text: "Simulation Management",
      hasMoreOpt: true,
      url: "/",
      isSelected: route.pathname === "/" ? true : false,
    },
  ];
  console.log("route", route);
  // useEffect(() => {
  //   if(route.pathname==="/maintenance"){
  //     setSideBatOpt(sideBarOpt)
  //   }
  // }, [route])

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHeader}>
        <img src={DashboardIcon} />
        <div>Dashboard</div>
      </div>
      <div className={styles.sideBarContent}>
        {sidebarOptions.map((item) => {
          return (
            <Link className={styles.link} to={item.url}>
              <div
                className={
                  item.isSelected
                    ? styles.selectedSidebarOptWrapper
                    : styles.sidebarOptWrapper
                }
              >
                <div className={styles.sidebarOpt}>
                  {
                    <img
                      src={item.imgUrl}
                      className={item.isSelected && styles.sidebarIcon}
                    />
                  }
                  <div
                    className={
                      item.isSelected
                        ? styles.selectedSidebarText
                        : styles.sidebarText
                    }
                  >
                    {item.text}
                  </div>
                </div>
                {item.hasMoreOpt ? (
                  <div className={styles.rigthArrow}>
                    <img
                      src={RightArrow}
                      className={item.isSelected && styles.selectedSidebarIcon}
                    />
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
