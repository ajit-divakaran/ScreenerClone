import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const News = ({day, title, body, headline }) => {
  return (
    <>
    <h5 className="text-secondary" style={{fontSize:'12px'}}>{day}</h5>
    <div className="bg-light px-3 py-4 d-flex flex-column align-items-start mb-4 rounded">
      <div className="d-flex gap-2 align-items-center mb-2">
   
        <h5 style={{ fontSize: "calc(0.9rem + 0.3vw)",margin:'0' }}>{title}</h5>
        <FontAwesomeIcon className="fa-xs" icon={faUpRightFromSquare} style={{color:"#625afc"}}/>
      </div>
      <a href="" style={{ color: "#625afc", fontSize: "calc(0.7rem + 0.3vw)",marginBottom:`${headline?'10px':'0px'}`,textDecoration:'none' }}>
        {body}
      </a>
{      headline && <h4
        style={{ fontSize: "calc(0.7rem + 0.3vw)" }}
        className="text-secondary m-0"
      >
        {headline}
      </h4>}
    </div>
    </>
  );
};

export default News;
