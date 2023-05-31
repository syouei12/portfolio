//import styles from '@/styles/Report.module.css'
import  React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'
import {auth} from '@/utils/firebase'



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
      <Container maxWidth="md" sx={{ p: 10,bgcolor:"#DBE6E0"}}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
          sx={{ textAlign: "center", borderBottom: "solid 0.01px red ", mb: 4,fontSize:30, }}
        >
          <p >MANAGER</p>
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
          <Button variant="contained"  href="#outlined-buttons" onClick={login}>
            ログイン
          </Button>
        </Box>
      </Container>
    </>
  );
}
