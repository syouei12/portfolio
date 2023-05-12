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
export default function PlayerCreate() {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const createAccount =async () => {
    if(email===''){//メールアドレスが空白の場合
      alert('メールアドレスを入力してください')
      }if(password===''){
        alert('パスワードを入力してください')
      }//パスワードの空白の場合
   await createUserWithEmailAndPassword(auth,email,password)
   .then(async()=>{//うまく行った場合
    alert('アカウントを作成しました')
    await router.push('/manager/calendar')//登録後カレンダーにとぶ
  })
  .catch((error)=>{//失敗した場合
  alert('アカウント作成に失敗しました')
  })}

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
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={{
              justifyContent: "center",
              mb: 3,
            }}
          />
        </Box>
        {/* <Box
          sx={{
            textAlign: "center",
          }}
        > */}
          {/* <TextField
            id="outlined-multiline-static"
            label="ユーザー名"
            sx={{
              justifyContent: "center",
              mb: 3,
            }} */}
          {/* />
        </Box> */}
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="パスワード"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)//
            }}
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
          <Button variant="contained" href="#outlined-buttons" onClick={createAccount}>
            作成
          </Button>
        </Box>

      </Container>
    </>
  );
}
