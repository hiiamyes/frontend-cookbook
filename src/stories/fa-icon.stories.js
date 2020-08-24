import React from "react";
import styled from "styled-components";
import FAIcon from "src/components/FAIcon";

export default {
  title: "FA Icon",
};

const Layout = styled.div`
  padding: 15px;
`;

const icons = [
  "cog",
  "angle-down",
  "cloud-upload-alt",
  "copy",
  "search",
  "chevron-left",
  "chevron-right",
  "spinner",
  "times",
  "square",
  "check-square",
  "minus",
  "plus",
  "route",
  "arrow-down",
  "map-marker-alt",
  "hiking",
  "long-arrow-alt-down",
  "mug-hot",
  "angle-double-right",
];

export const Icons = () => {
  return (
    <Layout>
      <div>
        <a
          href={`https://fontawesome.com/icons?d=gallery&m=free`}
          target="_blank"
        >
          Font Awesome
        </a>
      </div>
      {icons.map((icon) => {
        return (
          <div
            style={{
              display: "grid",
              grid: "1fr / repeat(2, max-content)",
              gridGap: "5px",
            }}
          >
            <FAIcon icon={icon}></FAIcon>
            <span>{icon}</span>
          </div>
        );
      })}
    </Layout>
  );
};
