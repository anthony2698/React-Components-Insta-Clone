// You do not need to change any code in this file
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
const [input, setInput] = useState({ input: "" });

const handleChange = (event) => {
    event.preventDefault();
    setInput({
        input: event.target.value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    props.filterData(input.input);
}
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                <i className="fab fa-instagram" />
            </div>
            <form onSubmit={handleSubmit} className="search-form">
            <input
                onChange={handleChange}
                name="input"
                type="text"
                placeholder="Search"
            />
            </form>
            <div className="social-wrapper">
            <div className="social">
                <i className="far fa-compass" />
            </div>
            <div className="social">
                <i className="far fa-heart" />
            </div>
            <div className="social">
                <i className="far fa-user-circle" />
            </div>
            </div>
          </div>
  );
};

export default SearchBar;
