import { styled } from "@mui/material/styles";
import { Paper, Avatar, Button } from "@mui/material";

export const PaperComponent = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const AvatarComponent = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const Form = styled("form")(({ theme }) => ({
  width: "100%", // Fix IE 11 issue.
  marginTop: theme.spacing(3),
}));

export const ButtonComponent = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));
