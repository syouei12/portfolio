// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {use, useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {firestore,functions } from '@/utils/firebase'
import {getAuth} from 'firebase/auth'
import {useRouter} from 'next/router'
import { collection,doc,setDoc, } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';//サーバー側の関数を呼ぶ
import Link from 'next/link';//


//sxでcssをあてる
export default function PlayerCreate() {

  const auth=getAuth();
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')

  const [uid, setUid] = useState('');
  const getUid = async()=>{
    const user = auth.currentUser//ログインしないとコンソールでnull
    console.log(user);
    if(user){
      setUid(user?.uid)
    }
  }

  useEffect(()=>{
    getUid()
    console.log(uid)
  },[auth])

  const createAccount =async () => {
    if(email===''){//メールアドレスが空白の場合
      alert('メールアドレスを入力してください')
      }
    if(password===''){
        alert('パスワードを入力してください')
      }//パスワードの空白の場合
    if(name===''){
      alert('名前を入力してください')
    }

    const callServer=httpsCallable(functions,'createPlayerAccount');
    await callServer({
      email:email,
      name:name,
      password:password,
      managerId:uid,
    })
    alert('アカウントを作成しました')
    await router.push('/manager/calendar')
  //  await createUserWithEmailAndPassword(auth,email,password)
  //  .then(async(userCredential)=>{//うまく行った場合
  //   const user = userCredential.user
  //   console.log(user)

  //   const uid=user.uid

  //   const docRef=doc(collection(firestore,"players"),uid)//どのfirebaseに保存するかを決めている
  //   const playerData={
  //     email:email,
  //     name:name,
  //     id:uid
    }//クリエイトアカウントに反映させる
    //await setDoc(docRef,playerData)//await＝結果が出るまで待つ
    //登録後カレンダーにとぶ
  // })
  // .catch((error)=>{//失敗した場合
  // alert('アカウント作成に失敗しました')
  // })}

  return (
    <>
      <Container maxWidth="md" sx={{ p: 4 }}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
          sx={{ textAlign: "center", borderBottom: "solid 0.01px red ", mb: 4,fontSize:30, }}
        >
          <p >PLAYERCREATE</p>
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
              mb: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
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
        <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        width:800,
      }}>
      <Link href="/manager/calendar">
      <Button variant="outlined" size="small" sx={{mx:3,p:2}}>戻る</Button>
      </Link>
          <Button variant="contained" href="#outlined-buttons" onClick={createAccount} sx={{p:0.01}}>
            <p>作成</p>
          </Button>
          </Box>

      </Container>
    </>
  );
}
