import React, { useState } from "react";

interface MouseTrackerProps {
  render: (position: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "200px",
        background: "#f0f0f0",
        border: "1px solid #ccc",
      }}
    >
      {render(position)}
    </div>
  );
};

export default MouseTracker;
