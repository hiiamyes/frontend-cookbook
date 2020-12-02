import React from "react";
import classnames from "classnames";
import IconButton from "src/components/Buttons/IconButton";
import Style from "./style";

const Pagination = ({ className, disabled, nextDisabled, pre, next, page }) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("page", page - 1);
  const prePageSearch = "?" + searchParams.toString();
  searchParams.set("page", page + 1);
  const nextPageSearch = "?" + searchParams.toString();
  return (
    <Style className={className}>
      <IconButton icon="chevron-left" disabled={disabled || page === 1}>
        {React.cloneElement(pre, {
          className: classnames("page-link", {
            disabled: disabled || page === 1,
          }),
          to: (location) => ({ ...location, search: prePageSearch }),
          alt: "pre-page",
        })}
        {/* <Link
          className={classnames("page-link", {
            disabled: disabled || page === 1,
          })}
          to={(location) => ({ ...location, search: prePageSearch })}
          alt="pre-page"
        ></Link> */}
      </IconButton>
      <span className="pagination-page">{page}</span>
      <IconButton icon="chevron-right" disabled={disabled || nextDisabled}>
        {React.cloneElement(next, {
          className: classnames("page-link", {
            disabled: disabled || nextDisabled,
          }),
          to: (location) => ({ ...location, search: nextPageSearch }),
          alt: "next-page",
        })}
        {/* <Link
          className={classnames("page-link", {
            disabled: disabled || nextDisabled,
          })}
          to={(location) => ({ ...location, search: nextPageSearch })}
          alt="next-page"
        ></Link> */}
      </IconButton>
    </Style>
  );
};

export default Pagination;
