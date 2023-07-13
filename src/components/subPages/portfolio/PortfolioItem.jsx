import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PortfolioItemDetails from "./PortfolioItemDetails";
import AppContext from "../../../contexts/AppContext"; // replace YOUR_CONTEXT

export const PortfolioItem = () => {
  const [itemData, setItemData] = useState(null);
  const { itemId } = useParams(); // Get the item ID from the URL
  // Context
  const { state } = useContext(AppContext); // replace YOUR_CONTEXT
  const { portfolio } = state;
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    if (portfolio) {
      setPortfolioItems(portfolio || []);
    }
  }, [portfolio]);

  useEffect(() => {
    // Find the specific item by its id from the context data
    const item = portfolioItems.find((item) => item.title === itemId);
    if (item) {
      setItemData(item);
    }
  }, [itemId, portfolioItems]); // Rerun this effect when the item ID or portfolioItems array changes

  return itemData ? (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      // height: "auto",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "24vh 64px 5vh 64px",
      boxSizing: "border-box",
      scrollSnapAlign: 'start',
      // gap: '64px',
      // scrollSnapType: "y mandatory",
    }}
  >
    <PortfolioItemDetails item={itemData} />
    </div>
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default PortfolioItem;
