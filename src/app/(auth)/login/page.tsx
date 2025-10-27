"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Iconify } from "@/components/icons/icon";
import { ConteinerGrad } from "@/app/components/conteiner-grad";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, SignInContainer } from "../components/auth-style";
import { loginUser } from "./actions";
import { on } from "events";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { MySnackbar } from "@/components/snackbar/my-snackbar";

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [error, setError] = React.useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (data: LoginData) => {
    console.log(data);
    const response = await loginUser({ LoginData: data });
    setError(response.error);
  };

  return (
    <>
      <ConteinerGrad
        component="main"
        maxWidth={"xl"}
        gradientDirection="to top right"
        sx={{ textAlign: "start" }}
      >
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit((data) => onsubmit(data))}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              {error && (
                <MySnackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  open={!!error}
                  onClose={() => setError(undefined)}
                  sx={{ width: "100%" }}
                  message={
                    <Alert
                      sx={{
                        width:""
                      }}
                      action={
                        <IconButton
                          size="small"
                          aria-label="close"
                          color="inherit"
                          onClick={() => setError(undefined)}
                        >
                          <Iconify icon="eva:close-fill" />
                        </IconButton>
                      }
                      severity="error"
                    >
                      {error}
                    </Alert>
                  }
                  // autoHideDuration={6000}
                />
              )}
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // name="email"
                  {...register("email")}
                  // color={emailError ? "error" : "primary"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  // color={passwordError ? "error" : "primary"}
                  {...register("password")}
                />
              </FormControl>

              {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
              <Button type="submit" fullWidth variant="contained">
                Iniciar Sesión
              </Button>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => alert("Sign in with Google")}
                startIcon={<Iconify icon="logos:google-icon" />}
              >
                Iniciar Sesión con Google
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  Registrate
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignInContainer>
      </ConteinerGrad>
    </>
  );
}
