import { Paper, TextField } from "@mui/material";

export default function Form() {
  return (
    <div className="flex justify-center content-center items-center size-full">
      <Paper elevation={3}>
        <TextField variant="filled" label="UserName" />
      </Paper>
    </div>
  );
}
