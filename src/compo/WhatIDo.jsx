import {
  FaChartBar,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import "./WhatIDo.css";

// ✅ add this import (path must match your file)
import geminiformalandworkingImg from "../assets/whatido/geminiformalandworking.png";

function WhatIDo() {
  return (
    <section className="whatido" id="what-i-do">
      <h2 className="whatido-title">What I Do?</h2>

      <div className="whatido-grid">
        <div className="whatido-illustration">
          <div className="illus-card">

            {/* ✅ NEW: image area (top-right corner) */}
            <div className="illus-media">
              <img src={geminiformalandworkingImg} alt="Analytics illustration" loading="lazy" />
            </div>

            <div className="illus-stat">
              <h4>+35%</h4>
              <p>Decision-Making Efficiency Improvement</p>
            </div>
            <div className="illus-stat">
              <h4>30+</h4>
              <p>Dashboards & Reports Delivered</p>
            </div>
            <div className="illus-stat">
              <h4>2M+</h4>
              <p>Business Records Analyzed</p>
            </div>
          </div>
        </div>

        <div className="whatido-right">
          <h3 className="whatido-heading">
            Business Intelligence & <br /> Analysis
          </h3>

          <div className="whatido-icons">
            <div className="whatido-icon"><FaChartBar /></div>
            <div className="whatido-icon"><FaPython /></div>
            <div className="whatido-icon"><FaDatabase /></div>
            <div className="whatido-icon"><FaProjectDiagram /></div>
            <div className="whatido-icon"><FaCloud /></div>
            <div className="whatido-icon"><FaCogs /></div>
          </div>

          <ul className="whatido-list">
            <li>Translates raw data into clear dashboards, reports, and KPIs for business stakeholders</li>
            <li>Analyzes trends, performance metrics, and variances to support strategic decisions</li>
            <li>Builds and maintains BI solutions using SQL, Excel, Power BI, Tableau, or Looker</li>
            <li>Ensures data accuracy, consistency, and usability across business teams</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
