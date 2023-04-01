//import styles from '@/styles/Report.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
//sxでcssをあてる
export default function Home() {
  return (
    <>
    <Container maxWidth="md" sx={{p:2}}>
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{width:800}}
    >
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          fullWidth
          defaultValue="Default Value"
        />
      </Box>
      </Container>
    </>
  )
}
