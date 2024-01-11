import React, { useState, useEffect } from "react";
import GaugeChart from 'react-gauge-chart';

const Speedometer = ({speed}) => {

  return (
    <div style={{ textAlign: 'center' }}>
      <GaugeChart
        id="speedometer"
        nrOfLevels={20}
        colors={['#FF5F6D', '#FFC371']}
        percent={speed / 200} // Normalize speed to a percentage
        needleColor="#313131"
        textColor="#000"
        needleBaseColor="#313131"
        animate={true}
        hideText={true}
      />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        Speed: {speed.toFixed(2)} km/h
      </div>
    </div>
  );
};

export default Speedometer;
