import React, { useState } from "react";
import styled from "styled-components";
import Button from "src/components/Buttons/Button";
import OutlineButton from "src/components/Buttons/OutlineButton";
import IconButton from "src/components/Buttons/IconButton";
import TextButton from "src/components/Buttons/TextButton";

export default {
  title: "Button",
};

const Layout = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const Basic = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
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
    </Layout>
  );
};

export const Icon = () => {
  return (
    <Layout>
      <IconButton icon="chevron-left" size="s" />
      <IconButton icon="chevron-left" />
      <IconButton icon="chevron-left" size="l" />
      <IconButton icon="chevron-left" size="l" loading />
      <IconButton icon="chevron-left" size="l" disabled />
      <IconButton icon="chevron-right" size="s" withBackground />
      <IconButton icon="chevron-right" size="m" withBackground />
      <IconButton icon="chevron-right" size="l" withBackground />
      <IconButton icon="chevron-right" size="l" withBackground loading />
      <IconButton icon="chevron-right" size="l" withBackground disabled />
    </Layout>
  );
};

export const Outline = () => {
  return (
    <Layout>
      <OutlineButton>Outline Button</OutlineButton>
    </Layout>
  );
};

export const Text = () => {
  return (
    <Layout>
      <TextButton>Text Button</TextButton>
    </Layout>
  );
};
