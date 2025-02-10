import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", background: "#ddd", borderRadius: "10px" }}>
      <div
        style={{
          width: `${progress}%`,
          background: "#4CAF50",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
