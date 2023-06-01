// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'
import {auth} from '@/utils/firebase'
import Image from 'next/image'



//sxでcssをあてる
export default function Login() {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const login =async () => {
    if(email===''){//メールアドレスが空白の場合
    alert('メールアドレスを入力してください')
    }if(password===''){
      alert('パスワードを入力してください')
    }//パスワードの空白の場合
    await signInWithEmailAndPassword (auth,email,password)
    .then(async()=>{//うまく行った場合
      alert('ログインに成功しました')
      await router.push('/manager/calendar')//登録後カレンダーにとぶ
    })
    .catch((error)=>{//失敗した場合
    alert('ログイン失敗しました\nメールアドレスとパスワードを確認してください')
    })
  }
  return (
    <>
      <Container maxWidth="md" sx={{ p: 10,}}>
      <Image src="/managerlogin.jpg" alt="" layout="fill" objectFit="cover" style={{ filter: 'brightness(90%)' }} />

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box>
        <p style={{ ...styles.centerText, zIndex: 1 }}>MANAGER</p>

        </Box>
          <TextField
            id="outlined-multiline-static"
            label="メールアドレス"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={{
              justifyContent: "center",
              mb: 5,
              width:400,
              backgroundColor: '#f5f5f5'
            }}
          />
          </Box>
          <Box
          sx={{
            textAlign: "center",
          }}
          >
          <TextField
            type="password"
            id="outlined-multiline-static"
            label="パスワード"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)//
            }}
            sx={{
              justifyContent: "center",
              mb: 5,
              width:400,
              backgroundColor: '#f5f5f5'
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
          <Button variant="contained"  href="#outlined-buttons" onClick={login} sx={{p:2}}>
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