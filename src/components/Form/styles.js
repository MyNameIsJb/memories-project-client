import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const PaperComponent = styled(Paper)({
  padding: 20,
});

export const FormComponent = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const FileInputComponent = styled("div")({
  width: "97%",
  margin: "10px 0",
});
