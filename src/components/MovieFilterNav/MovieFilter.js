import React from "react";
import DropdownButton from "../MovieCharts/DropdownButton";
import "./MovieFilter.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export default function MovieFilter(props) {
  const { movieList } = props;

  return (
    <div className="filter-row">
      <div className="text">Showing {movieList.length} Titles</div>
      <div className="control">
        <div>Sort by : </div>
        <DropdownButton />
        <div className="sortIcon">
          <BsArrowUp />
          <BsArrowDown />
        </div>
      </div>
    </div>
  );
}
