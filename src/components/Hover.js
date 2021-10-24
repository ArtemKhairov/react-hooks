import React, { useRef } from "react";
import useHover from "../hooks/useHover";

/**
 * @component Hover
 * @author ArtemKhairov
 * @returns Component with square
 */

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);
  console.log(isHovering);

  return (
    <div
      ref={ref}
      style={{ width: "400px", height: "400px", background:isHovering ? "red" : "blue" }}
    ></div>
  );
};

export default Hover;
