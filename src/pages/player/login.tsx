//import styles from '@/styles/Report.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

//sxでcssをあてる
export default function Login() {
  return (
    <>
    <Container maxWidth="md" sx={{p:10}}>
      <Box
      sx={{
        width:500,
      }}
      >
      <TextField
          id="outlined-multiline-static"
          label="ID"
          fullWidth
          defaultValue=""
          sx={{mx:1 ,
            mt:10,
            mb:3,
            ml:24
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="パスワード"
          fullWidth
          defaultValue=""
          sx={{mx:1,
           ml:24
          }}
        />
        </Box>
    <br/>
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width:800,
        mb:7
      }}
    > </Box>

      <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        width:800,
      }}>
          <Button variant="contained"  sx={{mx:10}}  href="#outlined-buttons">ログイン</Button>

      </Box>
      </Container>
    </>
  )
}
