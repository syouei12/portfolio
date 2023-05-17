//import styles from '@/styles/Report.module.css'
import  React, {use,useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {auth,firestore} from '@/utils/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'
import { collection,doc,setDoc, } from 'firebase/firestore';


//sxでcssをあてる
export default function Login() {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const createAccount =async () => {
    if(email===''){//メールアドレスが空白の場合
      alert('メールアドレスを入力してください')
      }if(password===''){
        alert('パスワードを入力してください')
      }//パスワードの空白の場合
   await createUserWithEmailAndPassword(auth,email,password)
   .then(async(userCredential)=>{//うまく行った場合
    const user = userCredential.user
    console.log(user)

    const uid=user.uid

    const docRef=doc(collection(firestore,"managers"),uid)//どのfirebaseに保存するかを決めている
    const playerData={
      email:email,
      name:name,
      id:uid
     }//クリエイトアカウントに反映させる
    await setDoc(docRef,playerData)
    alert('アカウントを作成しました')
    await router.push('/manager/calendar')//登録後カレンダーにとぶ
  })
  .catch((error)=>{//失敗した場合
  alert('アカウント作成に失敗しました')
  })}


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
          <Box>
          <TextField
            id="outlined-multiline-static"
            label="メールアドレス"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            sx={{
                mr:2,
              }}
          />
          </Box>
          <Box
          sx={{
            textAlign: "center",
            mr:2,
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="名前"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            sx={{
              justifyContent: "center",
              mb: 3,
            }}
          />
        </Box>
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
          {/* <Button variant="contained" href="#outlined-buttons"
          sx={{
            p:2,
          }}
          >
            削除
          </Button> */}
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
