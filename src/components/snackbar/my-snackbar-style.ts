import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

export const MySnackbar = styled(Snackbar)(({ theme }) => ({
  padding: theme.spacing(0),
  // backgroundColor: theme.palette.background.paper,
  "& .MuiSnackbarContent-root": {
    padding: theme.spacing(0),
    with: "100%",
    "& .MuiSnackbarContent-message": {
      padding: theme.spacing(0),
      width: "100%",
    },
  },
}));
