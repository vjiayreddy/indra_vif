"use client";
import React, { useState } from "react";
import { useGetAllUsersQuery } from "../../../../../redux/api/userApi";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import UsersList from "../../../../../modules/Admin/Master/Users/UsersList";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuImport } from "react-icons/lu";
import { BiExport } from "react-icons/bi";
import MasterUserForm from "../../../../../modules/Forms/MasterUserForm";
import fs from "fs";
import saveAs from "file-save";

const StyledMainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  "& .header": {
    minHeight: 70,
    maxHeight: 70,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    padding: "20px",
    "& .__search_wrapper": {
      flexGrow: 1,
    },
    "& .__actions_wrapper": {},
  },
  "& .content": {
    flexGrow: 1,
    overflow: "hidden",
    padding: "0px",
  },
}));

const UserPage = () => {
  const { isFetching, isLoading, data } = useGetAllUsersQuery({
    refetchOnMountOrArgChange: true,
  });
  const [open, setOpen] = useState<boolean>(false);

  // Handle Open
  const handleClickOpen = () => {
    setOpen(!open);
  };

  // Export To CSV

  const exportData = () => {
    const header = ["userId", "userName", "emailId", "mobileNo"];
    const userData: any[] = data?.reponseData as any[];
    const csv = [
      header.join(","), // header row first
      ...userData.map((user) => [user.userId, user.userName, user.emailId,user.mobileNo]),
    ].join("\r\n");
    var pom = document.createElement("a");
    var _data = new Blob([csv], { type: "text/csv" });
    var url = URL.createObjectURL(_data);
    pom.href = url;
    pom.setAttribute("download", "foo.csv");
    pom.click();
  };

  return (
    <StyledMainWrapper>
      <Box component="div" className="header">
        <Box>
          <Typography fontWeight={800} variant="h3">
            Users
          </Typography>
        </Box>
        <Box component="div" className="__search_wrapper"></Box>
        <Box component="div" className="__actions_wrapper">
          <Grid container spacing={2}>
            <Grid item>
              <Button
                size="small"
                onClick={handleClickOpen}
                startIcon={<IoIosAddCircleOutline />}
                variant="contained"
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={exportData}
                startIcon={<BiExport />}
              >
                Export
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                color="inherit"
                startIcon={<LuImport />}
                variant="outlined"
              >
                Import
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box component="div" className="content">
        <UsersList
          data={data?.reponseData || []}
          isLoading={isLoading || isFetching}
        />
      </Box>
      <MasterUserForm onClose={handleClickOpen} open={open} />
    </StyledMainWrapper>
  );
};

export default UserPage;
