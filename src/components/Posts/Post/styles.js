import { styled } from "@mui/material/styles";
import { CardMedia, Card, Typography, CardActions } from "@mui/material";

export const CardMediaComponent = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const CardComponent = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
});

export const Overlay = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const Overlay2 = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const Title = styled(Typography)({
  padding: "0 16px",
});

export const CardActionsComponent = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
