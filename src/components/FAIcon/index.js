import React from "react";
import classnames from "classnames";
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
  faCog,
  faTimes,
  faCloudUploadAlt,
  faPlus,
  faBars,
  faCheck,
  faEye,
  faEdit,
  faPlaneDeparture,
  faArrowLeft,
  faTrash,
  faSearch,
  faCertificate,
  faCube,
  faTag,
  faShapes,
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
library.add(faCog);
library.add(faTimes);
library.add(faCloudUploadAlt);
library.add(faPlus);
library.add(faBars);
library.add(faCheck);
library.add(faEye);
library.add(faEdit);
library.add(faPlaneDeparture);
library.add(faArrowLeft);
library.add(faTrash);
library.add(faSearch);
library.add(faCertificate);
library.add(faCube);
library.add(faTag);
library.add(faShapes);

const FAIcon = (props) => {
  const { className, size, icon, color = "#000000" } = props;

  return (
    <Style className={classnames("icon", className)} size={size} color={color}>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

export default FAIcon;
