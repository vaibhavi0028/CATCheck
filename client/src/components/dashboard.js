import React from 'react';
import '../Dashboard.css'; // Import CSS for styling
import FirstIcon from '../images/tick.svg';
import SecondIcon from '../images/done.svg'; // Update the path as needed

const Dashboard = ({ name }) => {
  return (
    <div className="dashboard">
      <div className="left-container">
        <div className="greeting">
          <h1>Hello, Name!</h1>
          <hr />
        </div>
        
        <div className="buttons">
          <button className="button">
            <div className="icon-container">
              <img src={FirstIcon} alt="Button Icon" width="24" height="24" />
            </div>
            <div className="button-content">
              <span className="button-heading">864</span>
              <span className="button-subheading">Total Task</span>
            </div>
          </button>
          <button className="button">
            <div className="icon-container">
              <img src={SecondIcon} alt="Button Icon" width="24" height="24" />
            </div>
            <div className="button-content">
              <span className="button-heading">11</span>
              <span className="button-subheading">In Progress</span>
            </div>
          </button>
          <button className="button">
            <div className="icon-container">
              <img src={FirstIcon} alt="Button Icon" width="24" height="24" />
            </div>
            <div className="button-content">
              <span className="button-heading">324</span>
              <span className="button-subheading">Completed</span>
            </div>
          </button>
        </div>
        <div className="chart-box">
          <h2>Total Work</h2>
          <div className="chart">
            <img src="/path/to/chart.png" alt="Chart" className="chart-image" />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="info-box">
          <p>Additional Information</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
