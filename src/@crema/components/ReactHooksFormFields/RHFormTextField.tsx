import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";

interface RHFormTextFieldProps {
  id: string;
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  label: string;
  defaultValue: string;
  textFieldProps: TextFieldProps;
}

const RHFormTextField = ({
  id,
  name,
  control,
  rules,
  label,
  defaultValue,
  textFieldProps,
}: RHFormTextFieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <>
            <TextField
              {...field}
              id={id}
              variant="outlined"
              label={label}
              error={!!fieldState?.error}
              margin="none"
              fullWidth
              {...textFieldProps}
            />
            {!!fieldState?.error && (
              <FormHelperText sx={{ marginLeft: 0 }} error={true}>
                {fieldState?.error?.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
};

export default RHFormTextField;
