import React, { useState } from "react";

interface ToggleProps {
  render: (toggleState: boolean, toggle: () => void) => React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ render }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled((prev) => !prev);

  return <>{render(isToggled, toggle)}</>;
};

export default Toggle;
