import React from "react";
import styled from "styled-components";

import { colors } from "../theme/dark-theme";

import SearchSvgfrom from "../assets/search-solid.svg";

const SearchInput = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  background-color: ${colors.blueNight};
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;

  & .iconSearch {
    width: 20px;
    height: 20px;
    background: url(${SearchSvgfrom}) no-repeat center center;
  }

  & input {
    width: 70%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: ${colors.heading};
    padding: 0.4rem;
  }
  & input::placeholder {
    color: ${colors.heading};
  }

  & input:focus {
    outline: none;
  }

  & .searchBtn {
    background-color: ${colors.blueSky};
    border: none;
    padding: 0.8rem;
    letter-spacing: 1px;
    border-radius: 8px;
    color: ${colors.heading};
    cursor: pointer;
  }
`;

export function Search({ value, onChange, onClick }) {
  return (
    <SearchInput>
      <div className="iconSearch"></div>
      <input
        type="text"
        placeholder="Search Github username..."
        value={value}
        onChange={onChange}
      />
      <button className="searchBtn" onClick={onClick}>
        SEARCH
      </button>
    </SearchInput>
  );
}
