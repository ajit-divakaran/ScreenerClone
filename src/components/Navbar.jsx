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
      console.log(hide,dimension)
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
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
          <div className="d-flex gap-4">
            <Link to={"/"} className="text-decoration-none text-black">
              <h4 style={{ fontSize: "20px" }}>Feeds</h4>
            </Link>
            <Link to={"/"} className="text-decoration-none text-black">
              <h4 style={{ fontSize: "20px" }}>Screens</h4>
            </Link>
            <Link to={"/"} className="text-decoration-none text-black">
              <h4 style={{ fontSize: "20px" }}>Tools</h4>
            </Link>
          </div>
        </div>
        <div className="right d-inline-flex gap-4 ">
          <div>
            <input
              type="text"
              className="p-2 rounded"
              style={{ border: "0.05px solid #a1a0a0" }}
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
            className="px-3 rounded login"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/10628/10628940.png"
              width="15px"
              height="20px"
              alt=""
            />
            <h5 className="m-0">User</h5>
          </div>
        </div>
      </nav>
      <FixedDownNav />
    </div>
  );
};

export default Navbar;
