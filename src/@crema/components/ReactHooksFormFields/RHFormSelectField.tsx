import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

interface RHFormSelectInputFieldProps {
  id: string;
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  label: string;
  defaultValue: string;
  options: any[];
  selectFilesProps?: SelectProps;
  targetValue: string;
  labelValue: string;
  size?: "small" | "medium";
  readOnly?: boolean;
}

const RHFormSelectInputField = ({
  id,
  size = "small",
  name,
  options,
  control,
  rules,
  label,
  targetValue,
  defaultValue,
  labelValue: labelValue,
  selectFilesProps,
  readOnly,
}: RHFormSelectInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <FormControl sx={{ minWidth: "100%" }} size={size}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
              readOnly={readOnly}
              {...field}
              fullWidth={true}
              labelId={id}
              error={!!fieldState?.error}
              id={id}
              label={label}
              {...selectFilesProps}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option[targetValue]}>
                  {option[labelValue]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {fieldState?.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    ></Controller>
  );
};

export default RHFormSelectInputField;