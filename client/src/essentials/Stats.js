// StatsComponent.js
import React from 'react';
import '../StatsComponent.css'; 
const StatsComponent = () => {
  return (
    <div className="stats-container">
      <h2 className="heading">
        BUILD TRUST WITH YOUR <span className="highlight">CAT CHECK</span>
      </h2>
      <div className="stats-items-container">
        <div className="stat-item">
          <p className="stat-number">45%</p>
          <p className="stat-description">Lorem ipsum dolor sit amet consectet</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <p className="stat-number">15.5K+</p>
          <p className="stat-description">Lorem ipsum dolor sit amet consectet</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <p className="stat-number">20B+</p>
          <p className="stat-description">Lorem ipsum dolor sit amet consectet</p>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;