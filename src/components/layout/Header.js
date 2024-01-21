import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import AppBar from "./AppBar";
import Nav from "./Nav";
import { navs } from "../../utils/nav";

function Header() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("home");
  useEffect(() => {
    const scrollE = window.addEventListener("scroll", (e) => {
      let el = {};
      const offset = 300;
      const position = window.scrollY + offset;
      navs.forEach((n) => {
        const elim = document.getElementById(n.location);
        el[n.location] = elim.offsetTop;
      });
      let current = "";
      for (e in el) {
        if (el[e] <= position) current = e;
      }
      setView(current);
    });
    return () => window.removeEventListener("scroll", scrollE);
  }, []);
  const toggleOpen = () => setOpen((p) => !p);
  return (
    <div className="HeaderRoot">
      <AppBar open={[open, setOpen]} />
      <Nav view={view} />
      <SideBar open={[open, toggleOpen]} view={view} />
    </div>
  );
}
export default Header;
