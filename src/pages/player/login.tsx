// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { traceDeprecation } from "process";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'
import {auth} from '@/utils/firebase'
import { red } from '@mui/material/colors';
import Image from 'next/image';
import Alert from '@mui/material/Alert';
import Link from 'next/link'
import Snackbar from '@mui/material/Snackbar';


//sxでcssをあてる
export default function Login() {
  const [mallPassOpen,setMallPassOpen]=useState(false);
  const [open, setOpen] = useState(false);
  const [mallOpen, setMallOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setMallPassOpen(false);
    setPassOpen(false);
    setMallOpen(false);
    setOpen(false);
  };



  const login =async () => {
    if(email===''){//メールアドレスが空白の場合
      setMallOpen(true)
    }if(password===''){
      setPassOpen(true)
    }//パスワードの空白の場合
    await signInWithEmailAndPassword (auth,email,password)
    .then(async()=>{//うまく行った場合
      setOpen(true)
      await router.push('/player/calendar')//登録後カレンダーにとぶ
    })
    .catch((error)=>{//失敗した場合
    setMallPassOpen(true)
    // alert('ログイン失敗しましたメールアドレスとパスワードを確認してください')
    })
  }
  const isButtonDisabled = email === '' || password === '';//メールアドレスとパスワードを入力しないとログインボタンは押せない

  return (
    <>
    <Snackbar open={open} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          ログインに成功しました
        </Alert>
      </Snackbar>
      <Snackbar open={mallOpen} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          メールアドレスを入力してください
        </Alert>
      </Snackbar>
      <Snackbar open={passOpen} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          パスワードを入力してください
        </Alert>
      </Snackbar>
      <Snackbar open={mallPassOpen} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        ログイン失敗しましたメールアドレスとパスワードを確認してください
        </Alert>
      </Snackbar>


      <Container maxWidth="md" sx={{ p: 10,}}>
      <Image src="/player_login.jpg" alt="" layout="fill" objectFit="cover" style={{ filter: 'brightness(90%)',backgroundColor: 'white',opacity:0.8 }} />

        <Box>
          <p style={{ ...styles.centerText, zIndex: 1 }}>選手ログイン</p>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <TextField
            type="email"
            id="outlined-multiline-static"
            label="メールアドレス"
            fullWidth
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={{
              mb: 3,
              width: 400,
              backgroundColor: 'white',
              opacity:0.7,
              borderRadius:2
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <TextField
            type="password"//入力文字を隠す機能
            id="outlined-multiline-static"
            label="パスワード"
            fullWidth
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)//
            }}
            sx={{
              width: 400,
              backgroundColor: 'white',
              opacity:0.7,
              borderRadius:2
            }}
          />
        </Box>
        <br />
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: 800,
            mb: 7,
          }}
        >
          {" "}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" href="#outlined-buttons"disabled={isButtonDisabled} onClick={login} sx={{p:2,borderRadius:4}}>
            ログイン
          </Button>
        </Box>
      </Container>
    </>
  );
}
const styles = {
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
    fontStyle: 'italic',
    textShadow: '#fff 2px 0, #fff -2px 0, #fff 0 -2px, #fff 0 2px, #fff 2px 2px, #fff -2px 2px, #fff 2px -2px, #fff -2px -2px, #fff 1px 2px, #fff -1px 2px, #fff 1px -2px, #fff -1px -2px, #fff 2px 1px, #fff -2px 1px, #fff 2px -1px, #fff -2px -1px, rgba(0, 0, 0, .5) 3px 3px 3px',
    position: 'relative',
    zIndex: 1,
  },
};
