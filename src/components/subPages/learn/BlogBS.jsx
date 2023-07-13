import React, { useState, useContext, useEffect } from 'react';
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Requests from '../contact/Requests';
import { Link } from 'react-scroll';
import AppContext from '../../../contexts/AppContext';
import PinkButton from "../../reusable/PinkButton";

const UnderlinedTitle = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  marginBottom: theme.spacing(2),
}));

const categoryOptions = [
  "",
  "All",
  "Mould",
  "Insulation",
  "Building enclosure",
  "Gab Learns",
  "Building Science + Bullsh*t Seminars",
  "Videos",
];

const authorOptions = [
  "",
  "Any",
  "Shawn McIsaac",
  "James Powers",
  "Peter Raimondo",
  "Denise Martin",
  "Gab Davenport",
  "Angelika Gross",
];

const yearOptions = [
  "",
  "Any",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];
const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)", // Opaque
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000, // High z-index to ensure it's on top of all other elements
}));

export const BlogBS = () => {
  const navigate = useNavigate();
  const { state, api } = useContext(AppContext);
  const { scrollTo } = state;
  const { setScrollTo } = api;
  const { seminars, articles } = state;
  const [seminarItems, setSeminarItems] = useState([]);
  const [articleItems, setArticleItems] = useState([]);

  useEffect(() => {
    if (seminars) {
      setSeminarItems(seminars || []);
    }
    if (articles) {
      setArticleItems(articles || []);
    }
  }, [seminars, articles]);

  const customSearch = () => {
    let results = [];
    if (seminars) {
      seminars.forEach((item) => {
        results.push({ type: 'Seminar', ...item });
        results.push({ type: 'Blog Article', ...item });
      });
    }
    navigate('/search', { state: { results } });
  };

  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [keywords, setKeywords] = useState('');

  const [filters, setFilters] = useState({
    category: 'All',
    author: 'Any',
    year: 'Any',
    keywords: '',
  });

  const handleFilterApply = () => {
    navigate('/search', { state: { filters } });
    customSearch();
  };

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };
  const [overlayVisible, setOverlayVisible] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "24vh 64px 64px 64px",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          flex: "1",
          paddingRight: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <UnderlinedTitle variant="h3" gutterBottom>
            BLOG & BS
          </UnderlinedTitle>
          <Typography variant="body1" gutterBottom>
            These articles are a bit more editorial, opinionated, and
            off-the-cuff written by members of the team. They’re interesting and
            conversation-generating, but less definitive and polished.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }} gutterBottom>
            Are you looking for some thoughts and rants about a specific topic?
            Drop it below.
          </Typography>

          <PinkButton
            onClick={() => setOverlayVisible(true)}
            text={"I Would Like to Learn About..."}
          />
          {overlayVisible && (
            <Overlay>
              <Requests onClose={() => setOverlayVisible(false)} />
            </Overlay>
          )}
          <Box sx={{ marginTop: "16px" }}>
            <Link
              to="blog-articles"
              onClick={() => handleScroll("blog-articles")}
            >
              <PinkButton onClick={() => {}} text={"OPEN BLOG"} />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: "1", paddingLeft: "16px" }}>
  <Typography variant="h5" sx={{ textAlign: "right" }} gutterBottom>
    SEARCH & FILTER
  </Typography>
  <Grid container spacing={2} marginBottom="16px">
    <Grid item xs={12} sm={6}>
      <TextField 
        select 
        label="Category" 
        variant="outlined" 
        fullWidth 
        SelectProps={{ native: true }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#999' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiFormLabel-root': { color: '#999' },
          '& .Mui-focused': { color: 'white' },
        }}
      >
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField 
        select 
        label="Author" 
        variant="outlined" 
        fullWidth 
        SelectProps={{ native: true }}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#999' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiFormLabel-root': { color: '#999' },
          '& .Mui-focused': { color: 'white' },
        }}
      >
        {authorOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField 
        select 
        label="Time (Year)" 
        variant="outlined" 
        fullWidth 
        SelectProps={{ native: true }}
        value={year}
        onChange={(e) => setYear(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#999' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiFormLabel-root': { color: '#999' },
          '& .Mui-focused': { color: 'white' },
        }}
      >
        {yearOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
      <PinkButton onClick={handleFilterApply} text={"Apply Filter"} />
    </Grid>
  </Grid>
  <Box
    component="form"
    sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}
  >
    <TextField
      label="Search keywords"
      variant="outlined"
      fullWidth
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#999' },
          '&:hover fieldset': { borderColor: 'white' },
          '&.Mui-focused fieldset': { borderColor: 'white' },
        },
        '& .MuiInputBase-input': { color: 'white' },
        '& .MuiFormLabel-root': { color: '#999' },
        '& .Mui-focused': { color: 'white' },
        marginRight: "8px"
      }}
    />
    <IconButton type="submit" onClick={handleFilterApply}>
      <SearchIcon />
    </IconButton>
  </Box>
</Box>

      </Box>
  );
};
