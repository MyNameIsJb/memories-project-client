import { styled } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const AppBarComponent = styled(AppBar)({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  flexWrap: "wrap",
  minWidth: "392",
});

export const Heading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5em",
  },
  color: "rgba(0,183,255, 1)",
  textDecoration: "none",
}));

export const Image = styled("img")(({ theme }) => ({
  marginLeft: "15px",
}));

export const ToolbarComponent = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  // width: "400px",
});

export const Profile = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  // width: "400px",
});

export const Username = styled(Typography)({
  display: "flex",
  alignItems: "center",
  padding: "1em 2em",
});

export const BrandContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Purple = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));

export const ButtonComponent = styled(Button)({
  width: "100%",
});

export const MenuItemComponent = styled(MenuItem)({
  padding: 0,
  margin: "0.5em 1em",
});
