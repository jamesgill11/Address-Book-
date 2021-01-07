import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .center {
    text-align: center;
  }
`;

const SearchContact = (props) => {
  return (
    <Styles>
      <div className="center">
        <input
          className="search"
          name="first_name"
          value={props.first_name}
          onChange={props.handleChange}
          placeholder="Search First Name"
        />
      </div>
    </Styles>
  );
};

export default SearchContact;
