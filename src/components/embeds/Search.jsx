import React, { useState, useContext } from "react";
import {
  TextField,
  InputLabel,
  IconButton,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppContext from "../../contexts/AppContext";

// The actual search functionality
// The actual search functionality
const handleSearch = (query, setSearchResults, { portfolio, articles, seminars, tools }) => {
  let results = [];
  [portfolio, articles, seminars, tools].forEach((items, index) => {
    const category = ['portfolio', 'articles', 'seminars', 'tools'][index];
    if(items && Array.isArray(items)) {
      items.forEach((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({ category, ...item });
        }
      });
    }
  });
  setSearchResults(results);
};


/*const handleSearch = (query, e, state) => {
  e.preventDefault();
  let results = [];
  ['portfolio', 'articles', 'seminars', 'tools'].forEach(category => {
    state[category].forEach(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        results.push({category, ...item});
      }
    });
  });
  setSearchResults(results);
  history.push({
    pathname: '/search',
    state: { results }
  });
};*/

// The search bar that triggers the search
export const SearchBar = () => {
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const { state } = useContext(AppContext);

  const { portfolio, articles, seminars, tools } = state || {};

  if (!portfolio || !articles || !seminars || !tools) {
    return null; // or some fallback UI
  }

  const handleSearchClick = (event) => {
    setSearchAnchorEl(event.currentTarget);
  };

  const handleSearchClose = () => {
    setSearchAnchorEl(null);
  };

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>

      <Popover
        open={Boolean(searchAnchorEl)}
        anchorEl={searchAnchorEl}
        onClose={handleSearchClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <TextField
          autoFocus
          placeholder="Search for an article..."
          onChange={(e) => handleSearch(e.target.value, setSearchResults, { portfolio, articles, seminars, tools })}
          InputProps={{
            startAdornment: (
              <InputLabel shrink={false} sx={{ color: "grey" }}>
                Search for an article...
              </InputLabel>
            ),
          }}
        />
      </Popover>
    </>
  );
};

// Search results component, to be implemented
export const SearchResults = () => {
  // You'll probably want to use searchResults from context here
  // and map over them to display each result
  // The implementation will depend on how you want to display results

  return <div>Search results...</div>;
};
