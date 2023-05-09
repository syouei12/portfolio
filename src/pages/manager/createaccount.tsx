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
      <Container maxWidth="md" sx={{ p: 7 }}>
        <Box
          sx={{
            display:"flex",
            justifyContent: "center",
            mb:9,

          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="ユーザー名"
            sx={{
                mr:4,
              }}
          />
          <TextField
            id="outlined-multiline-static"
            label="パスワード"
            sx={{
                mr:4,
              }}
          />
          <Button variant="contained" href="#outlined-buttons"
          sx={{
            p:2,
          }}
          >
            削除
          </Button>
        </Box>
        <Box
          component="form"
          noValidate
           autoComplete="off"
         >
          {" "}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" href="#outlined-buttons">
            アカウント作成
          </Button>
        </Box>
      </Container>
    </>
  );
}
