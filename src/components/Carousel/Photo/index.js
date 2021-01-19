import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Style from "./style";

const Photo = (props) => {
  const { url, copyright, className, ...rest } = props;

  return (
    <Style className={classnames("photo", className)} {...rest}>
      <div className="copyright">{copyright}</div>
      <img src={url} />
    </Style>
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};

Photo.defaultProps = {
  copyright: "",
};

export default Photo;
