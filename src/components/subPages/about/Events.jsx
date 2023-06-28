import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import StyledDivider from "../../reusable/StyledDivider";

export const Events = () => {
  const navigate = useNavigate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  const events = [
    {
      date: "02/05/2023",
      eventName: "Archipro Expo @ The Wharf",
      description:
        "register here and meet our team there (Peter will be MC all day!)",
    },
    {
      date: "04/05/2023",
      eventName: "Oculus Team Lunch",
      description: "we will be out of office after 12pm",
    },
    {
      date: "16/05/2023",
      eventName: "",
      description: "New resource on Homestar V5 will be published",
    },
    {
      date: "18/05/2023",
      eventName: "02-03pm:",
      description:
        "Oculus team 100 metre sprint challenge - we will be out of office after 2pm",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "flex-end",
        justifyContent: "center",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "55%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        EVENTS picture goes here
      </div>
      <div
        style={{
          width: "45%",
          height: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          gap: "32px",
        }}
      >
        <h1 style={{ alignSelf: "flex-end" }}>WHAT'S ON THIS MONTH?</h1>
        <StyledDivider />
        <h2 style={{ alignSelf: "flex-end" }}>
          {months[date.getMonth()]} {date.getFullYear()}
        </h2>
        {events.map((event) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <p>{event.date}</p>
              <p>
                {" "}
                {event.eventName} - {event.description}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
