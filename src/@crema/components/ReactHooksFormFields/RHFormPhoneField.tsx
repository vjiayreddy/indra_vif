import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import FormHelperText from "@mui/material/FormHelperText";

interface RHFormPhoneFieldProps extends MuiTelInputProps {
  name: string;
  defaultValue?: string;
  label?: string;
  size: "small" | "medium";
  control: Control<FieldValues, object> | any;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
}

const RHFormPhoneField = ({
  name,
  control,
  rules,
  defaultValue,
  size,
  label,
  ...props
}: RHFormPhoneFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <>
            <MuiTelInput
              flagSize="small"
              size={size}
              label={label}
              variant="outlined"
              style={{ width: "100%" }}
              forceCallingCode
              defaultCountry="IN"
              value={value}
              onChange={onChange}
              error={fieldState.invalid}
              InputProps={{
                fullWidth: true,
              }}
              {...props}
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

export default RHFormPhoneField;
