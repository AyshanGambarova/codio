import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const Input = ({ id, label, value, onChange, ...rest }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <input
      className="w-100"
        type="text"
        id={id}
        label={label}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </>
  );
};

export default Input;
