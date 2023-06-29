// @ts-nocheck
import  React, {useState,useEffect} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import  {firestore} from '@/utils/firebase';//自分が作成した @/=は自分作成した。
import  {query,collection,where,getDocs,} from 'firebase/firestore';
import { text } from 'stream/consumers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';//
import { alignProperty } from '@mui/material/styles/cssUtils';
import {getAuth} from 'firebase/auth'
import dayjs, { Dayjs } from 'dayjs';
import Container from "@mui/material/Container";
import Image from 'next/image'
import LogoutButton from '@/components/LogoutButton';
import PasswordChengeButton from '@/components/PasswordChengeButton'



type Reports={
name:string;
comment:string;
condition:number;
date:number;
goal:string;
id:string;
managerId:string;
place:string;
playerId:string;
text:string;
weather:string;
}

export default function DisableElevation() {
  const today = new Date()//Calendarの日付部分の今を表す設定
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(today));

  console.log(value);
  const auth=getAuth();
  const [uid, setUid] = useState('');
  const getUid = async()=>{
    const user = auth.currentUser//ログインしないとコンソールでnull
    console.log(user);
    if(user){
      setUid(user?.uid)
    }
  }//自分のチームのmanagerIDの部分のレポートだけ抜き取る

  useEffect(()=>{
    getUid()
    console.log(uid)
  },[auth])
  const [reports,setReports]= useState<Reports[]>([])
  const [filteredReports,setFilteredReports]= useState<Reports[]>([])
  const getReports = async () => {
    const reportsQuery=query(collection(firestore,'reports'),where('managerId','==',uid))
    const reportsSnap=await getDocs(reportsQuery)
    const reportsData:any=reportsSnap.docs.map(d=>d.data())
    console.log(reportsData)
    setReports(reportsData)

    const filteredReportData=reportsData.filter(e=>{
      const unixTime = e.date
      const date = dayjs(unixTime).format('YYYY-MM-DD')//
      const isSelectedDate = (date===value?.format('YYYY-MM-DD'));
      return isSelectedDate
    })
    setFilteredReports(filteredReportData);
  }
  useEffect(()=>{
    getReports()
  },[uid])//中のuidを取ってから動く



  const changeReports = async () => {
    const filteredReportData=reports.filter(e=>{
      const unixTime = e.date
      const date = dayjs(unixTime).format('YYYY-MM-DD')//
      const isSelectedDate = (date===value?.format('YYYY-MM-DD'));
      return isSelectedDate
    })
    setFilteredReports(filteredReportData);
  }
  useEffect(()=>{
    changeReports()
  },[value])

  return(
    <>
        <Image src="/calendar.jpg" alt="" fill={true} sizes='100%' style={{ filter: 'brightness(50%)',opacity:0.2 }} />


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

    <Container sx={{width:'100vw',mx:'auto',my:0,p:3,}}>


    <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      mt:4,
      mb:8,
      textDecoration:'none',
    }}>


    <Button sx={{mx:3,height:45,textDecoration:'none'}} variant="contained" disableElevation >
    <Link href={'/manager/playercreate'} >
      <p style={{color:'white'}}>プレイヤー作成</p>
      </Link>
    </Button>

    <Button sx={{mx:3,height:45,textDecoration:'none'}} variant="contained" disableElevation >
    <Link href={'/manager/accountmanagement'} >
      <p style={{color:'white'}}>プレイヤー一覧</p>
      </Link>
    </Button>
    {/* <Button  variant="contained" disableElevation>
      設定
    </Button> */}
    </Box>

    <Box>
    {/*カレンダー部分↓ */}
    <LocalizationProvider  dateAdapter={AdapterDayjs} >
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} sx={{width:600,backgroundColor:'whitesmoke'}} />
    </LocalizationProvider>
    </Box>


    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      listStyle:'none',
    }}>
      {filteredReports.map(e=>{
        return <div   className='reports' key={e.id}>
          <Link href={'/manager/report?id='+e.id}>
          <Card sx={{ margin:2, }}>
      <CardActionArea  sx={{width:350,backgroundColor: 'whitesmoke', }}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.name}
          </Typography>

          <Typography  sx={{fontSize:14,}}>
          {'目標：'+e.goal}
          {/* 選手のレポート部分の目標を持ってきている */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
        </div>
      })}
    </Box>

    </Container>
    </>
  );
}
