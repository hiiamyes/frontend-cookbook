import React from "react";
import Button from "src/components/Button";
import Collapse from "./index";

const CollapseDemo = () => {
  return (
    <Collapse
      toggle={<Button>toggle</Button>}
      detail={
        <div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
      }
    ></Collapse>
  );
};

export default CollapseDemo;
