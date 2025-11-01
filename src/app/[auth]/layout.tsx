import CssBaseline from "@mui/material/CssBaseline";
import { ConteinerGrad } from "../components/conteiner-grad";
import { Card, SignInContainer } from "./components/auth-style";
import Typography from "@mui/material/Typography";
import LoginPage from "./login/login-page";
import RegisterPage from "./register/register-page";

interface Props {
  params: Promise<{ auth: string }>;
}

export default async function LayoutAuth({ params, }: Props) {
  const { auth } = await params;
  
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
            { auth == "login" ? "Iniciar Sesión" : "Registrarse" }
          </Typography>
            { auth == "login" ? <LoginPage /> : <RegisterPage/> }
        </Card>
      </SignInContainer>
    </ConteinerGrad>
  );
}
