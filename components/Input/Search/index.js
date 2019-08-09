import React, { useState } from "react";
import BasicInput from "../BasicInput";
import FAIcon from "../../FAIcon";
import Style from "./style";

const Search = props => {
  return (
    <Style>
      <div className="icon">
        <FAIcon icon="search" />
      </div>
      <BasicInput />
    </Style>
  );
};

export default Search;
