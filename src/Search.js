import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Type a city..."
            className="searchbar"
          />
        </div>
        <div class="col-2">
          <input type="submit" value="Search" className="search-button" />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Current location"
            className="search-button"
          />
        </div>
      </div>
    </form>
  );
}
