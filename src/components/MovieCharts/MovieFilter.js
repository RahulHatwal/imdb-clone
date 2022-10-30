import React from "react";
import Table from "react-bootstrap/Table";
import DropdownButton from "./DropdownButton";
import "./MovieFilter.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export default function MovieFilter(props) {
  const { movieList } = props;

  return (
    <div className="filter-row">
      <Table dark hover striped variant="dark">
        <tr>
          <th>Showing {movieList.length} Titles</th>
          <th className="filterCol">
            Sort by : <DropdownButton />
          </th>
          <th width="40">
            <div className="sortIconCol">
              <BsArrowUp />
              <BsArrowDown />
            </div>
          </th>
        </tr>
      </Table>
    </div>
  );
}
