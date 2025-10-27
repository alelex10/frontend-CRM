"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Iconify } from "@/components/icons/icon";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "./actions";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { MySnackbar } from "@/components/snackbar/my-snackbar";
import { useState, useTransition } from "react";

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [errorMessage, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useTransition();
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
    setIsLoading(async () => {
      const response = await loginUser({ LoginData: data });
      setError(response?.message);
    });
    
  };

  return (
    <>
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
        {errorMessage && (
          <MySnackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={!!errorMessage}
            onClose={() => setError(undefined)}
            sx={{ width: "100%" }}
            message={
              <Alert
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
                {errorMessage}
              </Alert>
            }
            autoHideDuration={6000}
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
        <Button type="submit" fullWidth variant="contained" disabled={isLoading}>
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
          <Link href="/register" variant="body2" sx={{ alignSelf: "center" }}>
            Registrate
          </Link>
        </Typography>
      </Box>
    </>
  );
}
