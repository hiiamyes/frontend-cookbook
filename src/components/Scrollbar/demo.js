import React from "react";
import Scrollbar from "./index";

const ScrollbarDemo = () => {
  return (
    <Scrollbar>
      {[...new Array(100)].map(() => (
        <div>test</div>
      ))}
    </Scrollbar>
  );
};

export default ScrollbarDemo;
