//import styles from '@/styles/Report.module.css'
import React,{use, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { width } from '@mui/system';
import { firestore } from '../../utils/firebase';
import { collection,doc,setDoc, } from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

//sxでcssをあてる
export default function Report() {
  const [ place,setPlace ] = useState('グランド');
  const [isPlaceError,setPlaceError] = useState(false);//ここもエラー時

  const [ weather,setWeather ] = useState('晴れ');
  const [isWeatherError,setWeatherError] = useState(false);//ここもエラー時

  const [ goal,setGoal ] = useState('');
  const [isGoalError,setGoalError] = useState(false);//ここもエラー時

  const [isTextError,setTextError] = useState(false);//ここもエラー時
  const [ text,setText ] = useState('');

  const [condition, setCondition] = useState(0);
  const [error, setError] = useState('');

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

     const docRef=doc(collection(firestore,"reports"))//どのfirebaseに保存するかを決めている
    const reportData={
       place:place,
       weather:weather,
       goal:goal,
       condition:condition,
       text:text,
       comment:"",
      playerId:"aaa",
      managerId:"ggg",
      date:new Date().getTime(),
      id:docRef.id
     }
    await setDoc(docRef,reportData)//await＝結果が出るまで待つ
    alert("送信が完了しました。")
  }



  return (
    <Container maxWidth="md" sx={{p:4}}>

      <Box sx={{ textAlign: "center", borderBottom: "solid 0.01px red ", mb: 4,fontSize:30, }}>
        <h1>REPORT</h1>
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
      <Button variant="outlined" size="small" sx={{mx:2}}>下書き保存</Button>
          <Button variant="contained"  sx={{mx:2}}  href="#outlined-buttons" onClick={(createPost)=>submit()}>送信</Button>

      </Box>
      </Container>
  )
}
