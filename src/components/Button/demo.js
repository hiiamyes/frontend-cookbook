import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

const ButtonDemo = () => {
  // const [state, setState] = useState("default");
  return (
    <div>
      {/* <div>{`State: ${state}`}</div> */}
      <Button
        title="I'm a button!"
        // onMouseEnter={() => setState("hover")}
        // onMouseLeave={() => setState("default")}
        // onFocus={() => setState("focus")}
        // onBlur={() => setState("default")}
        // onClick={action("onClick")}
      >
        Buttonnn
      </Button>
      <br />
      <Button disabled>Button</Button>
    </div>
  );
};

export default ButtonDemo;
