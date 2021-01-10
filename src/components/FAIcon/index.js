import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight,
  faAngleDown,
  faArrowLeft,
  faBars,
  faCertificate,
  faCheck,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faClock,
  faCloudUploadAlt,
  faCog,
  faCopy,
  faCube,
  faEdit,
  faEllipsisH,
  faEye,
  faHiking,
  faLanguage,
  faLongArrowAltDown,
  faMapMarkerAlt,
  faMinus,
  faMountain,
  faMugHot,
  faPlaneDeparture,
  faPlus,
  faRoute,
  faSearch,
  faShapes,
  faSpinner,
  faSquare,
  faTag,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./style";

library.add(faAngleDoubleRight);
library.add(faAngleDown);
library.add(faArrowLeft);
library.add(faBars);
library.add(faCertificate);
library.add(faCheck);
library.add(faCheckSquare);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faClock);
library.add(faCloudUploadAlt);
library.add(faCog);
library.add(faCopy);
library.add(faCube);
library.add(faEdit);
library.add(faEllipsisH);
library.add(faEye);
library.add(faHiking);
library.add(faLanguage);
library.add(faLongArrowAltDown);
library.add(faMapMarkerAlt);
library.add(faMinus);
library.add(faMountain);
library.add(faMugHot);
library.add(faPlaneDeparture);
library.add(faPlus);
library.add(faRoute);
library.add(faSearch);
library.add(faShapes);
library.add(faSpinner);
library.add(faSquare);
library.add(faTag);
library.add(faTimes);
library.add(faTrash);

const FAIcon = (props) => {
  const { className, size, icon, color = "#000000" } = props;

  return (
    <Style className={classnames("icon", className)} size={size} color={color}>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

FAIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

FAIcon.defaultProps = {
  size: "m",
  color: "#000000",
};

export default FAIcon;
