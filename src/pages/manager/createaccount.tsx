//import styles from '@/styles/Report.module.css'
import  React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {auth} from '@/utils/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'


//sxでcssをあてる
export default function Login() {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const createAccount =async () => {
   await createUserWithEmailAndPassword(auth,email,password)
    alert('アカウントを作成しました。')
    await router.push('/manager/calendar')//登録後カレンダーにとぶ
  }


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
            label="メールアドレス"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={{
                mr:4,
              }}
          />
          <TextField
            id="outlined-multiline-static"
            label="パスワード"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)//
            }}
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
          <Button variant="contained" href="#outlined-buttons" onClick={createAccount}>
            アカウント作成
          </Button>
        </Box>
      </Container>
    </>
  );
}
