// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import React,{use, useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { width } from '@mui/system';
import { firestore, } from '../../utils/firebase';
import { collection,doc,setDoc,getDoc, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LogoutButton from '@/components/LogoutButton';
import PasswordChengeButton from '@/components/PasswordChengeButton'


//sxでcssをあてる
export default function Report() {

  const auth=getAuth();
  const [ place,setPlace ] = useState('');
  const [isPlaceError,setPlaceError] = useState(false);//ここもエラー時

  const [ weather,setWeather ] = useState('');
  const [isWeatherError,setWeatherError] = useState(false);//ここもエラー時

  const [ goal,setGoal ] = useState('');
  const [isGoalError,setGoalError] = useState(false);//ここもエラー時

  const [isTextError,setTextError] = useState(false);//ここもエラー時
  const [ text,setText ] = useState('');

  const [condition, setCondition] = useState(0);
  const [error, setError] = useState('');
  const router=useRouter()

  const [uid, setUid] = useState('');
  const getUid = async()=>{
    const user = auth.currentUser//ログインしないとコンソールでnull
    console.log(user);
    if(user){
      setUid(user?.uid)
    }
  }
    const [showAlert, setShowAlert] = useState(false);


  useEffect(()=>{
    getUid()
    console.log(uid)
  },[auth]) //[]に何もないときは一回動く←ページが読み込まれたとき、変わるたびに起動もする
//async
  const submit =async ()=>{

    // console.log(place);
    //   console.log(weather);
    //   console.log(goal);
    //   console.log(text);
    //   console.log(condition);


    if(place===''){
      alert("場所は必須入力です")
      return
    }
      if(weather===''){
        alert("天気は必須入力です")
        return
      }
      if(goal===''){
        alert("目標は必須入力です")
        return
      }
      if(text===''){
        alert("良かった所・悪かった所。質問は必須入力です")
        return
      }
      if(condition===0){
        alert("調子は必須項目です")
        return
      }
    const docRef=doc(collection(firestore,"players"),uid)//どのfirebaseに保存するかを決めている
    const playerSnap = await getDoc(docRef);
    const playerData = playerSnap.data();//Playerのfirestoreのデータ
    const reportDocRef =doc(collection(firestore,"reports"))

    const reportData={
      name:playerData.name,
      place:place,
      weather:weather,
      goal:goal,
      condition:condition,
      text:text,
      comment:"",
      playerId:uid,
      managerId:playerData.managerId,
      date:new Date().getTime(),
      id:reportDocRef.id
    }}

const handleClick = () => {
    setShowAlert(true)}

  return (
    <>
    <Snackbar
  open={showAlert}
  autoHideDuration={6000}
  onClose={() => setShowAlert(false)}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
  <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
    送信しました
  </Alert>
</Snackbar>

    <Image src="/report.jpg" alt="" layout="fill" objectFit="cover" style={{ filter: 'brightness(50%)',backgroundColor: 'white',opacity:0.2 }} />
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

    <Container maxWidth="md" sx={{p:4}}>



      <Box sx={{ textAlign: "center", mt:10, mb: 4,fontSize:20, }}>
        <h1>レポート</h1>
      </Box>

      <Box
      sx={{
        display:'flex',
        width:800,
        mb:2
      }}
      >

      <TextField
      id="outlined-multiline-static"
          label="場所"
          fullWidth
          type="text"
          value={place}
          onChange={(e)=> {
            setPlaceError(e.target.value==='')//ここもエラー時
            setPlace(e.target.value)
          }}
          error={isPlaceError}
          helperText={isPlaceError ? "必須入力です。" : ''}//ここもエラー時
          sx={{mx:1}}
          />


        <TextField
          id="outlined-multiline-static"
          label="天気"
          fullWidth
          sx={{mx:1}}
          value={weather}
          onChange={(e) =>{
            setWeatherError(e.target.value==='')//ここもエラー時
            setWeather(e.target.value)}
          }
          error={isWeatherError}
          helperText={isWeatherError ? "必須入力です。" : ''}//ここもエラー時
        />


      </Box>
      <Box
      sx={{
        display:'flex',
        width:800
      }}
      >
        <TextField
          id="outlined-multiline-static"
          label="今日の目標"
          fullWidth
          sx={{mx:1}}
          type="text"
          value={goal}
          onChange={(e) =>{
            setGoalError(e.target.value==='')//ここもエラー時
            setGoal(e.target.value)}
          }
          error={isGoalError}
          helperText={isGoalError ? "必須入力です。" : ''}//ここもエラー時
        />
      </Box>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">今日の調子</Typography>
      <Rating
        name="simple-controlled"
        value={condition}
        onChange={(even, newValue) => {
          setCondition(newValue)
          //setConditionError(e.target.value==='')
        }}
      />


    </Box>
    <br/>
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width:800,
        mb:2
      }}
    >
        <TextField
          id="outlined-multiline-static"
          label="良かった所・悪かった所・質問"
          multiline
          rows={6}
          fullWidth
          sx={{mb:3}}
          type="text"
          value={text}
          onChange={(e) =>{
            setTextError(e.target.value==='')//ここもエラー時
            setText(e.target.value)}
          }
          error={isTextError}
          helperText={isTextError ? "必須入力です。" : ''}//ここもエラー時
        />


<Card sx={{ maxWidth: 800, color:"blue",mb:9, }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            監督・コーチからのメッセージ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            監督・コーチからコメントがあれば表示されます。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Box>

      <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        width:800,
      }}>
      <Link href="/player/calendar">
      <Button variant="outlined" size="small" sx={{mx:3,p:1}}>Homeに戻る</Button>
      </Link>
      <Button variant="contained"
          sx={{mx:3}}
            href="#outlined-buttons"
          onClick={handleClick}>
            送信
          </Button>
      </Box>
      </Container>
      </>
  )
}
