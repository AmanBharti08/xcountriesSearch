import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
const Search = () => {
  const [flags, setFlags] = useState([]);
  const [text, setText] = useState("");
  const fetchFlag = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((result) => {
        setFlags(result);
        console.log(result);
      });
  };

  const handleChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    fetchFlag();
  }, []);

  const filteredFlags = flags.filter((flag) =>
    flag.name.official.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="searchBox"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="grid">
        {filteredFlags.map((flag, index) => {
          return (
            <CountryCard
              key={index}
              img={flag.flags.png}
              title={flag.name.official}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
