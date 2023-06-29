import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyledDivider from "./StyledDivider";

import { useNavigate } from "react-router-dom";
import AppContext from "../../contexts/AppContext";

export const PageView = (props) => {
  const { pageConfig } = props;

  const { headerPos, title, columns, custom } = pageConfig;

  const makeColumn = (col) => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh-160px)",
        alignItems: "center",
        justifyContent: "flex-end",
        // alignSelf: 'flex-end',
        marginLeft: "64px",
        marginRight: "64px",
        // paddingTop: '24vh',
        marginTop: '24vh',
        // border: '1px solid yellow',
        // marginBottom: '-160px',
      }}
    >
      <Box
        sx={{
          width: "45%",
          height: "20%",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        //   border: "1px solid green",
          justifyContent: "flex-end",
          alignSelf: headerPos === "left" ? "flex-start" : "flex-end",
          gap: "16px",
        }}
      >
        <h1>{title.toUpperCase()}</h1>
        <StyledDivider />
      </Box>
      {columns ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "32px",
            // flexGrow: .7,
          }}
        >
          {columns.map((col, index) => (
            <Box
              sx={{
                width: columns.length === 2 ? "45%" : "30%",
                // border: "3px solid red",
                maxHeight: "70%",
                height: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "32px",
              }}
            >
              {/* {makeColumn(col)} */}
              {col}
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ height: "100%", width: "100%", flexGrow: 1 }}>{custom}</Box>
      )}
    </Box>
  );
};

export default PageView;