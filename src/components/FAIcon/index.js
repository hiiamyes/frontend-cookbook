import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faAngleDown,
  faCloudUploadAlt,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faSpinner,
  faTimes,
  faSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./style";

library.add(faCog);
library.add(faAngleDown);
library.add(faCloudUploadAlt);
library.add(faSearch);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faSpinner);
library.add(faTimes);
library.add(faSquare);
library.add(faCheckSquare);

const FAIcon = (props) => {
  const { size, icon } = props;
  return (
    <Style size={size}>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

export default FAIcon;
