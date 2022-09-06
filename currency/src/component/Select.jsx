import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MUISelect from "@mui/material/Select";

const Select = ({ id, label, value, onChange, items }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="select">
      <select
      className="w-100"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder="Select"
      >
        {items?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
