import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import dummyData from './dummy-data.js';

const App = () => {
const [data, setData] = useState(dummyData);

const filterData = (input) => {
    const newData = data.filter(el => {
        return el.username === input;
    });
    console.log("NewData", newData, input);
    setData(newData);
}
    return (
        <div className="App">
          <SearchBar filterData={filterData} />
          <PostsPage data={data} />
        </div>
    );
};

export default App;
