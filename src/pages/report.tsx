//import styles from '@/styles/Report.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//sxでcssをあてる
export default function Home() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <>
    <Container maxWidth="md" sx={{p:4}}>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">今日の調子</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(even, newValue) => {
          setValue(newValue);
          <Rating name="no-value" value={null} />
        }}
      />
    </Box>
    <br/>
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{width:800}}
    >
        <TextField
          id="outlined-multiline-static"
          label="良かった所・悪かった所・質問"
          multiline
          rows={6}
          fullWidth
          defaultValue=""
        />
        <br/>
        <br/>

        <TextField
          id="outlined-multiline-static"
          label="監督・コーチからメッセージ"
          multiline
          rows={4}
          fullWidth
          defaultValue=""
        />
          <Button variant="outlined" sx={{m:10}}>下書き保存</Button>
          <Button variant="outlined"  href="#outlined-buttons">
        送信
      </Button>
      </Box>
      </Container>
    </>
  )
}
