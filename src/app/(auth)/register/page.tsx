"use client";
import * as React from "react";
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
import {  RegisterData, registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUser } from "./actions";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { MySnackbar } from "@/components/snackbar/my-snackbar";

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [error, setError] = React.useState<string | undefined>();
  const [isLoading, setIsLoading] = React.useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  const onsubmit = async (data: RegisterData) => {
    setIsLoading(async () => {
      const response = await RegisterUser({ RegisterData: data });
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
        {error && (
          <MySnackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={!!error}
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
                {error}
              </Alert>
            }
            autoHideDuration={6000}
          />
        )}
        <FormControl sx={{ width: "100%" }}> 
          <FormLabel htmlFor="username">Nombre de Usuario</FormLabel>
          <TextField
            error={!!errors.username?.message}
            helperText={errors.username?.message}
            id="username"
            type="username"
            placeholder="Nombre de Usuario"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            // name="email"
            {...register("username")}
            // color={emailError ? "error" : "primary"}
          />
        </FormControl>
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
        <FormControl>
          <FormLabel htmlFor="confirmPassword">Confirmar Contraseña</FormLabel>
          <TextField
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
            placeholder="••••••"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            // color={passwordError ? "error" : "primary"}
            {...register("confirmPassword")}
          />
        </FormControl>


        {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
        <Button type="submit" fullWidth variant="contained" disabled={isLoading}>
          Registrar
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
          Registrar con Google
        </Button>
        <Typography sx={{ textAlign: "center" }}>
            ¿Ya tienes una cuenta?{" "}
          <Link href="/login" variant="body2" sx={{ alignSelf: "center" }}>
            Iniciar Sesión
          </Link>
        </Typography>
      </Box>
    </>
  );
}
