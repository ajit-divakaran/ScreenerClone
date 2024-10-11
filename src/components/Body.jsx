import { faBullhorn, faDragon, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import News from "./News";
import RightHover from "./RightHover";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Body = () => {
  return (
    <div className="row m-0" style={{ backgroundColor: "#ebeff5" }}>
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-8">
            <div className="d-flex justify-content-between mt-5">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6995/6995971.png"
                  alt=""
                  width="25px"
                  height="25px"
                />
                <p
                  id="responsive-font"
                  className="m-0"
                  style={{ fontWeight: "500" }}
                >
                  Core Watchlist
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
                  alt=""
                  width="12px"
                  height="14px"
                />
              </div>
              <div className="d-flex gap-2">
                <button className = "d-flex gap-2 align-items-center p-1 px-2 rounded p-2" style={{border:'1px solid grey',letterSpacing:'1.4px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/128/12595/12595867.png" alt="" width="17px"/>
                    <h4 className="m-0" id="responsive-font" style={{'--bs-font':'0.72rem',color:'#5c5c5c'}}>WATCHLIST VIEW</h4>
                </button>
                <button className="rounded px-3" style={{border:'1px solid grey'}}>
                  <FontAwesomeIcon icon={faList} style={{ color: "#645df9" }} />
                </button>
              </div>
            </div>
            <hr />
            <p className="text-secondary">Nothing new since your last visit.</p>
            <hr />

            <News day={"YESTERDAY"} title={"Indostar Capital"} body={"Board Meeting Intimation for Intimation Under Regulation 29 Of The SEBI (Listing Obligations And Disclosures Requirements) Regulations, 2015 ('Listing Regulations')"} headline={"Board meeting to approve Q2 financial results."}/>
            <News day={"7 October 2024"} title={"Indian Energy Ex"} body={"Announcement under Regulation 30 (LODR)-Press Release / Media Release"} headline={"IEX reports 24% YoY increase in total volume for September 2024."}/>
            <News day={"3 October 2024"} title={"Allcargo Gati "} body={"Announcement under Regulation 30 (LODR)-Resignation of Company Secretary / Compliance Officer"} headline={"Resignation of Company Secretary & Compliance Officer T.S. Maharani."}/>
            <News day={"2 October 2024"} title={"Shri Keshav "} body={"Rating Update"} />
            <News day={"1 October 2024"} title={"Indostar Capital"} body={"Board Meeting Intimation for Intimation Under Regulation 29 Of The SEBI (Listing Obligations And Disclosures Requirements) Regulations, 2015 ('Listing Regulations')"} headline={"Board meeting to approve Q2 financial results."}/>
            <News title={"PG Electroplast "} body={"Resolutions Passed At The 22Nd Annual General Meeting"}/>
            <News title={"PG Electroplast "} body={"Shareholder Meeting / Postal Ballot-Scrutinizer''s Report"} headline={"Voting results of 22nd Annual General Meeting."}/>
            <button className="w-100 py-2 blue-hover rounded mb-3" style={{fontWeight:'600',"--bs-font":"0.72rem",letterSpacing:'2px'}}id="responsive-font">SHOW MORE</button>
          </div>
          <div className="col-4">
            <div className="mt-4 p-3 rounded bg-light mb-3">
              <RightHover head={'Latest Fillings'} icon={faBullhorn}/>
              <hr />
              <RightHover head={"Quaterly Results"} icon={faChartLine}/>
              <hr />
              <RightHover head={"Upcoming Results"} icon={faCalendarDays}/>
              

            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default Body;
