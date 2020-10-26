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
  faCopy,
  faMinus,
  faPlus,
  faRoute,
  faArrowDown,
  faMapMarkerAlt,
  faHiking,
  faLongArrowAltDown,
  faMugHot,
  faAngleDoubleRight,
  faClock,
  faMountain,
  faEllipsisH,
  faBars,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./style";

library.add(faCog);
library.add(faAngleDown);
library.add(faCloudUploadAlt);
library.add(faCopy);
library.add(faSearch);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faSpinner);
library.add(faTimes);
library.add(faSquare);
library.add(faCheckSquare);
library.add(faMinus);
library.add(faPlus);
library.add(faRoute);
library.add(faArrowDown);
library.add(faMapMarkerAlt);
library.add(faHiking);
library.add(faLongArrowAltDown);
library.add(faMugHot);
library.add(faAngleDoubleRight);
library.add(faClock);
library.add(faMountain);
library.add(faEllipsisH);
library.add(faBars);
library.add(faLanguage);

const FAIcon = (props) => {
  const { size, icon, color = "#000000" } = props;
  return (
    <Style size={size} color={color}>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

export default FAIcon;
