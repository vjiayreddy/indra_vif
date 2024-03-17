import React from "react";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fonts } from "@crema/constants/AppEnums";
import { useRouter } from "next/navigation";
import { orange } from "@mui/material/colors";
import AppLoader from "../../../AppLoader";
import { useSession, signOut } from "next-auth/react";

type UserInfoProps = {
  color?: string;
};

const UserInfo: React.FC<UserInfoProps> = ({ color = "text.secondary" }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!session) {
    return <AppLoader />;
  }

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          py: 3,
          px: 3,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        className="user-info-view"
      >
        <Box sx={{ py: 0.5 }}>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              fontSize: 24,
              backgroundColor: orange[500],
            }}
            src={"assets/user/admin.png"}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "calc(100% - 62px)", xl: "calc(100% - 72px)" },
            ml: 4,
            color: color,
          }}
          className="user-info"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                mb: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: 16,
                fontWeight: Fonts.MEDIUM,
                color: "inherit",
              }}
              component="span"
            >
              {session?.user?.userName}
            </Box>
            <Box
              sx={{
                ml: 3,
                color: "inherit",
                display: "flex",
              }}
            >
              <ExpandMoreIcon />
            </Box>
          </Box>
          <Box
            sx={{
              mt: -0.5,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "inherit",
            }}
          >
            {session.user.email}
          </Box>
        </Box>
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/account/my-profile");
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserInfo;
