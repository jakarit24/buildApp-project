import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Toole_Calendar = () => {
  const [value, onChange] = useState(new Date());

  const [date, setDate] = useState(new Date());

  return (
    <div class="zone-calendar">
        <div class="box-calendar pt-8px pb-8px">
      <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};
export default Toole_Calendar;
