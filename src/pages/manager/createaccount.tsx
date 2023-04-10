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
      <Container maxWidth="md" sx={{ p: 4 }}>
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
              mb: 3,
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
            label="ユーザー名"
            sx={{
              justifyContent: "center",
              mb: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="パスワード"
            defaultValue=""
          />
        </Box>
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

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" href="#outlined-buttons">
            作成
          </Button>
        </Box>
      </Container>
    </>
  );
}
