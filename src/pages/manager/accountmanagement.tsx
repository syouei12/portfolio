// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import {auth} from '@/utils/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'


//sxでcssをあてる
export default function Login() {
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

  const sxTextField = {
    justifyContent: "center",
    mb: 3,
    width: 400,
  };


  //ifメールアドレス・パスワードが空白の場合
  return (
    <>
      <Container maxWidth="md" sx={{ p: 4 }}>

        <Box
          sx={{ textAlign: "center", borderBottom: "solid 0.01px red ",mt:9, mb: 4,fontSize:30, }}
        >
          <p>PLAYERを作成</p>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            type="email"
            label="メールアドレス"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={sxTextField}
          />
        </Box>
        {/* <Box
          sx={{
            textAlign: "center",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="ユーザー名"
            sx={sxTextField}
          />
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
            // type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)//
            }}
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
            onClick={createAccount}
          >
            作成
          </Button>
        </Box>
        <Box
          sx={{ textAlign: "center", borderBottom: "solid 0.01px red ",mt:9, mb: 4,fontSize:30, }}
        >
          <p>PLAYER一覧</p>
        </Box>
        <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      listStyle:'none',
    }}>
          <Card sx={{ margin:2, }}>
      <CardActionArea  sx={{width:350,}}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,}}>
            kkkk
          </Typography>
          <Typography  sx={{fontSize:13,}}>
            kkk
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
      </Container>
    </>
  );
}
