// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import {firestore,functions} from '@/utils/firebase'
import {collection,where,getDocs,query} from 'firebase/firestore'
import {useRouter} from 'next/router'
import {getAuth} from 'firebase/auth'
import { httpsCallable } from 'firebase/functions';//サーバー側の関数を呼ぶ
import Link from 'next/link';//
import Image from 'next/image'
import LogoutButton from '@/components/LogoutButton';
import PasswordChengeButton from '@/components/PasswordChengeButton'

//sxでcssをあてる
export default function Login() {
  const auth=getAuth();
  const [uid, setUid] = useState('');
  const getUid = async()=>{
    const user = auth.currentUser//ログインしないとコンソールでnull
    console.log(user);

    if(user){
      console.log(user?.uid);
      setUid(user?.uid)
    }
  }//自分のチームのmanagerIDの部分のレポートだけ抜き取る

  useEffect(()=>{
    getUid()
    console.log(uid)
  },[auth])


  const [players,setPlayers]=useState([])
  const getPlayers =async()=>{
    const playersQuery=query(collection(firestore,'players'),where('managerId','==',uid))
    const playersSnap=await getDocs(playersQuery)
    const playersData:any=playersSnap.docs.map(d=>d.data())
    console.log(playersData)
    setPlayers(playersData)
  }
  useEffect(()=>{
    getPlayers()
  },[uid])

  const deletePlayer=async(id)=>{
    if(!confirm('本当に削除しますか？'))return
    const callServer=httpsCallable(functions,'deletePlayerAccount');
    await callServer({
      id:id,
    })
  }

  return (
    <>
        <Image src="/report.jpg" alt="" layout="fill" objectFit="cover" style={{ filter: 'brightness(50%)',opacity:0.2 }} />

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
          backgroundColor: '#333',
          color: 'white',
        }}
      >
        <Typography variant="h6">myレポート</Typography>
        <Box>
        <PasswordChengeButton></PasswordChengeButton>
      <LogoutButton></LogoutButton>
        </Box>
        
      </Box>
      <Container maxWidth="md" sx={{ p: 4 }}>

        <Box
          sx={{ textAlign: "center",mt:9, mb: 4,fontSize:30, }}
        >
          <p>プレイヤー一覧</p>
        </Box>
        <Box
    sx={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
    }}>
      {players.map(e=>{
        return(    <Card key={e.id} sx={{ margin:2, backgroundColor: '#eeffff',flex: '1 0 300px'}}>
          <CardActionArea  sx={{width:350,}}>
            <CardContent>
              <Typography gutterBottom sx={{fontSize:18,}}>
                {e.name}
              </Typography>
              <Typography  sx={{fontSize:13,}}>
                {e.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button onClick={()=>{
              deletePlayer(e.id)
            }
            } sx={{color:'red',}}>削除</Button>
        </Card>)
      })}
    </Box>

    <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        width:800,
        mt:7,
      }}>
      <Link href="/manager/calendar">
      <Button variant="outlined" size="small" sx={{mx:3,p:2}}>戻る</Button>
      </Link>
          </Box>


      </Container>
    </>
  );
}
