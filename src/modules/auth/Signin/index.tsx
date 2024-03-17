import React, { useState } from "react";
import AppAnimate from "@crema/components/AppAnimate";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Alert, Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import RHFormTextField from "@crema/components/ReactHooksFormFields/RHFormTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidationschema } from "@crema/helpers/Validations";
import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation";
import { APP_ROUTES } from "@crema/constants/AppRoutes";

const SigninModule = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormValidationschema),
  });

  // handleLogin
  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (response?.error && !response?.ok) {
      setAuthError(response?.error);
    }else{
      router.push(APP_ROUTES.home);
    }
  };

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box
        sx={{
          pb: 6,
          py: { xl: 8 },
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 576,
            width: "100%",
            textAlign: "center",
            padding: { xs: 8, lg: 12, xl: "48px 64px" },
            overflow: "hidden",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mb: 4,
                ".logo": {
                  height: 60,
                },
              }}
            >
              <Typography variant="h1">Admin Login</Typography>
            </Box>
          </Box>
          {authError && (
            <Box mb={4}>
              <Alert color="error">{authError}</Alert>
            </Box>
          )}

          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
            }}
          >
            <RHFormTextField
              id="email"
              control={control}
              defaultValue=""
              textFieldProps={{
                placeholder: "",
                variant: "outlined",
                sx: {
                  width: "100%",
                },
              }}
              label={"Email"}
              name="emailId"
            />
          </Box>

          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
            }}
          >
            <RHFormTextField
              id="password"
              control={control}
              defaultValue=""
              textFieldProps={{
                placeholder: "",
                variant: "outlined",
                sx: {
                  width: "100%",
                },
              }}
              label={"Password"}
              name="password"
            />
          </Box>

          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { sm: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  ml: -3,
                }}
              >
                <Checkbox />
              </Box>
              <Box component="span" sx={{ fontSize: 14 }}>
                <IntlMessages id="common.rememberMe" />
              </Box>
            </Box>
            <Box
              component="span"
              sx={{
                ml: { sm: "auto" },
                color: "primary.main",
                mt: { xs: 2, sm: 0 },
                fontWeight: Fonts.BOLD,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              <IntlMessages id="common.forgetPassword" />
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            //disabled={isSubmitting}
            sx={{
              width: "100%",
              height: 44,
            }}
          >
            <IntlMessages id="common.login" />
          </Button>
          <Box
            sx={{
              mt: { xs: 3, xl: 4 },
              mb: { xs: 2, xl: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { sm: "center" },
              alignItems: { sm: "center" },
            }}
          ></Box>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default SigninModule;
