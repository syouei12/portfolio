//import styles from '@/styles/Report.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

//sxでcssをあてる
export default function Login() {
  return (
    <>
      <p style={{ fontSize: "30px", textAlign: "center" }}>管理者</p>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="メールアドレス"
            sx={{
              justifyContent: "center",
              mb: 5,
              width:400,
            }}
          />
           </Box>
           <Box
           sx={{
            textAlign: "center",
          }}
           >
           <TextField
            id="outlined-multiline-static"
            label="パスワード"
            defaultValue=""
            sx={{
              justifyContent: "center",
              mb: 5,
              width:400,
            }}
          />
           </Box>
        <br />
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            justifyContent: "center",
          }}
        >
          {" "}
        </Box>

        <Box
        sx={{ display: "flex",
        justifyContent: "center" }}
        >
          <Button variant="contained"  href="#outlined-buttons">
            ログイン
          </Button>
        </Box>
      </Container>
    </>
  );
}
