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
import { loginAction } from "./actions";
import { useActionState, useEffect, useState, useTransition } from "react";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(loginAction, { error: undefined });
  const [error, setError] = useState<string | undefined>(state.error);


  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      setError(undefined);
      formAction(formData); // Llama al Server Action
    });
  };


  const {
    register,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log("state.error", state.error)
  console.log("error", error)

  useEffect(() => {
    if (state.error) setError(state.error)
  }, [state.error])
  return (
    <>

      <Box
        component="form"
        action={handleSubmit}
        // onSubmit={handleSubmit((data) => onsubmit(data))}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        {error && (
          <MySnackbarAlert
            errorMessage={error}
            setError={setError}
            variant="error"
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
        <Button type="submit" fullWidth variant="contained" disabled={isPending}>
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
