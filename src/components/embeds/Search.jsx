import React, { useState, useContext } from "react";
import {
  TextField,
  InputLabel,
  IconButton,
  Popover,
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Divider 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send"; // Add this at the top with your other imports
import AppContext from "../../contexts/AppContext";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate

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
  const [searchValue, setSearchValue] = useState(''); // New state for the TextField value
  const { state } = useContext(AppContext);
  const navigate = useNavigate(); // Using useNavigate from react-router-dom v6

  const { portfolio, articles, seminars, tools } = state || {};

  const handleSearchClick = (event) => {
    setSearchAnchorEl(event.currentTarget);
  };

  const handleSearchClose = () => {
    setSearchAnchorEl(null);
  };

  const handleSearch = (query) => { // Removed setSearchResults from function parameters
    let results = [];
  
    const categoryToType = {
      portfolio: 'Portfolio Item',
      articles: 'Blog Article',
      seminars: 'Seminar',
      tools: 'Tool/Resource'
    }
  
    if(portfolio || articles || seminars || tools) {
      [portfolio, articles, seminars, tools].forEach((items, index) => {
        const category = ['portfolio', 'articles', 'seminars', 'tools'][index];
        if(items && Array.isArray(items)) {
          items.forEach((item) => {
            if (
              item.title.toLowerCase().includes(query.toLowerCase()) || 
              (item.abstract && item.abstract.toLowerCase().includes(query.toLowerCase()))
            ) {
              results.push({ type: categoryToType[category], category, ...item });
            }
          });
        }
      });
    }
    setSearchResults(results);
    navigate('/search', { state: { results } });
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
          value={searchValue} // Set the value prop to the searchValue state
          inputProps={{ style: { color: 'black' } }}
          InputLabelProps={{ style: { color: 'grey' } }}
          onChange={(e) => setSearchValue(e.target.value)} // Only set the searchValue state on change
          onKeyPress={(e) => { if(e.key === 'Enter') handleSearch(searchValue) }} // Pass searchValue to handleSearch
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => handleSearch(searchValue)} // Pass searchValue to handleSearch
              >
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Popover>
    </>
  );
};


// Search results component
export const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const filters = location.state?.filters || {};
  const navigate = useNavigate();
  const filteredResults = results.filter(result => 
    (filters.category === 'All' || result.category === filters.category) && 
    (filters.author === 'Any' || result.author === filters.author) && 
    (filters.year === 'Any' || result.year === filters.year) && 
    (filters.keywords === '' || result.keywords.includes(filters.keywords))
  );
  const typeToPath = {
    'Portfolio Item': '/portfolio',
    'Blog Article': '/learn/blog',
    'Seminar': '/learn/seminars',
    'Tool/Resource': '/learn/tools-resources'
  };
  return (
    <List>
      {filteredResults.map((result, index) => (
        <div key={index}>
          <ListItem button onClick={() => navigate(`${typeToPath[result.type]}/${result.title}`)}>
            <ListItemText
              primary={<Typography variant="h6">{result.title}</Typography>}
            />
          </ListItem>
          <p>{result.abstract}</p>
          <p>Category: {result.category}</p>
          <p>Type: {result.type}</p> {/* display the type here */}
          <Divider />
        </div>
      ))}
    </List>
  );
};

