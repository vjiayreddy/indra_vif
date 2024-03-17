import React from "react";
import Box from "@mui/material/Box";

type Props = {
  children: any;
};

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        position: "relative",
        height: "100vh",
        backgroundSize: "cover",

        "& .scrollbar-container": {
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
        "& .main-content-view": {
          padding: 20,
        },
        "& .footer": {
          marginRight: 0,
          marginLeft: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};
export default AuthLayout;
