import React from 'react';
import FAIcon from 'src/components/FAIcon';
import styled from 'styled-components';

var Style = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s linear loader infinite;
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = props => {
  return React.createElement(Style, null, React.createElement(FAIcon, {
    icon: "spinner"
  }));
};

export { Loader };
//# sourceMappingURL=index.js.map
