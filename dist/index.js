import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faAngleDown, faCloudUploadAlt, faSearch, faChevronLeft, faChevronRight, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const sizes = {
  small: "8px",
  default: "16px"
};
var Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: ${props => sizes[props.size] || sizes["default"]} !important;
  }
`;

library.add(faCog);
library.add(faAngleDown);
library.add(faCloudUploadAlt);
library.add(faSearch);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faSpinner);
library.add(faTimes);

const FAIcon = props => {
  const {
    size,
    icon
  } = props;
  return React.createElement(Style, {
    size: size
  }, React.createElement(FontAwesomeIcon, {
    icon: icon
  }));
};

var Style$1 = styled.div`
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
  return React.createElement(Style$1, null, React.createElement(FAIcon, {
    icon: "spinner"
  }));
};

export { FAIcon, Loader };
//# sourceMappingURL=index.js.map
