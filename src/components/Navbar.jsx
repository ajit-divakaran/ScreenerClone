import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FixedDownNav from "./FixedDownNav";

const Navbar = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [hide, setHide] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      const newDimension = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setDimension(newDimension);

      if (newDimension.width < 600) {
        setHide(true);
      } else {
        setHide(false);
      }
    };
    console.log(hide, dimension);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-100 box-border">
      <nav className="mx-5 d-flex justify-content-between align-items-center mt-2 mb-2">
        <div className="left d-flex gap-5">
          <div>
            <img
              src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
              style={{ color: "white" }}
              width="150px"
              alt=""
            />
          </div>
          <div className="d-none d-md-flex gap-4">
            <Link to={"/"} className="text-decoration-none text-black nav-link">
              <h4 id="responsive-font" style={{ "--bs-font": "1.1rem" }}>
                Feeds
              </h4>
            </Link>
            <Link
              to={"/screens"}
              className="text-decoration-none text-black nav-link"
            >
              <h4 id="responsive-font" style={{ "--bs-font": "1.1rem" }}>
                Screens
              </h4>
            </Link>
            <Link to={"/"} className="text-decoration-none text-black nav-link">
              <h4 id="responsive-font" style={{ "--bs-font": "1.1rem" }}>
                Tools
              </h4>
            </Link>
          </div>
        </div>
        <div className="right d-inline-flex gap-4 ">
          <div>
            <input
              type="text"
              className="p-2 rounded ms-3 input-box"
              style={{
                border: "0.05px solid #a1a0a0",
                width: "calc(8.5rem + 8.5vw)",
              }}
              placeholder="Search for a company"
            />
          </div>
          <div
            style={{
              border: "1px solid black",
              display: "inline-flex",
              gap: "8px",

              alignItems: "center",
            }}
            className="px-3 rounded login d-none d-md-inline-flex"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/10628/10628940.png"
              width="15px"
              height="20px"
              alt=""
            />
            <h5
              className="m-0 d-none d-lg-block"
              id="responsive-font"
              style={{ "--bs-font": "0.75rem" }}
            >
              User
            </h5>
          </div>
        </div>
      </nav>
      <FixedDownNav />
    </div>
  );
};

export default Navbar;
