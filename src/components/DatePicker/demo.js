import React, { useState } from "react";
import DatePicker from "src/components/DatePicker";

const DatePickerDemo = () => {
  const [date, setDate] = useState(null);
  return (
    <div>
      <DatePicker value={date} onChange={(d) => setDate(d)}></DatePicker>
    </div>
  );
};

export default DatePickerDemo;
