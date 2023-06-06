// @ts-nocheck
import  React, {useState,useEffect} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/system';
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
import Button from '@mui/material/Button';
import Image from 'next/image'


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



export default function BasicDateCalendar() {

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
    const reportsQuery=query(collection(firestore,'reports'),where('playerId','==',uid))
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

  return (
    <>
    {/* <Image src="/managerlogin.jpg" alt="" layout="fill" objectFit="cover" style={{ filter: 'brightness(90%)' }} /> */}


  <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      mt:4,
      mb:8,
      textDecoration:'none'
    }}>
      <Link href={'/player/report'} >
      <Button variant="contained" sx={{p:2}}>
          レポートを作成する
            </Button>
            </Link>
            </Box>
    <Box
    sx={{
      backgroundColor:'white',
      textAlign:"center",
      padding: '20px',
      // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    // borderRadius: '8px',
    // borderTop: '2px solid #333',
    // borderBottom: '2px solid #333',
    }}
    >
    <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DateCalendar  value={value} onChange={(newValue) => setValue(newValue)} sx={{width:600,color:"black"}}/>
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
        return <div className='reports' key={e.id}>
          <Card sx={{ margin:4,color:'' }}>
      <CardActionArea  sx={{width:350,backgroundColor:'whitesmoke'}}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,}}>
          {e.name}
          </Typography>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.place}
          </Typography>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.weather}
          </Typography>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.condition}
          </Typography>
          <Typography  sx={{fontSize:18,}}>
          {e.goal}
          {/* 選手のレポート部分の目標を持ってきている */}
          </Typography>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.text}
          </Typography>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </div>
      })}
    </Box>
    </>
    );
}

