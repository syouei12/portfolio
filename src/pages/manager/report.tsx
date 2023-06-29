// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { width } from '@mui/system';
import {useSearchParams} from 'next/navigation';
import  {firestore} from '@/utils/firebase';//自分が作成した @/=は自分作成した。
import { doc,getDoc,updateDoc } from 'firebase/firestore';
import { Place } from '@mui/icons-material';
import {useRouter} from 'next/router'
import Link from 'next/link';//
import Image from 'next/image'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LogoutButton from '@/components/LogoutButton';
import PasswordChengeButton from '@/components/PasswordChengeButton'




//sxでcssをあてる
export default function Report() {
  const [value, setValue] = React.useState<number | null>(0);
  const searchparams = useSearchParams()
  const id = searchparams.get('id')
  console.log(id);


  const [showAlert, setShowAlert] = useState(false);

  const [report,setReport] = useState({});
  const getReport =async (reportId:string) => {
    if(!reportId)return;
    const reportRef = doc(firestore,'reports',reportId);
  const reportSnap = await getDoc(reportRef);
  const reportData = reportSnap.data() || {}
  setReport(reportData);
  };


  const [place, setPlace] = useState('');
  useEffect(() => {
      setPlace(report.place);//選手が記入したデータを取得
  }, [report]);

  const [weather, setWeather] = useState('');
  useEffect(() => {
      setWeather(report.weather);
  }, [report]);


  const [goal,setGoal ] = useState('');
  useEffect(() => {
      setGoal(report.goal);
  }, [report]);

  const [condition,setCondition ] = useState(0);
  useEffect(() => {
      setCondition(report.condition);
  }, [report]);


  const [text, setText] = useState('');
  useEffect(() => {
      setText(report.text);
  }, [report]);

  const [comment,setComment ] = useState('');
  useEffect(() => {
      setComment(report.comment);
  }, [report]);

  useEffect(()=>{
    getReport(id);
  },[id]);


  // const updateComment=async ()=>{
  //   const reportRef = doc(firestore,'reports',id);
  //   await updateDoc(reportRef,{comment:comment})//前は名前で後ろのコメントはユーザーが入力したコメント
  //   alert('送信しました')
  //   location.reload()
  // }

  const handleClick = () => {
    setShowAlert(true);
    // その他の処理を追加する（例えば、データの送信や画面のリロードなど）
  };

  return (
    <>
<Snackbar
  open={showAlert}
  autoHideDuration={6000}
  onClose={() => setShowAlert(false)}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
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
      <Box sx={{ textAlign: "center",mt:10, mb: 4,fontSize:20, }}>
      <h1>レポート</h1>
      </Box>
      <Box
      sx={{
        display:'flex',
        justifyContent:'center',
        width:800,
        mb:2
      }}
      >
      <TextField
          id="outlined-multiline-static"
          label="場所"
          fullWidth
          value={place}
          sx={{mx:1}}
          aria-readonly//記入できない設定
        />
        <TextField
          id="outlined-multiline-static"
          label="天気"
          fullWidth
          value={weather}
          sx={{mx:1}}
          aria-readonly
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
          value={goal}
          sx={{mx:1}}
          aria-readonly
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
          setValue(newValue);
          <Rating name="no-value" value={condition} />
        }}
        readOnly//記入できない設定
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
          value={text}
          sx={{mb:3}}
          aria-readonly
        />


        <TextField
          id="outlined-multiline-static"
          label="監督・コーチからメッセージ"
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={(e)=> {
            setComment(e.target.value)
          }}
        />
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
  };
