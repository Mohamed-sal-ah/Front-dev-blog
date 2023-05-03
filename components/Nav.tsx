import Link from "next/link";
import React, { useEffect, useState } from "react";
import navStyles from "../styles/Nav.module.css";
import { NextRouter, useRouter } from "next/router";

const Nav = () => {
  const router: NextRouter = useRouter();
  const isHome = router.pathname === "/";
  const [navBgColor, setNavBgColor] = useState<boolean>(isHome);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "auto";
    setMobileNav(false);
  }, [router]);

  const changeNavBgColor = () => {
    if (window.scrollY <= 90) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  };

  const changeNav = () => {
    if (mobileNav) {
      document.body.style.overflowY = "auto";
      setMobileNav(false);
    } else {
      document.body.style.overflowY = "hidden";
      setMobileNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBgColor);
  });

  const showTransparent =
    isHome && navBgColor ? " " + navStyles.transparent : "";
  const activeNav = mobileNav ? " " + navStyles.active : "";
  return (
    <>
      <nav className={navStyles.nav + showTransparent}>
        <Link href="/">
          <a className={navStyles.navTitle}>Front-Dev Blog</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>BLOG</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
        <button onClick={() => changeNav()} className={navStyles.hamburger}>
          <span className={navStyles.bar} />
          <span className={navStyles.bar} />
          <span className={navStyles.bar} />
        </button>
      </nav>
      <div className={navStyles.smallNav + activeNav}>
        <button onClick={() => changeNav()} className={navStyles.close}>
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.06066"
              y1="1.93934"
              x2="30.0607"
              y2="29.9393"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="1.93934"
              y1="29.9393"
              x2="29.9393"
              y2="1.93934"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </button>
        <ul>
          <li>
            <Link href="/">
              <a>BLOG</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
