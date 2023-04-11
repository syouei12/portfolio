//import styles from '@/styles/Report.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

//sxでcssをあてる
export default function Login() {
  const sxTextField = {
    justifyContent: "center",
    mb: 3,
    width: 400,
  };
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
            type="email"
            label="メールアドレス"
            sx={sxTextField}
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
            sx={sxTextField}
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
            type="password"
            defaultValue=""
            sx={sxTextField}
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
          <Button
            variant="contained"
            href="#outlined-buttons"
            sx={{ width: 90 }}
          >
            作成
          </Button>
        </Box>
      </Container>
    </>
  );
}
