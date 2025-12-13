import React, { useState, useRef, useEffect } from "react";
import BottomNavTop from "./BottomNavTop";
// import BottomNavBack from "./BottomNavBack";
// import BottomNavMenu from "./BottomNavMenu/";

// !VA 2024
import * as styles from "../styles/Header.module.scss";

const BottomNav = () => {

  /* !VA Initialize the stickyClass piece of state as an empty string. We will use this piece of state to store the className of sticky_nav in the styles object. We have to get it from the styles object because that's where unique identifier of the style name in the CSS style module is stored.   */
  const [stickyClass, setStickyClass] = useState("");
  /* !VA Initialize windowScroll to get the window Y scroll position   */
  const [windowScroll, setwindowScroll] = useState(null);

  const stickyNavbar = () => {
    if (window !== undefined) {
      // windowScroll = window.scrollY;
      // !VA Ge the scroll position and save it in state
      setwindowScroll(window.scrollY);
      // !VA If the window scrolls more than 150 units apply the sticky_nav style from the styles object, which has the unique identifiers used by the style module. You could change this for different devices by using window.innerHeight and conditionals, but I don't see the need.
      windowScroll > 150 ? setStickyClass(styles.sticky_nav) : setStickyClass("");
    }
  };
  
  // !VA This is the eventListener that tracks the current scrollY position of the window object and calls the stickyNavbar function to apply the sticky_nav function to the bottom_nav element if the window scrolls more than 150 units.
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    return () => window.removeEventListener("scroll", stickyNavbar);
    // !VA 2024 I removed the dependency array here because the window height wasn't registring in the stickyNavbar funtion
    // }), [];
  });

  
  return (
    <>
      {/* !VA stickyClass is the piece of state defined in the stickyNavbar function */}
      <div
        className={[styles.bottom_nav, `${stickyClass}`].join(" ")}
      >
        <div className={styles.bottom_nav_items}>
          {/* <BottomNavBack /> */}
          <BottomNavTop />
          {/* <BottomNavMenu /> */}
        </div>
      </div>
    </>
  );
};

export default BottomNav;