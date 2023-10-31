import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div class="datetime">
      <div class="datetime-text datetime-date">
        {" "}
        Date :{" "}
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
      <div class="datetime-text datetime-time">
        {" "}
        Time : {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default DateTime;
