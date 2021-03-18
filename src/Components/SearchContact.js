import React from "react";
import "../App.css";

const SearchContact = (props) => {
  return (
    <div className="center">
      <input
        className="search"
        name="first_name"
        value={props.first_name}
        onChange={props.handleChange}
        placeholder="Search First Name"
      />
    </div>
  );
};

export default SearchContact;
