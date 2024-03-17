import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  styled,
  IconButton,
  Grid,
  DialogActions,
  Button,
} from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import RHFormTextField from "@crema/components/ReactHooksFormFields/RHFormTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userFormValidationschema } from "@crema/helpers/Validations";
import RHFormPhoneField from "@crema/components/ReactHooksFormFields/RHFormPhoneField";
import RHFormSelectInputField from "@crema/components/ReactHooksFormFields/RHFormSelectField";
import { ROLE_IDS } from "@crema/constants/AppConst";
import { useAddUserMutation } from "../../redux/api/userApi";

const StyledMasterUserForm = styled(Dialog)(({ theme }) => ({
  ".MuiDialog-paperWidthXs": {
    position: "relative",
  },
  "& .__close_icon": {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

interface MasterUserFormProps {
  open: boolean;
  onClose: () => void;
}

const MasterUserForm = ({ open, onClose }: MasterUserFormProps) => {
  // Redux
  const [addUser, { isLoading }] = useAddUserMutation({});
  // Hooks Form
  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(userFormValidationschema),
  });

  // Handle Sumbit
  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      status: data?.status === "true" ? true : false,
      roleId: Number(data.roleId),
      byUserId: 0,
      userType: 0,
    };
    addUser({
      payload: payload,
    })
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        alert("Something went to wrong pls try again...");
      });
  };

  const handleClose = () => {
    reset({});
    onClose();
  };

  return (
    <StyledMasterUserForm maxWidth="sm" open={open} keepMounted>
      <DialogTitle>
        <Typography variant="h2">Add a new user</Typography>
      </DialogTitle>
      <DialogContent>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <RHFormTextField
                defaultValue=""
                id="input-user-name"
                control={control}
                name="userName"
                label="User Name"
                textFieldProps={{
                  fullWidth: true,
                  size: "small",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <RHFormTextField
                defaultValue=""
                id="input-password"
                control={control}
                name="password"
                label="Password"
                textFieldProps={{
                  fullWidth: true,
                  size: "small",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <RHFormTextField
                defaultValue=""
                id="input-email"
                control={control}
                name="email"
                label="Email"
                textFieldProps={{
                  fullWidth: true,
                  size: "small",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <RHFormPhoneField
                control={control}
                name="phone"
                label="Phone"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <RHFormSelectInputField
                id="input-select-role"
                control={control}
                name="roleId"
                label="Role"
                targetValue="value"
                labelValue="value"
                size="small"
                defaultValue=""
                options={ROLE_IDS}
              />
            </Grid>
            <Grid item xs={6}>
              <RHFormSelectInputField
                id="input-status"
                control={control}
                name="status"
                label="Status"
                targetValue="value"
                labelValue="name"
                size="small"
                defaultValue=""
                options={[
                  { name: "Yes", value: true },
                  { name: "No", value: false },
                ]}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={isLoading}
          size="small"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogActions>
      <Box component="div" className="__close_icon" onClick={handleClose}>
        <IconButton>
          <IoCloseSharp />
        </IconButton>
      </Box>
    </StyledMasterUserForm>
  );
};

export default MasterUserForm;
