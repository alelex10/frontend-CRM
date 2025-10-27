"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ConteinerGrad } from "../components/conteiner-grad";
import { Card, SignInContainer } from "./components/auth-style";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
  route: string;
}) {
  const route = usePathname();
  
  return (
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
            {route === "/login" ? "Iniciar Sesión" : "Registro"}
          </Typography>
          {children}
        </Card>
      </SignInContainer>
    </ConteinerGrad>
  );
}
