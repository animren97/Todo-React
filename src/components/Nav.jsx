import React from "react";

const Nav = () => {
  var showDate = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
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
  var displayDate = `
  ${weekday[showDate.getDay()]},  
  ${month[showDate.getMonth()]} ${showDate.getDate()}`;
  console.log(displayDate);

  return (
    <div className="navbar">
      <h2 className="displayDate">{displayDate}</h2>
    </div>
  );
};

export default Nav;
