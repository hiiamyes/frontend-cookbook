import React, { useState } from "react";
import Button from "./index";

const ButtonDemo = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div>
        <Button onClick={() => setDisabled(false)}>Enable</Button>
        <br />
        <Button onClick={() => setDisabled(true)}>Disable</Button>
        <br />
        <Button onClick={() => setLoading(true)}>Load</Button>
        <br />
        <Button onClick={() => setLoading(false)}>Stop</Button>
        <br />
      </div>
      <br />
      <Button
        loading={loading}
        disabled={disabled}
        onClick={(e) => console.log("click")}
      >
        Click me!
      </Button>
      <br />
      <br />
      <Button loading={true}>Click me!</Button>
      <br />
      <br />
      <Button disabled>Click me!</Button>
    </div>
  );
};

export default ButtonDemo;
