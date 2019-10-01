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
  faTimes
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

const FAIcon = props => {
  const { icon } = props;
  return (
    <Style>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

export default FAIcon;
